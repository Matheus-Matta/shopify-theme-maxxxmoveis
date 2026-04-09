'use strict';

(function () {
  const DateUtils = {
    startOfDay(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    },
    addDays(date, days) {
      const next = new Date(date);
      next.setDate(next.getDate() + days);
      return next;
    },
    formatISO(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    },
    parseISO(value) {
      const [year, month, day] = String(value).split('-').map(Number);
      if (!year || !month || !day) return null;
      return new Date(year, month - 1, day);
    },
    formatPtBr(date) {
      return new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(date);
    },
    isWeekdayAllowed(date, weekdayMap) {
      return !!weekdayMap[date.getDay()];
    },
    isWithinWindow(date, minDate, maxDate) {
      const ts = DateUtils.startOfDay(date).getTime();
      return ts >= DateUtils.startOfDay(minDate).getTime() && ts <= DateUtils.startOfDay(maxDate).getTime();
    },
    formatCard(date) {
      const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })
        .format(date)
        .replace('-feira', '')
        .toLowerCase();
      const day = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(date);
      const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date).toLowerCase();
      return `Entrega na ${weekday}, dia ${day} de ${month}`;
    },
  };

  class HolidayService {
    constructor(countryCode) {
      this._countryCode = (countryCode || 'BR').toUpperCase();
      this._cache = new Map();
    }

    async fetchByYear(year) {
      const key = `${this._countryCode}-${year}`;
      if (this._cache.has(key)) return this._cache.get(key);
      try {
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${this._countryCode}`);
        if (!response.ok) throw new Error('status ' + response.status);
        const payload = await response.json();
        const set = new Set((payload || []).map((h) => h.date));
        this._cache.set(key, set);
        return set;
      } catch (_e) {
        // API indisponível (ad-blocker, CORS, rede) — não bloqueia as datas
        const empty = new Set();
        this._cache.set(key, empty);
        return empty;
      }
    }

    async isPublicHoliday(date) {
      const iso = DateUtils.formatISO(date);
      const holidays = await this.fetchByYear(date.getFullYear());
      return holidays.has(iso);
    }

    async preload(years) {
      await Promise.allSettled(years.map((y) => this.fetchByYear(y)));
    }
  }

  class SchedulingPage {
    constructor(form) {
      this._form = form;
      this._dateInput = document.getElementById('delivery_date');
      this._dateSelectedInput = document.getElementById('delivery_date_selected');
      this._errorBox = document.getElementById('agendamento-error');
      this._debugBox = document.getElementById('agendamento-debug');
      this._customDateWrap = form.querySelector('[data-custom-date-wrap]');
      this._deliveryCardsRoot = form.querySelector('[data-delivery-cards]');
      this._dateShell = form.querySelector('.agendamento-date-shell');
      this._dateHelper = form.querySelector('[data-date-helper]');
      this._submitButtons = document.querySelectorAll('[data-agendamento-submit]');
      this._customMode = false;
      this._suggestedDates = [];

      const b = (v) => String(v) === 'true';
      this._minLeadDays = Math.max(0, parseInt(form.dataset.minLeadDays || '0', 10) || 0);
      const maxRaw = parseInt(form.dataset.maxLeadDays || '0', 10) || 0;
      this._maxLeadDays = Math.max(this._minLeadDays, maxRaw);
      this._blockPublicHolidays = b(form.dataset.blockPublicHolidays);
      this._blockManualHolidays = b(form.dataset.blockManualHolidays);
      this._weekdayEnabled = {
        0: b(form.dataset.deliverySunday),
        1: b(form.dataset.deliveryMonday),
        2: b(form.dataset.deliveryTuesday),
        3: b(form.dataset.deliveryWednesday),
        4: b(form.dataset.deliveryThursday),
        5: b(form.dataset.deliveryFriday),
        6: b(form.dataset.deliverySaturday),
      };
      this._hasAtLeastOneWeekday = Object.values(this._weekdayEnabled).some(Boolean);
      this._manualHolidaySet = new Set(
        (form.dataset.manualHolidayDates || '')
          .split(/\r?\n|,|;/)
          .map((s) => s.trim())
          .filter((s) => /^\d{4}-\d{2}-\d{2}$/.test(s))
      );
      this._holidays = new HolidayService(form.dataset.holidayCountryCode || 'BR');
      this._debugEnabled = /[?&]agendamentoDebug=1(&|$)/.test(window.location.search);

      const today = DateUtils.startOfDay(new Date());
      this._minDate = DateUtils.addDays(today, this._minLeadDays);
      this._maxDate = DateUtils.addDays(today, this._maxLeadDays);
    }

    async init() {
      const { _form: form, _dateInput: dateInput } = this;

      if (!form || !dateInput || !this._dateSelectedInput || !this._errorBox || !this._customDateWrap || !this._deliveryCardsRoot) return;
      if (form.dataset.agendamentoInitialized === 'true') return;
      form.dataset.agendamentoInitialized = 'true';
      form.setAttribute('novalidate', 'novalidate');

      if (this._debugBox && !this._debugEnabled) this._debugBox.classList.add('hidden');

      await this._initCalendar();
      this._bindSubmit();

      await this._initDeliveryOptions();
    }

    async _isBlockedHoliday(date) {
      if (this._blockManualHolidays && this._manualHolidaySet.has(DateUtils.formatISO(date))) return true;
      if (!this._blockPublicHolidays) return false;
      return this._holidays.isPublicHoliday(date);
    }

    async _collectSuggestedDates(limit) {
      const dates = [];
      let cursor = new Date(this._minDate);
      while (cursor <= this._maxDate && dates.length < limit) {
        if (DateUtils.isWeekdayAllowed(cursor, this._weekdayEnabled)) {
          if (!(await this._isBlockedHoliday(cursor))) {
            dates.push(DateUtils.formatISO(cursor));
          }
        }
        cursor = DateUtils.addDays(cursor, 1);
      }
      return dates;
    }

    async _initDeliveryOptions() {
      if (!this._hasAtLeastOneWeekday) {
        this._setError('Nenhum dia da semana está habilitado para entrega. Ajuste isso no editor do tema.');
        this._dateInput.disabled = true;
        return;
      }

      try {
        this._suggestedDates = await this._collectSuggestedDates(3);
      } catch (_e) {
        this._setError('Não foi possível carregar as datas sugeridas agora.');
        this._setCustomMode(true);
        return;
      }

      const savedDate = (this._dateSelectedInput.value || '').trim();
      const isInSuggestions = this._suggestedDates.includes(savedDate);
      let selected = '';

      if (isInSuggestions) {
        selected = savedDate;
      } else if (savedDate) {
        selected = '__custom__';
      } else if (this._suggestedDates.length >= 2) {
        selected = this._suggestedDates[1];
      } else if (this._suggestedDates.length === 1) {
        selected = this._suggestedDates[0];
      } else {
        selected = '__custom__';
      }

      this.renderSuggestedCards(this._suggestedDates, selected);

      if (savedDate && !isInSuggestions) {
        this._setCustomMode(true);
        this._dateInput.value = savedDate;
        this._syncDateHelper(savedDate);
        this._syncCustomCardPreview(savedDate);
      } else {
        this._dateSelectedInput.value = selected;
        this._setCustomMode(selected === '__custom__');
        const iso = selected === '__custom__' ? this._dateInput.value : '';
        this._syncDateHelper(iso);
        this._syncCustomCardPreview(iso);
      }
    }

    renderSuggestedCards(dates, selectedIso) {
      const rowsHtml = dates.map((iso, index) => {
        const dateObj = DateUtils.parseISO(iso);
        const label = dateObj ? DateUtils.formatCard(dateObj) : iso;
        const subtitle = this._getCardSubtitle(index);
        const checked = iso === selectedIso;
        return `
          <label class="delivery-card ${checked ? 'is-selected' : ''}" data-delivery-card>
            <span class="delivery-card-main">
              <input type="radio" name="delivery_date_option" value="${iso}" ${checked ? 'checked' : ''}>
              <span class="delivery-card-content">
                <p class="delivery-card-title">${label}</p>
                <p class="delivery-card-subtitle">${subtitle}</p>
              </span>
            </span>
          </label>`;
      }).join('');

      const customChecked = selectedIso === '__custom__';
      const customCardHtml = `
        <label class="delivery-card delivery-card-custom ${customChecked ? 'is-selected' : ''}" data-delivery-card>
          <span class="delivery-card-main">
            <input type="radio" name="delivery_date_option" value="__custom__" ${customChecked ? 'checked' : ''}>
            <span class="delivery-card-content">
              <p class="delivery-card-title" data-custom-date-title>Personalizar data de entrega</p>
              <p class="delivery-card-subtitle" data-custom-date-subtitle>Escolha manualmente um dia disponível</p>
            </span>
          </span>
        </label>`;

      this._deliveryCardsRoot.innerHTML = rowsHtml + customCardHtml;
      this._syncCustomCardPreview(this._dateInput.value);

      this._deliveryCardsRoot.querySelectorAll('input[name="delivery_date_option"]').forEach((radio) => {
        radio.addEventListener('change', () => {
          if (radio.value === '__custom__') {
            this._dateSelectedInput.value = '';
            this._setCustomMode(true);
            this._openDatePicker();
          } else {
            this._dateSelectedInput.value = radio.value;
            this._setCustomMode(false);
            this._syncCustomCardPreview('');
          }
          this._deliveryCardsRoot.querySelectorAll('[data-delivery-card]').forEach((card) => {
            card.classList.toggle('is-selected', card.contains(radio));
          });
          this._setError('');
        });
      });
    }

    _setSubmitting(state) {
      this._isSubmitting = state;
      this._submitButtons.forEach((btn) => {
        btn.disabled = state;
        btn.style.opacity = state ? '0.65' : '';
        btn.style.cursor = state ? 'wait' : '';
      });
    }

    async handleSubmit() {
      if (this._isSubmitting) return;
      this._setError('');
      this._setSubmitting(true);

      const checkedRadio = this._form.querySelector('input[name="delivery_date_option"]:checked');
      const selectedFromCards = checkedRadio ? checkedRadio.value : '';
      const deliveryDate = (
        this._customMode || selectedFromCards === '__custom__'
          ? this._dateInput.value
          : (selectedFromCards || this._dateSelectedInput.value || '')
      ).trim();

      if (!deliveryDate) {
        this._setError('Selecione uma data para continuar.');
        if (this._customMode) this._dateInput.focus();
        this._setSubmitting(false);
        return;
      }

      const _parsedDate = DateUtils.parseISO(deliveryDate);
      if (!_parsedDate) {
        this._setError('Data inválida. Selecione uma data disponível.');
        this._setSubmitting(false);
        return;
      }
      if (!DateUtils.isWithinWindow(_parsedDate, this._minDate, this._maxDate)) {
        this._setError('A data escolhida está fora da janela de entrega disponível.');
        if (this._customMode) this._dateInput.focus();
        this._setSubmitting(false);
        return;
      }
      if (!DateUtils.isWeekdayAllowed(_parsedDate, this._weekdayEnabled)) {
        this._setError('Este dia da semana não está disponível para entrega. Escolha outra data.');
        if (this._customMode) this._dateInput.focus();
        this._setSubmitting(false);
        return;
      }
      if (await this._isBlockedHoliday(_parsedDate)) {
        this._setError('Esta data é um feriado e não está disponível para entrega. Escolha outra data.');
        if (this._customMode) this._dateInput.focus();
        this._setSubmitting(false);
        return;
      }

      try {
        const response = await fetch(
          (window.Shopify && window.Shopify.routes ? window.Shopify.routes.root : '/') + 'cart/update.js',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              attributes: {
                Agendamento: deliveryDate,
                'Turno de entrega': '',
                'Observação de entrega': '',
              },
            }),
          }
        );

        if (!response.ok) {
          let msg = 'Não foi possível salvar o agendamento. Tente novamente.';
          try {
            const payload = await response.json();
            if (payload && payload.description) msg = payload.description;
          } catch (_e) {}
          throw new Error(msg);
        }

        const config = window.SchedulingConfig || {};
        const checkoutUrl = config.checkoutUrl || '/checkout';
        this._redirect(checkoutUrl);
      } catch (err) {
        this._setSubmitting(false);
        this._setError(err.message || 'Não foi possível salvar o agendamento. Tente novamente.');
      }
    }

    _redirect(url) {
      try {
        if (window.top && window.top !== window) {
          window.top.location.href = url;
        } else {
          window.location.assign(url);
        }
      } catch (_e) {
        window.location.href = url;
      }
    }

    _getCardSubtitle(index) {
      if (index === 1) return 'Entrega econômica na próxima janela';
      if (index === 2) return 'Seu dia de entregas';
      return 'Entrega recomendada';
    }

    _syncDateHelper(isoValue) {
      if (!this._dateHelper) return;
      if (!isoValue) {
        this._dateHelper.textContent = 'Escolha uma data dentro da janela disponível.';
        return;
      }
      const date = DateUtils.parseISO(isoValue);
      if (!date) {
        this._dateHelper.textContent = 'Escolha uma data válida.';
        return;
      }
      this._dateHelper.textContent = `Data selecionada: ${DateUtils.formatPtBr(date)}.`;
    }

    _syncCustomCardPreview(isoValue) {
      const titleEl = this._deliveryCardsRoot.querySelector('[data-custom-date-title]');
      const subtitleEl = this._deliveryCardsRoot.querySelector('[data-custom-date-subtitle]');
      if (!titleEl || !subtitleEl) return;
      const date = DateUtils.parseISO(isoValue);
      if (!date) {
        titleEl.textContent = 'Personalizar data de entrega';
        subtitleEl.textContent = 'Escolha manualmente um dia disponível';
      } else {
        titleEl.textContent = DateUtils.formatCard(date);
        subtitleEl.textContent = 'Data personalizada selecionada';
      }
    }

    _setCustomMode(enabled) {
      this._customMode = enabled;
      this._customDateWrap.classList.toggle('hidden', !enabled);
      if (enabled && this._calEl) {
        const selectedISO = this._dateInput.value;
        const targetDate = selectedISO ? DateUtils.parseISO(selectedISO) : this._minDate;
        if (targetDate) { this._calYear = targetDate.getFullYear(); this._calMonth = targetDate.getMonth(); }
        this._renderCalendarMonth();
      }
    }

    _setError(message) {
      if (!message) {
        this._errorBox.textContent = '';
        this._errorBox.classList.add('hidden');
        return;
      }
      this._errorBox.textContent = message;
      this._errorBox.classList.remove('hidden');
      requestAnimationFrame(() => {
        this._errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        this._errorBox.focus({ preventScroll: true });
      });
    }

    _openDatePicker() {
      if (this._calEl) {
        this._calEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    async _initCalendar() {
      this._calEl = this._form.querySelector('[data-custom-calendar]');
      if (!this._calEl) return;
      this._calYear  = this._minDate.getFullYear();
      this._calMonth = this._minDate.getMonth();
      // Pré-carrega feriados dos anos visíveis
      const years = [this._minDate.getFullYear()];
      if (this._maxDate.getFullYear() !== this._minDate.getFullYear()) years.push(this._maxDate.getFullYear());
      await this._holidays.preload(years);
      // Se já há data salva, abre no mês dela
      const saved = (this._dateInput.value || '').trim();
      if (saved) {
        const d = DateUtils.parseISO(saved);
        if (d) { this._calYear = d.getFullYear(); this._calMonth = d.getMonth(); }
      }
      await this._renderCalendarMonth();
    }

    async _renderCalendarMonth() {
      if (!this._calEl) return;
      const year  = this._calYear;
      const month = this._calMonth;
      const today       = DateUtils.startOfDay(new Date());
      const selectedISO = (this._dateInput.value || '').trim();
      let publicHolidaySet = new Set();
      if (this._blockPublicHolidays) {
        try { publicHolidaySet = await this._holidays.fetchByYear(year); } catch (_) {}
      }
      const monthLabel = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })
        .format(new Date(year, month, 1))
        .replace(/^\w/, c => c.toUpperCase());
      const firstDayOfWeek = new Date(year, month, 1).getDay();
      const daysInMonth    = new Date(year, month + 1, 0).getDate();
      const minMonthMs = new Date(this._minDate.getFullYear(), this._minDate.getMonth(), 1).getTime();
      const maxMonthMs = new Date(this._maxDate.getFullYear(), this._maxDate.getMonth(), 1).getTime();
      const curMonthMs = new Date(year, month, 1).getTime();
      const prevDisabled = curMonthMs <= minMonthMs;
      const nextDisabled = curMonthMs >= maxMonthMs;
      const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      let html = `
        <div class="ag-cal-nav">
          <button type="button" class="ag-cal-nav-btn" data-cal-prev${prevDisabled ? ' disabled' : ''}>
            <span class="material-symbols-outlined" style="font-size:18px;line-height:1">chevron_left</span>
          </button>
          <span class="ag-cal-month-label">${monthLabel}</span>
          <button type="button" class="ag-cal-nav-btn" data-cal-next${nextDisabled ? ' disabled' : ''}>
            <span class="material-symbols-outlined" style="font-size:18px;line-height:1">chevron_right</span>
          </button>
        </div>
        <div class="ag-cal-weekdays">${weekdays.map(d => `<span class="ag-cal-weekday">${d}</span>`).join('')}</div>
        <div class="ag-cal-days">`;
      for (let i = 0; i < firstDayOfWeek; i++) html += `<span class="ag-cal-day ag-cal-day--empty"></span>`;
      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const iso  = DateUtils.formatISO(date);
        const isToday    = DateUtils.startOfDay(date).getTime() === today.getTime();
        const isSelected = iso === selectedISO;
        const disabled   = !DateUtils.isWithinWindow(date, this._minDate, this._maxDate)
          || !DateUtils.isWeekdayAllowed(date, this._weekdayEnabled)
          || (this._blockPublicHolidays && publicHolidaySet.has(iso))
          || (this._blockManualHolidays && this._manualHolidaySet.has(iso));
        const cls = ['ag-cal-day',
          isToday    ? 'ag-cal-day--today'    : '',
          isSelected ? 'ag-cal-day--selected' : '',
          disabled   ? 'ag-cal-day--disabled' : '',
        ].filter(Boolean).join(' ');
        html += `<button type="button" class="${cls}" data-cal-day="${iso}"${disabled ? ' disabled' : ''}>${d}</button>`;
      }
      html += `</div>`;
      this._calEl.innerHTML = html;
      this._calEl.querySelector('[data-cal-prev]')?.addEventListener('click', async () => {
        this._calMonth--; if (this._calMonth < 0)  { this._calMonth = 11; this._calYear--; }
        await this._renderCalendarMonth();
      });
      this._calEl.querySelector('[data-cal-next]')?.addEventListener('click', async () => {
        this._calMonth++; if (this._calMonth > 11) { this._calMonth = 0;  this._calYear++; }
        await this._renderCalendarMonth();
      });
      this._calEl.querySelectorAll('[data-cal-day]').forEach(btn => {
        btn.addEventListener('click', () => {
          const iso = btn.dataset.calDay;
          this._dateInput.value = iso;
          this._syncDateHelper(iso);
          this._syncCustomCardPreview(iso);
          this._setError('');
          this._renderCalendarMonth();
        });
      });
    }

    _bindSubmit() {
      this._form.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await this.handleSubmit();
      });

      this._submitButtons.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          e.stopPropagation();
          await this.handleSubmit();
        });
      });
    }
  }

  const initScheduling = () => {
    const form = document.getElementById('AgendamentoForm');
    if (!form) return;
    new SchedulingPage(form).init();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScheduling);
  } else {
    initScheduling();
  }

  document.addEventListener('shopify:section:load', (e) => {
    const root = e.target;
    const form = root && root.querySelector('#AgendamentoForm');
    if (!form) return;
    form.dataset.agendamentoInitialized = '';
    new SchedulingPage(form).init();
  });

  window.SchedulingPage = SchedulingPage;
  window.DateUtils = DateUtils;
  window.HolidayService = HolidayService;
})();
