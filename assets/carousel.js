(function () {
  'use strict';

  // ── CarouselController ──────────────────────────────────────────────────────
  // Gerencia scroll horizontal + setas para um carrossel.
  //
  // Uso:
  //   const ctrl = new CarouselController(track, { prev, next, slideSelector, mobileBreakpoint });
  //   ctrl.bind();        — ativa eventos
  //   ctrl.updateArrows(); — atualiza estado das setas
  function CarouselController(track, opts) {
    opts = opts || {};
    this.track     = track;
    this.prev      = opts.prev  || null;
    this.next      = opts.next  || null;
    this.slideSelector    = opts.slideSelector    || '.featured-slide, .ctc-slide, [data-slide]';
    this.mobileBreakpoint = opts.mobileBreakpoint || 767;
  }

  CarouselController.prototype.getStep = function () {
    var track = this.track;
    if (!track) return 320;
    var firstSlide = track.querySelector(this.slideSelector);
    if (!firstSlide) return Math.max(260, Math.round(track.clientWidth * 0.85));
    var styles = window.getComputedStyle(track);
    var gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return firstSlide.getBoundingClientRect().width + gap;
  };

  CarouselController.prototype.updateArrows = function () {
    var track = this.track;
    var prev  = this.prev;
    var next  = this.next;
    if (!track || !prev || !next) return;

    var isMobile = window.matchMedia('(max-width: ' + this.mobileBreakpoint + 'px)').matches;
    if (isMobile) {
      prev.style.display = 'none';
      next.style.display = 'none';
      return;
    }

    var tolerance = 2;
    var maxLeft = track.scrollWidth - track.clientWidth;
    var canScroll = maxLeft > tolerance;
    if (!canScroll) {
      prev.style.display = 'none'; prev.disabled = true;
      next.style.display = 'none'; next.disabled = true;
      return;
    }

    var canGoPrev = track.scrollLeft > tolerance;
    var canGoNext = track.scrollLeft < (maxLeft - tolerance);
    prev.style.display = canGoPrev ? 'inline-flex' : 'none'; prev.disabled = !canGoPrev;
    next.style.display = canGoNext ? 'inline-flex' : 'none'; next.disabled = !canGoNext;
  };

  CarouselController.prototype.bind = function () {
    var self = this;
    var track = this.track;
    var prev  = this.prev;
    var next  = this.next;

    if (prev) {
      prev.addEventListener('click', function () {
        track.scrollBy({ left: -self.getStep(), behavior: 'smooth' });
        window.setTimeout(function () { self.updateArrows(); }, 260);
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        track.scrollBy({ left: self.getStep(), behavior: 'smooth' });
        window.setTimeout(function () { self.updateArrows(); }, 260);
      });
    }

    if (track) {
      track.addEventListener('scroll', function () { self.updateArrows(); }, { passive: true });
    }

    window.addEventListener('resize', function () { self.updateArrows(); });

    this.updateArrows();
    window.setTimeout(function () { self.updateArrows(); }, 150);
    window.setTimeout(function () { self.updateArrows(); }, 600);
    window.addEventListener('load', function () { self.updateArrows(); });

    return this;
  };

  // ── ImageHoverCycler ──────────────────────────────────────────────────────
  // Cicla imagens de fundo em um elemento ao passar o mouse.
  //
  // Uso:
  //   ImageHoverCycler.bindAll(container, {
  //     selector: '[data-featured-media]',
  //     imagesAttr: 'data-featured-images',
  //     intervalAttr: 'data-featured-interval',
  //     renderMode: mediaRenderMode
  //   });
  function ImageHoverCycler(el, opts) {
    opts = opts || {};
    var urlsRaw = el.getAttribute(opts.imagesAttr || 'data-featured-images') || '';
    this.el        = el;
    this.urls      = urlsRaw.split('|').map(function (u) { return u.trim(); }).filter(Boolean);
    this.intervalMs = (function (attr) {
      var raw = el.getAttribute(attr || 'data-featured-interval');
      var ms  = Number.parseInt(raw || '900', 10);
      return Number.isNaN(ms) ? 900 : Math.max(400, ms);
    }(opts.intervalAttr));
    this._activeIndex = 0;
    this._timerId     = null;
  }

  ImageHoverCycler.prototype.mount = function () {
    if (!this.urls.length) return;
    this.el.style.backgroundImage = "url('" + this.urls[0] + "')";
    if (this.urls.length < 2) return;

    var self = this;
    this.el.addEventListener('mouseenter', function () {
      if (self._timerId) return;
      self._timerId = window.setInterval(function () {
        self._activeIndex = (self._activeIndex + 1) % self.urls.length;
        self.el.style.backgroundImage = "url('" + self.urls[self._activeIndex] + "')";
      }, self.intervalMs);
    });

    this.el.addEventListener('mouseleave', function () {
      if (self._timerId) { window.clearInterval(self._timerId); self._timerId = null; }
      self._activeIndex = 0;
      self.el.style.backgroundImage = "url('" + self.urls[0] + "')";
    });
  };

  ImageHoverCycler.bindAll = function (container, opts) {
    opts = opts || {};
    if (!container) return;
    var selector   = opts.selector   || '[data-featured-media]';
    var renderMode = opts.renderMode  || '';
    if (renderMode === 'image') return;
    Array.from(container.querySelectorAll(selector)).forEach(function (el) {
      new ImageHoverCycler(el, opts).mount();
    });
  };

  // ── bindClickableCards ────────────────────────────────────────────────────
  // Torna cards clicáveis via [data-card-url] sem sobrescrever links internos.
  function bindClickableCards(container, cardSelector) {
    cardSelector = cardSelector || '.gc-product-card[data-card-url]';
    if (!container) return;
    Array.from(container.querySelectorAll(cardSelector)).forEach(function (card) {
      var url = card.getAttribute('data-card-url');
      if (!url) return;
      card.addEventListener('click', function (event) {
        if (event.target.closest('a, button, input, select, textarea, label')) return;
        window.location.href = url;
      });
      card.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        window.location.href = url;
      });
    });
  }

  // ── CarouselAutoplay ──────────────────────────────────────────────────────
  // Rolagem automática para carrosséis. Pausa ao hover e quando a aba fica oculta.
  //
  // Uso:
  //   const autoplay = new CarouselAutoplay(track, {
  //     intervalMs: 4000,
  //     getStep: () => 340
  //   });
  //   autoplay.start();
  function CarouselAutoplay(track, opts) {
    opts = opts || {};
    this.track      = track;
    this.intervalMs = opts.intervalMs || 4000;
    this.getStep    = opts.getStep    || function () { return 340; };
    this._timer     = null;
  }

  CarouselAutoplay.prototype.stop = function () {
    if (this._timer) { window.clearInterval(this._timer); this._timer = null; }
  };

  CarouselAutoplay.prototype.start = function () {
    this.stop();
    var self = this;
    this._timer = window.setInterval(function () {
      var maxLeft = self.track.scrollWidth - self.track.clientWidth;
      if (maxLeft <= 1) return;
      if (self.track.scrollLeft >= maxLeft - 1) {
        self.track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        self.track.scrollBy({ left: self.getStep(), behavior: 'smooth' });
      }
    }, this.intervalMs);
  };

  CarouselAutoplay.prototype.bind = function () {
    var self  = this;
    var track = this.track;

    track.addEventListener('mouseenter', function () { self.stop(); });
    track.addEventListener('mouseleave', function () { self.start(); });
    track.addEventListener('touchstart', function () { self.stop(); }, { passive: true });
    track.addEventListener('touchend',   function () { self.start(); });

    window.addEventListener('resize', function () { self.start(); });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { self.stop(); } else { self.start(); }
    });

    this.start();
    return this;
  };

  // ── Exports ───────────────────────────────────────────────────────────────
  window.CarouselController  = CarouselController;
  window.ImageHoverCycler    = ImageHoverCycler;
  window.CarouselAutoplay    = CarouselAutoplay;
  window.bindClickableCards  = bindClickableCards;
}());
