(function () {
  'use strict';

  var STORAGE_KEY         = 'maxxx_discount_code';
  var STORAGE_INFO_KEY    = 'maxxx_discount_info';
  var STORAGE_REMOVED_KEY = 'maxxx_discount_removed'; // sessionStorage flag

  /* ── Storage helpers ─────────────────────────────── */
  function getStoredCode() {
    try { return localStorage.getItem(STORAGE_KEY) || ''; } catch (_) { return ''; }
  }

  function storeCode(code) {
    try {
      if (code) localStorage.setItem(STORAGE_KEY, code);
      else { localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(STORAGE_INFO_KEY); }
    } catch (_) {}
  }

  function storeInfo(info) {
    try {
      if (info) localStorage.setItem(STORAGE_INFO_KEY, JSON.stringify(info));
      else localStorage.removeItem(STORAGE_INFO_KEY);
    } catch (_) {}
  }

  function getStoredInfo() {
    try { return JSON.parse(localStorage.getItem(STORAGE_INFO_KEY) || 'null'); } catch (_) { return null; }
  }

  /* ── Format money (Shopify returns cents as integer) ─ */
  function formatMoney(cents) {
    if (!cents && cents !== 0) return '';
    var n = cents / 100;
    var parts = n.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return 'R$\u00a0' + parts[0] + ',' + parts[1];
  }

  /* ── Extract discount amount from cart ───────────── */
  function extractDiscountFromCart(cart) {
    if (!cart) return null;
    var codes = cart.discount_codes;
    if (!codes || codes.length === 0) return null;
    var entry = codes[0];
    if (!entry || !entry.code) return null;

    var amount = 0;

    // 1ª opção: total_discount (centavos, campo oficial do Shopify)
    if (cart.total_discount && cart.total_discount > 0) {
      amount = cart.total_discount;
    }

    // 2ª opção: discount_codes[0].amount (string na moeda da loja, ex: "20.00")
    if (amount === 0 && entry.amount) {
      var parsed = Math.round(parseFloat(String(entry.amount).replace(',', '.')) * 100);
      if (parsed > 0) amount = parsed;
    }

    return {
      code: entry.code,
      amount: amount,
      amountFormatted: amount > 0 ? '-' + formatMoney(amount) : ''
    };
  }

  /* ── Patch checkout links with ?discount=CODE ─────── */
  function patchCheckoutLinks(code) {
    var links = document.querySelectorAll('[data-cart-checkout]');
    links.forEach(function (el) {
      var base = el.getAttribute('data-checkout-base') || el.getAttribute('href') || '';
      if (!el.getAttribute('data-checkout-base')) {
        el.setAttribute('data-checkout-base', base);
      }
      if (code) {
        var url = base.indexOf('?') !== -1
          ? base + '&discount=' + encodeURIComponent(code)
          : base + '?discount=' + encodeURIComponent(code);
        el.setAttribute('href', url);
        // Limpa o cupom do localStorage ao navegar para o checkout
        if (!el.getAttribute('data-discount-checkout-bound')) {
          el.setAttribute('data-discount-checkout-bound', '1');
          el.addEventListener('click', function () {
            storeCode('');
            storeInfo(null);
          });
        }
      } else {
        el.setAttribute('href', base);
      }
    });
  }

  /* ── Update discount rows (cart summary, agendamento) ─ */
  function updateDiscountRows(info) {
    var rows = document.querySelectorAll('[data-discount-row]');
    rows.forEach(function (row) {
      if (info && info.code) {
        var labelEl = row.querySelector('[data-discount-row-label]');
        var valueEl = row.querySelector('[data-discount-row-value]');
        if (labelEl) labelEl.textContent = 'Desconto (' + info.code + ')';
        if (valueEl) valueEl.textContent = info.amountFormatted || '';
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  /* ── Refresh all total displays from cart ─────────────── */
  function refreshTotals() {
    fetchCart(function (err, cart) {
      if (err || !cart) return;
      var totalFormatted = formatMoney(cart.total_price);
      var els = document.querySelectorAll('[data-cart-total], [data-cart-total-mobile]');
      els.forEach(function (el) { el.textContent = totalFormatted; });
      var installmentsEl = document.querySelector('[data-cart-installments]');
      if (installmentsEl) {
        var count = parseInt(installmentsEl.getAttribute('data-installments-count'), 10) || 1;
        installmentsEl.textContent = formatMoney(Math.ceil(cart.total_price / count));
      }
    });
  }

  /* ── Sync all DCB widgets ─────────────────────────── */
  function syncAll(typedCode, info) {
    var appliedCode = info ? info.code : null;
    var boxes = document.querySelectorAll('[data-discount-box]');
    boxes.forEach(function (box) {
      if (box.getAttribute('data-variant-id')) return; // PDP boxes self-managed
      var input     = box.querySelector('[data-discount-input]');
      var applyBtn  = box.querySelector('[data-discount-apply]');
      var removeBtn = box.querySelector('[data-discount-remove]');
      var msg       = box.querySelector('[data-discount-message]');
      if (!input) return;

      if (appliedCode) {
        input.value    = appliedCode;
        input.disabled = true;
        if (applyBtn)  applyBtn.style.display  = 'none';
        if (removeBtn) removeBtn.style.display = '';
        if (msg) {
          var label = 'Cupom "' + appliedCode + '" aplicado!';
          if (info && info.amountFormatted) label += ' Desconto: ' + info.amountFormatted;
          msg.textContent = label;
          msg.setAttribute('data-type', 'success');
          msg.style.display = '';
        }
      } else {
        input.value    = typedCode || '';
        input.disabled = false;
        if (applyBtn)  applyBtn.style.display  = '';
        if (removeBtn) removeBtn.style.display = 'none';
        if (msg) {
          msg.style.display = 'none';
          msg.removeAttribute('data-type');
          msg.textContent = '';
        }
      }
    });

    patchCheckoutLinks(appliedCode);
    updateDiscountRows(info);
  }

  /* ── Error / loading helpers ─────────────────────── */
  function showError(box, message) {
    var msg = box.querySelector('[data-discount-message]');
    if (!msg) return;
    msg.textContent = message;
    msg.setAttribute('data-type', 'error');
    msg.style.display = '';
  }

  function setLoading(box, loading) {
    var applyBtn  = box.querySelector('[data-discount-apply]');
    var removeBtn = box.querySelector('[data-discount-remove]');
    if (applyBtn)  applyBtn.disabled = loading;
    if (removeBtn) removeBtn.disabled = loading;
  }

  /* ── Cart fetch ──────────────────────────────────── */
  function fetchCart(cb) {
    fetch('/cart.js', { headers: { 'Accept': 'application/json' } })
      .then(function (res) { return res.json(); })
      .then(function (cart) { cb(null, cart); })
      .catch(function (err) { cb(err); });
  }

  /* ── Apply discount code via Shopify cookie endpoint */
  function applyDiscountCookie(code, cb) {
    // GET /discount/{CODE} sets the Shopify discount cookie and redirects away.
    // If it redirects back to a /discount/ path, the code is invalid.
    fetch('/discount/' + encodeURIComponent(code), {
      method: 'GET',
      credentials: 'same-origin',
      redirect: 'follow'
    })
      .then(function (res) {
        var finalUrl = res.url || '';
        // Valid codes redirect away from /discount/ path
        var isValid = res.ok && finalUrl.indexOf('/discount/') === -1;
        cb(null, isValid);
      })
      .catch(function (err) { cb(err, false); });
  }

  /* ── Remove discount via Shopify cookie + cart endpoint ── */
  function clearDiscountCookie(cb) {
    // POST /cart/update.js com discount= vazio é a forma mais confiável
    // de remover o cupom da sessão Shopify via Ajax
    fetch('/cart/update.js', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'discount='
    })
      .then(function () { cb(null); })
      .catch(function (err) { cb(err); });
  }

  /* ── Apply coupon (cart / agendamento) ────────────── */
  function applyCode(box, code) {
    if (!code) return;
    setLoading(box, true);
    clearDiscountCookie(function () {
      applyDiscountCookie(code, function (err, isValid) {
        if (err) { setLoading(box, false); showError(box, 'Erro ao aplicar cupom. Tente novamente.'); return; }
        if (!isValid) {
          setLoading(box, false);
          storeCode('');
          storeInfo(null);
          syncAll('', null);
          showError(box, 'Cupom inválido.');
          return;
        }
        function verifyAndShow(attempt) {
          fetchCart(function (cartErr, cart) {
            var cartInfo = cart ? extractDiscountFromCart(cart) : null;
            var amount = cartInfo ? cartInfo.amount : 0;
            if (amount === 0 && attempt < 2) {
              setTimeout(function () { verifyAndShow(attempt + 1); }, 600);
              return;
            }
            setLoading(box, false);
            if (amount === 0) {
              storeCode('');
              storeInfo(null);
              syncAll('', null);
              clearDiscountCookie(function () {});
              try { sessionStorage.setItem(STORAGE_REMOVED_KEY, '1'); } catch (_) {}
              showError(box, 'Cupom não aplicável para este pedido (verifique o valor mínimo ou produtos elegíveis).');
              return;
            }
            try { sessionStorage.removeItem(STORAGE_REMOVED_KEY); } catch (_) {}
            var finalInfo = { code: code, amount: amount, amountFormatted: cartInfo.amountFormatted };
            storeCode(code);
            storeInfo(finalInfo);
            syncAll('', finalInfo);
            // Atualiza totais e parcelas diretamente do cart já buscado
            // (evita 2º fetch que pode retornar total ainda sem desconto)
            var effectiveTotal = Math.max(0, cart.items_subtotal_price - amount);
            var totalFormatted = formatMoney(effectiveTotal);
            document.querySelectorAll('[data-cart-total], [data-cart-total-mobile]').forEach(function (el) { el.textContent = totalFormatted; });
            var instEl = document.querySelector('[data-cart-installments]');
            if (instEl) {
              var instCount = parseInt(instEl.getAttribute('data-installments-count'), 10) || 1;
              instEl.textContent = formatMoney(Math.ceil(effectiveTotal / instCount));
            }
          });
        }
        verifyAndShow(0);
      });
    });
  }

  /* ── Remove coupon ───────────────────────────────── */
  function removeCode(box) {
    // Limpa tudo imediatamente — localStorage, sessionStorage e UI
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    try { localStorage.removeItem(STORAGE_INFO_KEY); } catch (_) {}
    try { sessionStorage.setItem(STORAGE_REMOVED_KEY, '1'); } catch (_) {}
    syncAll('', null);
    setLoading(box, true);
    clearDiscountCookie(function () {
      setLoading(box, false);
      refreshTotals();
    });
  }

  /* ── Validar código salvo via cart API e sincronizar UI ── */
  // Usa POST /cart/update.js (confiável) para confirmar se o cupom ainda é válido.
  // Chamado ao entrar no carrinho, em cart:updated e mx:cart:added.
  function validateAndSyncCode(code) {
    if (!code) { syncAll('', null); return; }
    fetch('/cart/update.js', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'discount=' + encodeURIComponent(code)
    })
      .then(function (res) { return res.json(); })
      .then(function (cart) {
        var codes = (cart && cart.discount_codes) || [];
        var recognized = codes.some(function (dc) {
          return dc.code.toUpperCase() === code.toUpperCase();
        });
        if (!recognized) {
          // Cupom expirou ou foi desativado
          storeCode('');
          storeInfo(null);
          syncAll('', null);
          refreshTotals();
          return;
        }
        var amount = (cart && cart.total_discount) || 0;
        var info = { code: code, amount: amount, amountFormatted: amount > 0 ? '-' + formatMoney(amount) : '' };
        storeCode(info.code);
        storeInfo(info);
        syncAll('', info);
        // Atualiza parcelas imediatamente do total efetivo
        var effTotal = Math.max(0, (cart.items_subtotal_price || cart.total_price || 0) - amount);
        var instEl2 = document.querySelector('[data-cart-installments]');
        if (instEl2) {
          var instCount2 = parseInt(instEl2.getAttribute('data-installments-count'), 10) || 1;
          instEl2.textContent = formatMoney(Math.ceil(effTotal / instCount2));
        }
        refreshTotals();
      })
      .catch(function () {
        // Erro de rede: manter estado salvo sem alterar UI
        var storedInfo = getStoredInfo();
        if (storedInfo) syncAll('', storedInfo);
      });
  }

  /* ── PDP: aplicar cupom via cart session e calcular desconto marginal ── */
  // Usa POST /cart/update.js?discount= (API oficial) em vez de GET /discount/ (cookie redirect não confiável).
  // Fluxo: aplica cupom → lê desconto atual → adiciona item → lê diff → restaura → limpa cupom
  function calcPdpDiscount(variantId, code, cb) {
    // 1) Ler qty atual do variant no carrinho para restaurar depois
    fetchCart(function (err, cartBefore) {
      if (err) { cb(err, false, 0); return; }
      var items = (cartBefore && cartBefore.items) || [];
      var origQty = 0;
      for (var i = 0; i < items.length; i++) {
        if (String(items[i].variant_id) === String(variantId)) { origQty = items[i].quantity; break; }
      }
      // 2) Aplicar cupom via /cart/update.js (confiável — sessão server-side)
      fetch('/cart/update.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'discount=' + encodeURIComponent(code)
      })
        .then(function (res) { return res.json(); })
        .then(function (cartWithCode) {
          var codes = (cartWithCode && cartWithCode.discount_codes) || [];
          var codeRecognized = codes.some(function (dc) {
            return dc.code.toUpperCase() === code.toUpperCase();
          });
          if (!codeRecognized) {
            clearDiscountCookie(function () {});
            cb(null, false, 0);
            return;
          }
          var discountBefore = (cartWithCode && cartWithCode.total_discount) || 0;
          // 3) Adicionar 1 unidade do variant para calcular o desconto marginal
          fetch('/cart/add.js', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ id: Number(variantId), quantity: 1 })
          })
            .then(function () { return fetch('/cart.js', { headers: { 'Accept': 'application/json' } }); })
            .then(function (res) { return res.json(); })
            .then(function (cartAfter) {
              var discountAfter = (cartAfter && cartAfter.total_discount) || 0;
              var discountCents = Math.max(0, discountAfter - discountBefore);
              // 4) Restaurar qty original do variant
              var updates = {}; updates[String(variantId)] = origQty;
              fetch('/cart/update.js', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ updates: updates })
              }).catch(function () {});
              // 5) Limpar cupom (preview only)
              clearDiscountCookie(function () {});
              cb(null, true, discountCents);
            })
            .catch(function (e) { clearDiscountCookie(function () {}); cb(e, false, 0); });
        })
        .catch(function (e) { cb(e, false, 0); });
    });
  }

  /* ── PDP: show discounted price preview ─────────── */
  function showPdpResult(box, code, origPrice, newPrice, discountCents) {
    var input     = box.querySelector('[data-discount-input]');
    var applyBtn  = box.querySelector('[data-discount-apply]');
    var removeBtn = box.querySelector('[data-discount-remove]');
    var msg       = box.querySelector('[data-discount-message]');
    var preview   = box.querySelector('[data-discount-preview]');
    if (input)     { input.value = code; input.disabled = true; }
    if (applyBtn)  applyBtn.style.display = 'none';
    if (removeBtn) removeBtn.style.display = '';
    if (msg) {
      msg.textContent = 'Cupom "' + code + '" aplicado!';
      msg.setAttribute('data-type', 'success');
      msg.style.display = '';
    }
    if (preview) {
      preview.innerHTML = '<s>' + formatMoney(origPrice) + '</s> por <strong>' + formatMoney(newPrice) + '</strong>'
        + '<span class="dcb-preview-discount"> (desconto de ' + formatMoney(discountCents) + ')</span>';
      preview.style.display = '';
    }
  }

  /* ── PDP: reset the coupon box ───────────────────── */
  function removePdpCode(box) {
    var input     = box.querySelector('[data-discount-input]');
    var applyBtn  = box.querySelector('[data-discount-apply]');
    var removeBtn = box.querySelector('[data-discount-remove]');
    var msg       = box.querySelector('[data-discount-message]');
    var preview   = box.querySelector('[data-discount-preview]');
    if (input)     { input.value = ''; input.disabled = false; }
    if (applyBtn)  applyBtn.style.display = '';
    if (removeBtn) removeBtn.style.display = 'none';
    if (msg)     { msg.style.display = 'none'; msg.removeAttribute('data-type'); msg.textContent = ''; }
    if (preview) { preview.style.display = 'none'; preview.textContent = ''; }
    clearDiscountCookie(function () {});
  }

  /* ── PDP: apply coupon (preview only, no localStorage) ── */
  function applyPdpCode(box, code) {
    if (!code) return;
    var price     = parseInt(box.getAttribute('data-product-price'), 10) || 0;
    var variantId = box.getAttribute('data-variant-id') || '';
    if (!variantId || !price) { showError(box, 'Erro: dados do produto não encontrados.'); return; }
    setLoading(box, true);
    calcPdpDiscount(variantId, code, function (calcErr, codeRecognized, discountCents) {
      setLoading(box, false);
      if (calcErr)           { showError(box, 'Erro ao calcular desconto.'); return; }
      if (!codeRecognized)   { showError(box, 'Cupom inválido.'); return; }
      if (discountCents <= 0) { showError(box, 'Cupom não aplicável a este produto (verifique valor mínimo ou produtos elegíveis).'); return; }
      showPdpResult(box, code, price, price - discountCents, discountCents);
    });
  }

  /* ── PDP: bind events ────────────────────────────── */
  function bindPdpBox(box) {
    var input     = box.querySelector('[data-discount-input]');
    var applyBtn  = box.querySelector('[data-discount-apply]');
    var removeBtn = box.querySelector('[data-discount-remove]');
    if (!input) return;
    if (applyBtn)  applyBtn.addEventListener('click', function () { applyPdpCode(box, input.value.trim().toUpperCase()); });
    if (removeBtn) removeBtn.addEventListener('click', function () { removePdpCode(box); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); applyPdpCode(box, input.value.trim().toUpperCase()); }
    });
  }

  /* ── Bind a single DCB widget ────────────────────── */
  function bindBox(box) {
    if (box.getAttribute('data-variant-id')) { bindPdpBox(box); return; }
    var input     = box.querySelector('[data-discount-input]');
    var applyBtn  = box.querySelector('[data-discount-apply]');
    var removeBtn = box.querySelector('[data-discount-remove]');
    if (!input) return;

    if (applyBtn) {
      applyBtn.addEventListener('click', function () {
        applyCode(box, input.value.trim().toUpperCase());
      });
    }
    if (removeBtn) {
      removeBtn.addEventListener('click', function () { removeCode(box); });
    }
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); applyCode(box, input.value.trim().toUpperCase()); }
    });
  }

  /* ── Init ────────────────────────────────────────── */
  function init() {
    var boxes = document.querySelectorAll('[data-discount-box]');
    boxes.forEach(bindBox);

    fetchCart(function (err, cart) {
      if (err) {
        var storedInfo = getStoredInfo();
        if (storedInfo) { syncAll('', storedInfo); } else { syncAll(getStoredCode(), null); }
        return;
      }
      // Se o usuário removeu explicitamente o cupom nesta sessão,
      // não restaurar mesmo que o cookie Shopify ainda esteja ativo
      var wasRemoved = false;
      try { wasRemoved = !!sessionStorage.getItem(STORAGE_REMOVED_KEY); } catch (_) {}
      if (wasRemoved) {
        storeCode('');
        storeInfo(null);
        syncAll('', null);
        return;
      }

      var info = extractDiscountFromCart(cart);
      if (info) {
        storeCode(info.code);
        storeInfo(info);
        syncAll('', info);
      } else {
        var stored = getStoredCode();
        if (stored) {
          validateAndSyncCode(stored);
        } else {
          syncAll('', null);
        }
      }
    });

    document.addEventListener('mx:variant:changed', function (e) {
      var detail       = (e && e.detail) || {};
      var newVariantId = String(detail.variantId || '');
      var newPrice     = Number(detail.price || 0);
      if (!newVariantId) return;
      var pdpBoxes = document.querySelectorAll('[data-discount-box][data-variant-id]');
      pdpBoxes.forEach(function (box) {
        removePdpCode(box);
        box.setAttribute('data-variant-id', newVariantId);
        box.setAttribute('data-product-price', String(newPrice));
      });
    });
    document.addEventListener('cart:updated', function () { validateAndSyncCode(getStoredCode()); });
    document.addEventListener('mx:cart:added', function () { validateAndSyncCode(getStoredCode()); });
  }

  /* ── Public API (for scheduling.js) ─────────────── */
  window.MaxxxDiscount = {
    getCode: getStoredCode,
    getInfo: getStoredInfo
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
