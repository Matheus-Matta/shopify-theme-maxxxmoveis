(function () {
  'use strict';

  if (!window.ThemeUtils) return;

  const { buildStoreUrl, escapeHtml, formatMoneyFromCents } = window.ThemeUtils;
  const formatMoneyBRL = (cents) => 'R$ ' + formatMoneyFromCents(cents);

  // ── Main init ─────────────────────────────────────────────────────────────────
  function initProductPage(sectionRoot, cfg) {
    if (!sectionRoot || sectionRoot.dataset.ppBound === 'true') return;
    sectionRoot.dataset.ppBound = 'true';

    cfg = cfg || window.ProductConfig || {};
    const installmentsCount  = Math.max(1, Number(cfg.installmentsCount) || 10);
    const compareAtMaxCents  = Number(cfg.compareAtMaxCents) || 0;
    const stickyBuyLabel     = String(cfg.buyBtnLabel || 'COMPRAR AGORA');
    const cartUrl            = String(cfg.cartUrl || '/cart');
    const shippingMessages   = cfg.shippingMessages || {};

    // ── DOM refs ────────────────────────────────────────────────────────────────
    const mainImage           = sectionRoot.querySelector('[data-main-image]');
    const thumbs              = Array.from(sectionRoot.querySelectorAll('[data-product-thumb]'));
    const productInfo         = sectionRoot.querySelector('#product-info');
    const mobileTrack         = sectionRoot.querySelector('[data-mobile-media-track]');
    const mobileCurrent       = sectionRoot.querySelector('[data-mobile-media-count-current]');
    const mobileDots          = Array.from(sectionRoot.querySelectorAll('[data-mobile-dot]'));
    const mobileThumbs        = Array.from(sectionRoot.querySelectorAll('[data-mobile-thumb]'));
    const mobileSlides        = Array.from(sectionRoot.querySelectorAll('[data-mobile-slide]'));
    const mobilePdpRoot       = sectionRoot.querySelector('[data-mobile-pdp-root]');
    const shippingCalcRoots   = Array.from(sectionRoot.querySelectorAll('[data-shipping-calc]'));
    const openLightboxButton  = sectionRoot.querySelector('[data-open-lightbox]');
    const lightbox            = sectionRoot.querySelector('[data-lightbox]');
    const lightboxImageEl     = sectionRoot.querySelector('[data-lightbox-image]');
    const lightboxClose       = sectionRoot.querySelector('[data-lightbox-close]');
    const lightboxZoomInBtns  = Array.from(sectionRoot.querySelectorAll('[data-lightbox-zoom-in]'));
    const lightboxZoomOutBtns = Array.from(sectionRoot.querySelectorAll('[data-lightbox-zoom-out]'));
    const lightboxZoomResetBtns = Array.from(sectionRoot.querySelectorAll('[data-lightbox-zoom-reset]'));
    const lightboxPrevBtns    = Array.from(sectionRoot.querySelectorAll('[data-lightbox-prev]'));
    const lightboxNextBtns    = Array.from(sectionRoot.querySelectorAll('[data-lightbox-next]'));
    const lightboxZoomLevel   = sectionRoot.querySelector('[data-lightbox-zoom-level]');
    const lightboxCounter     = sectionRoot.querySelector('[data-lightbox-counter]');
    const productForms        = Array.from(sectionRoot.querySelectorAll('[data-product-form]'));

    const _ppInitAt = Date.now();
    productForms.forEach(f => f.setAttribute('target', 'pp-form-sink'));

    let _lastCartAdd = 0;
    const onCartAdded = async () => {
      const now = Date.now();
      if (now - _lastCartAdd < 2000) return;
      _lastCartAdd = now;
      try {
        const r = await fetch(buildStoreUrl('cart.js'), { headers: { Accept: 'application/json' } });
        if (r.ok) {
          const d = await r.json();
          document.dispatchEvent(new CustomEvent('cart:updated', { detail: { itemCount: Number(d.item_count) } }));
        }
      } catch (_) {}
      Array.from(sectionRoot.querySelectorAll('[data-action-add-cart]')).forEach(btn => {
        const iconEl   = btn.querySelector('.material-symbols-outlined');
        const labelEl  = btn.querySelector('span:last-child');
        const prvIcon  = iconEl  ? iconEl.textContent  : null;
        const prvLabel = labelEl ? (btn.dataset.prvLabel || labelEl.textContent) : null;
        btn.disabled = false;
        btn.classList.add('is-cart-added');
        if (iconEl)  iconEl.textContent  = 'check';
        if (labelEl) labelEl.textContent = 'Adicionado!';
        window.setTimeout(() => {
          btn.classList.remove('is-cart-added');
          if (iconEl  && prvIcon)  iconEl.textContent  = prvIcon;
          if (labelEl && prvLabel) labelEl.textContent = prvLabel;
          delete btn.dataset.prvLabel;
        }, 1200);
      });
      [productForms[0], mobilePdpRoot && mobilePdpRoot.querySelector('[data-product-form-mobile]')]
        .filter(Boolean).forEach(el => {
          el.classList.add('is-cart-added');
          window.setTimeout(() => el.classList.remove('is-cart-added'), 650);
        });
    };

    const formSink = document.getElementById('pp-form-sink');
    if (formSink && !formSink.dataset.ppActive) {
      formSink.dataset.ppActive = 'true';
      formSink.addEventListener('load', () => {
        if (Date.now() - _ppInitAt < 500) return;
        onCartAdded();
      });
    }

    document.addEventListener('mx:cart:added', () => { onCartAdded(); });

    sectionRoot.querySelectorAll('[data-action-add-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const labelEl = btn.querySelector('span:last-child');
        if (!labelEl || labelEl.textContent === 'Adicionando...') return;
        btn.dataset.prvLabel = labelEl.textContent;
        labelEl.textContent = 'Adicionando...';
      });
    });

    const soldOutBadges       = Array.from(sectionRoot.querySelectorAll('[data-soldout-badge]'));
    const variantsJsonEl      = sectionRoot.querySelector('[data-product-variants-json]');
    const mobilePriceMajor    = sectionRoot.querySelector('[data-mobile-price-major]');
    const mobilePriceMinor    = sectionRoot.querySelector('[data-mobile-price-minor]');
    const mobileCompare       = sectionRoot.querySelector('[data-mobile-compare]');
    const mobileDiscountRow   = sectionRoot.querySelector('[data-mobile-discount-row]');
    const mobileDiscount      = sectionRoot.querySelector('[data-mobile-discount]');
    const mobileInstallment   = sectionRoot.querySelector('[data-mobile-installment]');
    const stickyBuyButton     = sectionRoot.querySelector('[data-sticky-buy-button]');
    const stickyPrice         = sectionRoot.querySelector('[data-sticky-price]');
    const stickyCompareRow    = sectionRoot.querySelector('[data-sticky-compare-row]');
    const stickyCompare       = sectionRoot.querySelector('[data-sticky-compare]');
    const stickyInstallment   = sectionRoot.querySelector('[data-sticky-installment]');
    const stickyBuyBar        = sectionRoot.querySelector('[data-sticky-buy-bar]');
    const desktopPrice        = sectionRoot.querySelector('[data-desktop-price]');
    const desktopCompareRow   = sectionRoot.querySelector('[data-desktop-compare-row]');
    const desktopCompare      = sectionRoot.querySelector('[data-desktop-compare]');
    const desktopDiscount     = sectionRoot.querySelector('[data-desktop-discount]');
    const variantOptionButtons = Array.from(sectionRoot.querySelectorAll('[data-variant-option]'));
    const optionCurrentEls    = Array.from(sectionRoot.querySelectorAll('[data-option-current]'));
    const variantSkuRows      = Array.from(sectionRoot.querySelectorAll('[data-variant-sku-row]'));
    const variantSkuEls       = Array.from(sectionRoot.querySelectorAll('[data-variant-sku]'));

    const variants = variantsJsonEl ? (JSON.parse(variantsJsonEl.textContent || '[]')) : [];
    const defaultVariantId = String(cfg.defaultVariantId || '');
    let selectedOptions = Array.isArray(cfg.selectedOptions) ? cfg.selectedOptions.slice() : ['', '', ''];

    // ── Helpers ─────────────────────────────────────────────────────────────────
    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const normalizeImageUrl = (url) => {
      const raw = String(url || '').trim();
      if (!raw) return '';
      const strip = (p) => String(p || '').replace(/_(?:\d+x\d*|x\d+|master)(?=\.[^/.]+$)/i, '');
      try {
        const parsed = new URL(raw, window.location.origin);
        return strip(parsed.pathname);
      } catch (_) {
        return strip(raw.split('?')[0]);
      }
    };

    const formatRateMoney = (value) => {
      const n = Number(value);
      if (!Number.isFinite(n)) return String(value || '');
      return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    // ── Lightbox ─────────────────────────────────────────────────────────────────
    const ZOOM_MIN = 1, ZOOM_MAX = 4, ZOOM_STEP = 0.2;
    let lbZoom = 1, lbPanX = 0, lbPanY = 0;
    let lbIsPanning = false, lbPanStartX = 0, lbPanStartY = 0;
    let lbPointerStartX = 0, lbPointerStartY = 0, lbTouchId = null;
    let lbIsPinching = false, lbPinchStartDist = 0, lbPinchStartZoom = 1;
    let lbPanMaxX = 0, lbPanMaxY = 0, lbRenderRaf = 0;
    let lbSwipeTracking = false, lbSwipeStartX = 0, lbSwipeStartY = 0;
    let lbSwipeDeltaX = 0, lbSwipeDeltaY = 0;
    let currentDesktopImageUrl = mainImage ? (mainImage.getAttribute('data-main-image-url') || '') : '';
    const initialDesktopImageUrl = currentDesktopImageUrl;
    const initialDesktopThumb = thumbs.length > 0 ? thumbs[0] : null;
    const lightboxImages = [];
    let lightboxCurrentIndex = 0;

    const registerLightboxImage = (url, key) => {
      const cleanUrl = String(url || '').trim();
      if (!cleanUrl) return;
      const normKey = String(key || '').trim();
      const normalized = normalizeImageUrl(cleanUrl);
      const exists = lightboxImages.some((img) => {
        if (normKey && img.key) return img.key === normKey;
        return normalizeImageUrl(img.url) === normalized;
      });
      if (!exists) lightboxImages.push({ key: normKey, url: cleanUrl });
    };

    thumbs.forEach((thumb) => {
      const mediaId = String(thumb.getAttribute('data-media-id') || '').trim();
      registerLightboxImage(thumb.getAttribute('data-media-url'), mediaId ? ('media-' + mediaId) : '');
    });

    mobileSlides.forEach((slide) => {
      const img = slide.querySelector('img');
      const imageId = String(slide.getAttribute('data-image-id') || '').trim();
      registerLightboxImage(img ? (img.currentSrc || img.src || '') : '', imageId ? ('media-' + imageId) : '');
    });

    registerLightboxImage(currentDesktopImageUrl);

    const getLightboxIndexByUrl = (url) => {
      const normalized = normalizeImageUrl(url);
      if (!normalized) return -1;
      return lightboxImages.findIndex((img) => normalizeImageUrl(img.url) === normalized);
    };

    const updateLightboxCounter = () => {
      if (!lightboxCounter) return;
      const total = lightboxImages.length > 0 ? lightboxImages.length : 1;
      const current = lightboxImages.length > 0 ? lightboxCurrentIndex + 1 : 1;
      lightboxCounter.textContent = current + ' / ' + total;
    };

    const updateLightboxNavState = () => {
      const multi = lightboxImages.length > 1;
      lightboxPrevBtns.forEach((b) => { b.disabled = !multi || lightboxCurrentIndex <= 0; });
      lightboxNextBtns.forEach((b) => { b.disabled = !multi || lightboxCurrentIndex >= lightboxImages.length - 1; });
    };

    const renderLightboxTransform = () => {
      if (!lightboxImageEl) return;
      lightboxImageEl.style.transform = 'translate3d(' + lbPanX + 'px,' + lbPanY + 'px,0) scale(' + lbZoom + ')';
      lightboxImageEl.style.cursor = lbZoom > 1 ? (lbIsPanning ? 'grabbing' : 'grab') : 'zoom-in';
    };

    const scheduleLightboxRender = () => {
      if (lbRenderRaf) return;
      lbRenderRaf = window.requestAnimationFrame(() => { lbRenderRaf = 0; renderLightboxTransform(); });
    };

    const clampLightboxPan = () => {
      if (!lightboxImageEl) return;
      if (lbZoom <= 1) { lbPanX = 0; lbPanY = 0; return; }
      lbPanX = clamp(lbPanX, -lbPanMaxX, lbPanMaxX);
      lbPanY = clamp(lbPanY, -lbPanMaxY, lbPanMaxY);
    };

    const applyLightboxZoom = () => {
      if (!lightboxImageEl) return;
      lbZoom = Number(clamp(lbZoom, ZOOM_MIN, ZOOM_MAX).toFixed(2));
      if (lbZoom <= 1) {
        lbPanMaxX = 0; lbPanMaxY = 0;
      } else {
        const w = lightboxImageEl.clientWidth || 0;
        const h = lightboxImageEl.clientHeight || 0;
        lbPanMaxX = Math.max(0, (w * lbZoom - w) / 2);
        lbPanMaxY = Math.max(0, (h * lbZoom - h) / 2);
      }
      clampLightboxPan();
      scheduleLightboxRender();
      if (lightboxZoomLevel) lightboxZoomLevel.textContent = Math.round(lbZoom * 100) + '%';
    };

    const setLightboxImageByIndex = (nextIndex, opts) => {
      if (!lightboxImageEl) return;
      if (!lightboxImages.length) { updateLightboxCounter(); updateLightboxNavState(); return; }
      lightboxCurrentIndex = clamp(nextIndex, 0, lightboxImages.length - 1);
      const target = lightboxImages[lightboxCurrentIndex];
      if (target && target.url) lightboxImageEl.src = target.url;
      if (opts && opts.resetZoom) {
        lbZoom = 1; lbPanX = 0; lbPanY = 0; lbIsPanning = false;
        applyLightboxZoom();
      }
      updateLightboxCounter();
      updateLightboxNavState();
    };

    const goToPreviousLightboxImage = () => {
      if (lightboxImages.length <= 1) return;
      setLightboxImageByIndex(lightboxCurrentIndex - 1, { resetZoom: true });
    };

    const goToNextLightboxImage = () => {
      if (lightboxImages.length <= 1) return;
      setLightboxImageByIndex(lightboxCurrentIndex + 1, { resetZoom: true });
    };

    const openLightbox = (imageUrl, startIndex) => {
      if (!lightbox || !lightboxImageEl || !imageUrl) return;
      registerLightboxImage(imageUrl);
      const fallback = getLightboxIndexByUrl(imageUrl);
      const idx = Number.isInteger(startIndex)
        ? clamp(startIndex, 0, Math.max(0, lightboxImages.length - 1))
        : (fallback >= 0 ? fallback : 0);
      setLightboxImageByIndex(idx, { resetZoom: true });
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      if (!lightbox || !lightboxImageEl) return;
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      lbZoom = 1; lbPanX = 0; lbPanY = 0;
      lbIsPanning = false; lbSwipeTracking = false;
      lbSwipeDeltaX = 0; lbSwipeDeltaY = 0;
      applyLightboxZoom();
      lightboxImageEl.removeAttribute('src');
      document.body.style.overflow = '';
    };

    updateLightboxCounter();
    updateLightboxNavState();

    // ── Thumb click ──────────────────────────────────────────────────────────────
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', function () {
        const mediaUrl = thumb.getAttribute('data-media-url');
        if (!mainImage || !mediaUrl) return;
        mainImage.style.setProperty('background-image', 'url("' + mediaUrl + '")');
        mainImage.setAttribute('data-main-image-url', mediaUrl);
        currentDesktopImageUrl = mediaUrl;
        thumbs.forEach((t) => { t.classList.remove('border-primary'); t.classList.add('border-transparent'); });
        thumb.classList.add('border-primary');
        thumb.classList.remove('border-transparent');
      });
    });

    // ── Variant helpers ──────────────────────────────────────────────────────────
    const getCompareAtPrice = (variant) => {
      if (!variant || typeof variant !== 'object') return 0;
      for (const key of ['compare_at_price', 'compareAtPrice', 'compare_at_price_max', 'compare_at_price_min']) {
        const v = Number(variant[key] || 0);
        if (Number.isFinite(v) && v > 0) return v;
      }
      return 0;
    };

    const syncVariantInForms = (variant) => {
      if (!variant) return;
      productForms.forEach((formEl) => {
        const idInput = formEl.querySelector('input[name="id"]');
        if (idInput) idInput.value = String(variant.id);
      });
      sectionRoot.querySelectorAll('[data-action-add-cart]').forEach(btn => {
        btn.disabled = !variant.available;
        btn.setAttribute('data-variant-id', String(variant.id));
      });
      sectionRoot.querySelectorAll('[data-action-buy-cart]').forEach(btn => {
        btn.disabled = !variant.available;
      });

      soldOutBadges.forEach((el) => { el.style.display = variant.available ? 'none' : 'block'; });

      let compareAtPrice = getCompareAtPrice(variant);
      const variantPrice = Number(variant.price || 0);

      const hasDiscount = compareAtPrice > variantPrice && compareAtPrice > 0;
      const discountPct = hasDiscount ? Math.round(((compareAtPrice - variantPrice) * 100) / compareAtPrice) : 0;

      if (mobilePriceMajor && mobilePriceMinor) {
        const parts = formatMoneyFromCents(variant.price).split(',');
        mobilePriceMajor.textContent = parts[0] || '0';
        mobilePriceMinor.textContent = ',' + (parts[1] || '00');
        const promoColor = hasDiscount ? 'var(--color-promo-final-price)' : '';
        mobilePriceMajor.style.color = promoColor;
        mobilePriceMinor.style.color = promoColor;
      }

      if (desktopPrice) {
        desktopPrice.textContent = formatMoneyBRL(variantPrice);
        desktopPrice.style.color = hasDiscount ? 'var(--color-promo-final-price)' : '';
      }

      if (desktopCompare) {
        if (hasDiscount) desktopCompare.textContent = formatMoneyBRL(compareAtPrice);
        desktopCompare.style.display = hasDiscount ? '' : 'none';
      }

      if (desktopDiscount) {
        if (hasDiscount) desktopDiscount.textContent = '-' + discountPct + '%';
        desktopDiscount.style.display = hasDiscount ? '' : 'none';
      }

      if (desktopCompareRow) desktopCompareRow.style.display = hasDiscount ? '' : 'none';

      if (mobileCompare && hasDiscount) mobileCompare.textContent = formatMoneyBRL(compareAtPrice);
      if (mobileDiscount) {
        if (hasDiscount) mobileDiscount.textContent = '-' + discountPct + '%';
        mobileDiscount.style.display = hasDiscount ? '' : 'none';
      }
      if (mobileDiscountRow) mobileDiscountRow.style.display = hasDiscount ? '' : 'none';

      if (mobileInstallment) {
        const inst = formatMoneyFromCents(Math.round(variantPrice / installmentsCount));
        mobileInstallment.textContent = 'ou ate ' + installmentsCount + 'x R$ ' + inst + ' sem juros';
      }

      if (stickyPrice) {
        stickyPrice.textContent = formatMoneyBRL(variantPrice);
        stickyPrice.style.color = hasDiscount ? 'var(--color-promo-final-price)' : '';
      }
      if (stickyInstallment) {
        stickyInstallment.textContent = installmentsCount + 'x de ' + formatMoneyBRL(Math.round(variantPrice / installmentsCount));
      }
      if (stickyCompare && hasDiscount) stickyCompare.textContent = formatMoneyBRL(compareAtPrice);
      if (stickyCompareRow) stickyCompareRow.style.display = hasDiscount ? '' : 'none';
      if (stickyBuyButton) {
        stickyBuyButton.disabled = !variant.available;
        stickyBuyButton.textContent = stickyBuyLabel;
        stickyBuyButton.hidden = !variant.available;
      }

      const variantSku = String(variant.sku || '').trim();
      variantSkuEls.forEach((el) => {
        el.textContent = variantSku;
      });
      variantSkuRows.forEach((row) => {
        row.style.display = variantSku ? '' : 'none';
      });

      const featuredMediaId = variant.featured_media && variant.featured_media.id ? String(variant.featured_media.id) : '';
      const featuredImageId = variant.featured_image && variant.featured_image.id ? String(variant.featured_image.id) : '';
      let desktopMediaUpdated = false;

      if (featuredMediaId && thumbs.length > 0) {
        const t = thumbs.find((th) => String(th.getAttribute('data-media-id') || '') === featuredMediaId);
        if (t) { t.click(); desktopMediaUpdated = true; }
      }

      if (!desktopMediaUpdated) {
        if (initialDesktopThumb) {
          initialDesktopThumb.click();
        } else if (mainImage && initialDesktopImageUrl) {
          mainImage.style.setProperty('background-image', 'url("' + initialDesktopImageUrl + '")');
          mainImage.setAttribute('data-main-image-url', initialDesktopImageUrl);
          currentDesktopImageUrl = initialDesktopImageUrl;
        }
      }

      if (mobileTrack) {
        if (featuredImageId && mobileSlides.length > 0) {
          const slideIdx = mobileSlides.findIndex((s) => String(s.getAttribute('data-image-id') || '') === featuredImageId);
          if (slideIdx >= 0) {
            mobileTrack.scrollTo({ left: slideIdx * (mobileTrack.clientWidth || 1), behavior: 'smooth' });
          } else {
            mobileTrack.scrollTo({ left: 0, behavior: 'smooth' });
          }
        } else {
          mobileTrack.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    };

    const findMatchingVariant = () => {
      if (!variants.length) return null;
      return variants.find((v) => {
        const opts = [v.option1 || '', v.option2 || '', v.option3 || ''];
        return selectedOptions.every((sel, i) => !sel || String(opts[i]) === String(sel));
      }) || null;
    };

    // ── Shipping calculator ──────────────────────────────────────────────────────
    if (shippingCalcRoots.length > 0) {
      const formatZipInput = (value) => {
        const d = String(value || '').replace(/\D+/g, '').slice(0, 8);
        return d.length <= 5 ? d : d.slice(0, 5) + '-' + d.slice(5);
      };

      const normalizeProvince = (v) => {
        const c = String(v || '').trim();
        if (!c) return '';
        const l = c.toLowerCase();
        return (l === 'auto' || l === 'none' || l === '-') ? '' : c;
      };

      const normalizeCountry = (v) => {
        const c = String(v || '').trim();
        if (!c) return 'Brazil';
        const l = c.toLowerCase();
        return (l === 'br' || l === 'bra' || l === 'brasil') ? 'Brazil' : c;
      };

      const buildShippingParams = (zip, country, province) => {
        const p = new URLSearchParams();
        p.append('shipping_address[zip]', zip);
        if (country) p.append('shipping_address[country]', country);
        if (province) p.append('shipping_address[province]', province);
        return p;
      };

      const setShippingFeedback = (el, message, isError) => {
        if (!el) return;
        const msg = String(message || '').trim();
        el.textContent = msg;
        el.hidden = !msg;
        el.classList.toggle('is-error', Boolean(isError && msg));
      };

      const getShippingRateMeta = (rate) => {
        if (!rate || typeof rate !== 'object') return '';
        if (rate.delivery_date) return 'Entrega em ' + String(rate.delivery_date);
        if (Array.isArray(rate.delivery_range) && rate.delivery_range.length >= 2) {
          return 'Prazo: ' + rate.delivery_range[0] + ' a ' + rate.delivery_range[1];
        }
        if (Array.isArray(rate.delivery_days) && rate.delivery_days.length === 1) {
          return 'Prazo: ' + rate.delivery_days[0] + ' dia' + (Number(rate.delivery_days[0]) === 1 ? '' : 's');
        }
        if (Array.isArray(rate.delivery_days) && rate.delivery_days.length >= 2) {
          return 'Prazo: ' + rate.delivery_days[0] + ' a ' + rate.delivery_days[rate.delivery_days.length - 1] + ' dias';
        }
        return '';
      };

      const renderShippingRates = (el, rates) => {
        if (!el) return;
        const valid = Array.isArray(rates)
          ? rates.filter((r) => {
              const name = String((r && (r.presentment_name || r.name || '')) || '').trim();
              const price = Number(r && r.price);
              return Boolean(name) && Number.isFinite(price);
            })
          : [];
        if (!valid.length) { el.innerHTML = ''; el.hidden = true; return; }
        const sorted = [...valid].sort((a, b) => Number(a.price) - Number(b.price));
        el.innerHTML = sorted.map((r) =>
          '<div class="pp-shipping-calc-rate">' +
          '<div class="pp-shipping-calc-rate-main">' +
          '<span class="pp-shipping-calc-rate-name">' + escapeHtml(r.presentment_name || r.name || 'Entrega') + '</span>' +
          (getShippingRateMeta(r)
            ? '<span class="pp-shipping-calc-rate-meta">' + escapeHtml(getShippingRateMeta(r)) + '</span>'
            : '') +
          (r.phone_required
            ? '<span class="pp-shipping-calc-rate-meta">Requer telefone</span>'
            : '') +
          '</div>' +
          '<span class="pp-shipping-calc-rate-price">' + escapeHtml(formatRateMoney(r.price)) + '</span>' +
          '</div>'
        ).join('');
        el.hidden = false;
      };

      const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

      const cartHasItems = async () => {
        const res = await fetch(buildStoreUrl('cart.js'), {
          headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
        });
        if (!res.ok) throw new Error('cart_check_failed');
        const data = await res.json();
        return Number(data && data.item_count) > 0;
      };

      const fetchShippingRates = async (zip, country, province) => {
        const params = buildShippingParams(zip, country, province);
        const query = params.toString();
        const prepRes = await fetch(buildStoreUrl('cart/prepare_shipping_rates.json') + '?' + query, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
        if (!prepRes.ok) throw new Error(prepRes.status === 422 ? 'prepare_422' : 'prepare_failed');

        for (let i = 0; i < 20; i++) {
          await wait(500);
          const asyncRes = await fetch(buildStoreUrl('cart/async_shipping_rates.json') + '?' + query, {
            headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
          });
          if (asyncRes.status === 202) continue;
          if (!asyncRes.ok) continue;
          const asyncData = await asyncRes.json();
          if (Array.isArray(asyncData && asyncData.shipping_rates)) return asyncData.shipping_rates;
          if (asyncData == null) continue;
        }

        const fallRes = await fetch(buildStoreUrl('cart/shipping_rates.json') + '?' + query, {
          headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
        });
        if (!fallRes.ok) throw new Error('rates_failed');
        const fallData = await fallRes.json();
        if (Array.isArray(fallData && fallData.shipping_rates)) return fallData.shipping_rates;
        throw new Error('no_rates');
      };

      shippingCalcRoots.forEach((calcRoot) => {
        const inputEl    = calcRoot.querySelector('[data-shipping-cep]');
        const submitEl   = calcRoot.querySelector('[data-shipping-submit]');
        const feedbackEl = calcRoot.querySelector('[data-shipping-feedback]');
        const ratesEl    = calcRoot.querySelector('[data-shipping-rates]');
        const country    = normalizeCountry(calcRoot.getAttribute('data-shipping-country'));
        const province   = normalizeProvince(calcRoot.getAttribute('data-shipping-province'));
        if (!inputEl || !submitEl) return;

        inputEl.addEventListener('input', () => { inputEl.value = formatZipInput(inputEl.value); });
        inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); submitEl.click(); } });

        submitEl.addEventListener('click', async () => {
          const zip = String(inputEl.value || '').replace(/\D+/g, '');
          if (zip.length !== 8) {
            renderShippingRates(ratesEl, []);
            setShippingFeedback(feedbackEl, shippingMessages.invalidZip, true);
            inputEl.focus();
            return;
          }

          const defaultLabel  = submitEl.getAttribute('data-label-default') || 'Ok';
          const loadingLabel  = submitEl.getAttribute('data-label-loading') || 'Calculando...';
          submitEl.disabled = true;
          submitEl.textContent = loadingLabel;
          renderShippingRates(ratesEl, []);
          setShippingFeedback(feedbackEl, '', false);

          try {
            const rates = await fetchShippingRates(zip, country, province);
            if (!rates.length) {
              setShippingFeedback(feedbackEl, shippingMessages.noRates, true);
            } else {
              renderShippingRates(ratesEl, rates);
              setShippingFeedback(feedbackEl, '', false);
            }
          } catch (err) {
            const msg = String(err && err.message || '').toLowerCase();
            if (msg.includes('empty_cart')) {
              setShippingFeedback(feedbackEl, shippingMessages.emptyCart, true);
            } else if (msg.includes('prepare_422')) {
              let hasItems = false;
              try { hasItems = await cartHasItems(); } catch (_) { hasItems = false; }
              setShippingFeedback(feedbackEl, hasItems ? shippingMessages.noRates : shippingMessages.emptyCart, true);
            } else {
              const isEmptyErr = msg.includes('empty') || msg.includes('cart');
              setShippingFeedback(feedbackEl, isEmptyErr ? shippingMessages.emptyCart : shippingMessages.genericError, true);
            }
          } finally {
            submitEl.disabled = false;
            submitEl.textContent = defaultLabel;
          }
        });
      });
    }

    // ── Option buttons ──────────────────────────────────────────────────────────
    const isOptionValueAvailable = (optIndex, optValue) => {
      return variants.some((v) => {
        if (!v.available) return false;
        const opts = [v.option1 || '', v.option2 || '', v.option3 || ''];
        if (String(opts[optIndex] || '') !== String(optValue || '')) return false;
        return selectedOptions.every((sel, i) => {
          if (i === optIndex || !sel) return true;
          return String(opts[i] || '') === String(sel);
        });
      });
    };

    const applyVariantOptionUI = () => {
      variantOptionButtons.forEach((btn) => {
        const idx = Number(btn.getAttribute('data-option-index'));
        const val = btn.getAttribute('data-option-value') || '';
        const isActive = String(selectedOptions[idx] || '') === String(val);
        const avail = isOptionValueAvailable(idx, val);
        btn.style.display = avail ? '' : 'none';
        btn.classList.toggle('is-active', isActive);
      });
      optionCurrentEls.forEach((el) => {
        const idx = Number(el.getAttribute('data-option-current'));
        el.textContent = selectedOptions[idx] || '';
      });
    };

    if (variantOptionButtons.length > 0) {
      variantOptionButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-option-index'));
          const val = btn.getAttribute('data-option-value') || '';
          selectedOptions[idx] = val;
          applyVariantOptionUI();
          const matched = findMatchingVariant();
          if (matched) syncVariantInForms(matched);
        });
      });
      applyVariantOptionUI();
      const initial = findMatchingVariant();
      if (initial) syncVariantInForms(initial);
    } else {
      const initial = findMatchingVariant();
      if (initial) syncVariantInForms(initial);
    }

    if (defaultVariantId) {
      const dv = variants.find((v) => String(v.id) === defaultVariantId) || null;
      if (dv) syncVariantInForms(dv);
    }

    // ── Sticky buy button ────────────────────────────────────────────────────────
    if (stickyBuyButton) {
      stickyBuyButton.addEventListener('click', () => {
        if (stickyBuyButton.disabled) return;
        const canonicalForm = productForms[0];
        if (!canonicalForm) return;
        const returnTo = canonicalForm.querySelector('[data-return-to]');
        if (returnTo) returnTo.value = cartUrl;
        canonicalForm.dataset.submitMode = 'buy';
        const buyBtn = canonicalForm.querySelector('[data-action-buy-cart]');
        if (buyBtn) { buyBtn.click(); return; }
        canonicalForm.submit();
      });
    }

    // ── Product form qty + submit ────────────────────────────────────────────────
    productForms.forEach((formEl) => {
      // Ignorar elementos dentro de [data-product-form-mobile] — eles são tratados pelo bloco de sync mobile
      const notInMobile = (sel) => Array.from(formEl.querySelectorAll(sel)).find(el => !el.closest('[data-product-form-mobile]'));
      // Preferir input com name="quantity" para garantir que FormData o capture
      const qtyInput     = notInMobile('[name="quantity"][data-qty-input]') || notInMobile('[data-qty-input]');
      const qtyIncrease  = notInMobile('[data-qty-increase]');
      const qtyDecrease  = notInMobile('[data-qty-decrease]');
      const addCartBtn   = formEl.querySelector('[data-action-add-cart]');

      const syncQty = (next) => {
        const val = Math.max(1, Number(next) || 1);
        if (qtyInput) qtyInput.value = String(val);
      };

      if (qtyInput) {
        qtyInput.addEventListener('input', () => { qtyInput.value = qtyInput.value.replace(/\D+/g, ''); });
        qtyInput.addEventListener('blur', () => { syncQty(qtyInput.value); });
        qtyInput.addEventListener('keydown', (e) => {
          if (['e', 'E', '+', '-', '.', ','].includes(e.key)) e.preventDefault();
        });
        qtyInput.addEventListener('focus', () => { qtyInput.select(); });
      }

      syncQty(qtyInput ? qtyInput.value : 1);

      if (qtyIncrease) qtyIncrease.addEventListener('click', () => { syncQty((Number(qtyInput && qtyInput.value) || 1) + 1); });
      if (qtyDecrease) qtyDecrease.addEventListener('click', () => { syncQty((Number(qtyInput && qtyInput.value) || 1) - 1); });

      // ── Submit handler — fallback AJAX quando Easify não intercepta ─────────
      formEl.addEventListener('submit', async (event) => {
        event.preventDefault();

        const submitter  = event.submitter;
        const clickedBtn = submitter ?? addCartBtn;
        if (!clickedBtn || clickedBtn.disabled) return;

        const allActionBtns = Array.from(sectionRoot.querySelectorAll('[data-action-add-cart], [data-action-buy-cart]'));
        allActionBtns.forEach(btn => { btn.disabled = true; });
        try {
          const formData = new FormData(formEl);
          formData.delete('return_to');

          const response = await fetch(buildStoreUrl('cart/add.js'), {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
          });
          if (!response.ok) throw new Error('add_failed');
          await onCartAdded();
        } catch (_) {
          const labelEl = clickedBtn.querySelector('span:last-child');
          if (labelEl) {
            const prev = clickedBtn.dataset.prvLabel || 'Adicionar ao Carrinho';
            labelEl.textContent = 'Tentar novamente';
            window.setTimeout(() => { labelEl.textContent = prev; delete clickedBtn.dataset.prvLabel; }, 2000);
          }
          allActionBtns.forEach(btn => { btn.disabled = false; });
        }
      });
    });
    // ── Easify: move container de opções para o slot visível (mobile/desktop) ─
    const tpoSlotDesktop = sectionRoot.querySelector('[data-tpo-slot="desktop"]');
    const tpoSlotMobile  = sectionRoot.querySelector('[data-tpo-slot="mobile"]');
    if (tpoSlotDesktop && tpoSlotMobile) {
      const mqMobile = window.matchMedia('(max-width: 1023px)');
      const moveTpo = () => {
        const tpo = sectionRoot.querySelector('.tpo_option-set-container');
        if (!tpo) return;
        const target = mqMobile.matches ? tpoSlotMobile : tpoSlotDesktop;
        if (tpo.parentElement !== target) target.appendChild(tpo);
      };
      moveTpo();
      new MutationObserver(moveTpo).observe(sectionRoot, { childList: true, subtree: true });
      mqMobile.addEventListener('change', moveTpo);
    }
    // ── Mobile qty sync (fora do form canônico) ──────────────────────────────
    const mobileFormButtons = mobilePdpRoot?.querySelector('[data-product-form-mobile]');
    if (mobileFormButtons) {
      const canonicalForm     = productForms[0];
      const canonicalQtyInput = sectionRoot.querySelector('[name="quantity"][data-qty-input]');
      const mobileQtyInput    = mobileFormButtons.querySelector('[data-qty-input]');
      const mobileQtyIncrease = mobileFormButtons.querySelector('[data-qty-increase]');
      const mobileQtyDecrease = mobileFormButtons.querySelector('[data-qty-decrease]');

      const syncMobileQty = (val) => {
        const v = Math.max(1, Number(val) || 1);
        if (mobileQtyInput) mobileQtyInput.value = String(v);
        if (canonicalQtyInput) canonicalQtyInput.value = String(v);
      };

      if (mobileQtyInput) {
        mobileQtyInput.addEventListener('input', () => { mobileQtyInput.value = mobileQtyInput.value.replace(/\D+/g, ''); });
        mobileQtyInput.addEventListener('blur', () => syncMobileQty(mobileQtyInput.value));
        mobileQtyInput.addEventListener('keydown', (e) => { if (['e','E','+','-','.',','].includes(e.key)) e.preventDefault(); });
        mobileQtyInput.addEventListener('focus', () => mobileQtyInput.select());
      }

      if (mobileQtyIncrease) mobileQtyIncrease.addEventListener('click', () => syncMobileQty((Number(mobileQtyInput?.value) || 1) + 1));
      if (mobileQtyDecrease) mobileQtyDecrease.addEventListener('click', () => syncMobileQty((Number(mobileQtyInput?.value) || 1) - 1));
    }

    // ── Sticky bar visibility ────────────────────────────────────────────────────
    if (stickyBuyBar) {
      const updateStickyBottomInset = () => {
        let inset = 0;
        if (window.visualViewport) {
          inset = Math.max(0, Math.round(window.innerHeight - (window.visualViewport.height + window.visualViewport.offsetTop)));
        }
        sectionRoot.style.setProperty('--pp-sticky-bottom-offset', (inset + (inset > 0 ? 8 : 0)) + 'px');
      };

      const updateFooterStickyGap = () => {
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
        if (isDesktop) {
          document.body.classList.remove('pp-has-mobile-sticky-buy');
          document.documentElement.style.setProperty('--pp-sticky-footer-gap', '0px');
          return;
        }
        const h = stickyBuyBar.offsetHeight || 0;
        const offsetVal = parseFloat(window.getComputedStyle(sectionRoot).getPropertyValue('--pp-sticky-bottom-offset')) || 0;
        document.body.classList.add('pp-has-mobile-sticky-buy');
        document.documentElement.style.setProperty('--pp-sticky-footer-gap', Math.round(h + offsetVal + 10) + 'px');
      };

      const updateStickyBarVisibility = () => {
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
        stickyBuyBar.classList.toggle('is-visible', !isDesktop && window.scrollY > 220);
        updateFooterStickyGap();
      };

      updateStickyBottomInset();
      updateFooterStickyGap();
      updateStickyBarVisibility();

      window.addEventListener('scroll', updateStickyBarVisibility, { passive: true });
      window.addEventListener('resize', () => { updateStickyBottomInset(); updateFooterStickyGap(); updateStickyBarVisibility(); });

      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', () => { updateStickyBottomInset(); updateFooterStickyGap(); });
        window.visualViewport.addEventListener('scroll', () => { updateStickyBottomInset(); updateFooterStickyGap(); });
      }
    }

    // ── Sync main media height to product info ────────────────────────────────
    const syncMainMediaHeight = () => {
      if (!mainImage || !productInfo) return;
      if (window.innerWidth < 1024) { sectionRoot.style.removeProperty('--pp-main-media-height'); return; }
      const h = Math.round(productInfo.getBoundingClientRect().height);
      if (h > 0) sectionRoot.style.setProperty('--pp-main-media-height', h + 'px');
    };

    syncMainMediaHeight();
    window.addEventListener('load', syncMainMediaHeight);
    window.addEventListener('resize', syncMainMediaHeight);
    window.setTimeout(syncMainMediaHeight, 120);

    if ('ResizeObserver' in window && productInfo) {
      new ResizeObserver(syncMainMediaHeight).observe(productInfo);
    }

    // ── Social proof counters ────────────────────────────────────────────────────
    const soldCountEls         = Array.from(sectionRoot.querySelectorAll('[data-sold-count]'));
    const soldLabelEls         = Array.from(sectionRoot.querySelectorAll('[data-sold-label]'));
    const liveViewersEls       = Array.from(sectionRoot.querySelectorAll('[data-live-viewers]'));
    const liveViewersLabelEls  = Array.from(sectionRoot.querySelectorAll('[data-live-viewers-label]'));

    if (soldCountEls.length > 0 && liveViewersEls.length > 0) {
      const SP_KEY        = 'maxxx-social-proof:v1';
      const SP_LEGACY_PFX = 'maxxx-social-proof-';
      const SP_MAX        = 18;
      const productKey    = String(cfg.productId || '');
      const todayKey      = new Date().toISOString().slice(0, 10);
      const soldSeed      = Number(cfg.soldSeed) || 18;
      const liveSeed      = Number(cfg.liveSeed) || 12;
      const randomInt     = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

      const readStore = () => {
        try {
          const raw = window.localStorage && window.localStorage.getItem(SP_KEY);
          if (!raw) return {};
          const p = JSON.parse(raw);
          return p && typeof p === 'object' ? p : {};
        } catch (_) { return {}; }
      };

      const pruneStore = (store) => {
        const entries = Object.entries(store || {})
          .filter(([, v]) => v && typeof v === 'object')
          .map(([k, v]) => [k, { sold: Number(v.sold) || soldSeed, live: Number(v.live) || liveSeed, day: v.day || todayKey, updatedAt: Number(v.updatedAt) || 0 }]);
        entries.sort((a, b) => (b[1].updatedAt || 0) - (a[1].updatedAt || 0));
        return Object.fromEntries(entries.slice(0, SP_MAX));
      };

      const writeStore = (store) => {
        try {
          if (window.localStorage) window.localStorage.setItem(SP_KEY, JSON.stringify(pruneStore(store)));
        } catch (_) {}
      };

      const cleanupLegacy = () => {
        try {
          if (!window.localStorage) return;
          for (let i = window.localStorage.length - 1; i >= 0; i--) {
            const k = window.localStorage.key(i);
            if (k && k.startsWith(SP_LEGACY_PFX)) window.localStorage.removeItem(k);
          }
        } catch (_) {}
      };

      let state = { sold: soldSeed, live: liveSeed, day: todayKey };
      const spStore = readStore();
      const stored = spStore[productKey];
      if (stored && typeof stored === 'object') {
        state.sold = Number(stored.sold) || soldSeed;
        state.live = Number(stored.live) || liveSeed;
        state.day  = stored.day || todayKey;
      } else {
        try {
          const legacyRaw = window.localStorage && window.localStorage.getItem(SP_LEGACY_PFX + productKey);
          if (legacyRaw) {
            const parsed = JSON.parse(legacyRaw);
            if (parsed && typeof parsed === 'object') {
              state.sold = Number(parsed.sold) || soldSeed;
              state.live = Number(parsed.live) || liveSeed;
              state.day  = parsed.day || todayKey;
            }
          }
        } catch (_) {}
      }

      if (state.day !== todayKey) {
        state.sold = clamp(soldSeed + randomInt(-3, 3), 1, 160);
        state.day  = todayKey;
      }

      const liveDelta = Math.max(1, Math.round(state.live * 0.3));
      let nextLive = state.live + randomInt(-liveDelta, liveDelta);
      if (nextLive === state.live) nextLive += (Math.random() < 0.5 ? -1 : 1);
      nextLive = clamp(nextLive, 1, 120);

      const soldRoll = Math.random();
      let soldDelta = soldRoll < 0.38 ? 1 : soldRoll > 0.9 ? -1 : 0;
      if (!soldDelta) soldDelta = Math.random() < 0.35 ? 1 : 0;
      const nextSold = clamp(state.sold + soldDelta, 1, 160);

      soldCountEls.forEach((el) => { el.textContent = String(nextSold); });
      liveViewersEls.forEach((el) => { el.textContent = String(nextLive); });
      soldLabelEls.forEach((el) => { el.textContent = nextSold === 1 ? 'vendido' : 'vendidos'; });
      liveViewersLabelEls.forEach((el) => { el.textContent = nextLive === 1 ? 'pessoa esta' : 'pessoas estao'; });

      state.sold = nextSold; state.live = nextLive; state.day = todayKey;
      writeStore({ ...spStore, [productKey]: { sold: state.sold, live: state.live, day: state.day, updatedAt: Date.now() } });
      cleanupLegacy();
    }

    // ── Mobile media carousel ────────────────────────────────────────────────────
    if (mobileTrack && mobileCurrent && mobileDots.length > 0) {
      const updateMobileIndicators = () => {
        const total = mobileDots.length;
        const width = mobileTrack.clientWidth || 1;
        const idx = Math.min(total - 1, Math.max(0, Math.round(mobileTrack.scrollLeft / width)));
        mobileCurrent.textContent = String(idx + 1);
        mobileDots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === idx);
          dot.classList.toggle('bg-surface-container-highest', i !== idx);
        });
        mobileThumbs.forEach((th, i) => { th.classList.toggle('is-active', i === idx); });
      };

      mobileTrack.addEventListener('scroll', updateMobileIndicators, { passive: true });
      window.addEventListener('resize', updateMobileIndicators);

      mobileThumbs.forEach((th) => {
        th.addEventListener('click', () => {
          const idx = Number(th.getAttribute('data-mobile-thumb-index')) || 0;
          mobileTrack.scrollTo({ left: idx * (mobileTrack.clientWidth || 1), behavior: 'smooth' });
        });
      });

      updateMobileIndicators();
    }

    // ── Lightbox buttons + image handlers ───────────────────────────────────────
    lightboxZoomInBtns.forEach((b) => b.addEventListener('click', () => { lbZoom += ZOOM_STEP; applyLightboxZoom(); }));
    lightboxZoomOutBtns.forEach((b) => b.addEventListener('click', () => { lbZoom -= ZOOM_STEP; applyLightboxZoom(); }));
    lightboxZoomResetBtns.forEach((b) => b.addEventListener('click', () => { lbZoom = 1; applyLightboxZoom(); }));
    lightboxPrevBtns.forEach((b) => b.addEventListener('click', goToPreviousLightboxImage));
    lightboxNextBtns.forEach((b) => b.addEventListener('click', goToNextLightboxImage));

    if (lightboxImageEl) {
      const startPanning = (cx, cy) => {
        lbIsPanning = true;
        lbPointerStartX = cx; lbPointerStartY = cy;
        lbPanStartX = lbPanX; lbPanStartY = lbPanY;
        applyLightboxZoom();
      };

      const movePanning = (cx, cy) => {
        if (!lbIsPanning) return;
        lbPanX = lbPanStartX + (cx - lbPointerStartX);
        lbPanY = lbPanStartY + (cy - lbPointerStartY);
        clampLightboxPan();
        scheduleLightboxRender();
      };

      const endPanning = () => { if (!lbIsPanning) return; lbIsPanning = false; lbTouchId = null; applyLightboxZoom(); };

      const getTouchDist = (a, b) => (!a || !b) ? 0 : Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

      lightboxImageEl.addEventListener('pointerdown', (e) => {
        if (lbZoom <= 1) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        startPanning(e.clientX, e.clientY);
        if (typeof lightboxImageEl.setPointerCapture === 'function') lightboxImageEl.setPointerCapture(e.pointerId);
        e.preventDefault();
      });

      lightboxImageEl.addEventListener('pointermove', (e) => { movePanning(e.clientX, e.clientY); });

      const stopPanning = (e) => {
        if (!lbIsPanning) return;
        endPanning();
        if (e && typeof lightboxImageEl.releasePointerCapture === 'function') {
          try { lightboxImageEl.releasePointerCapture(e.pointerId); } catch (_) {}
        }
      };

      lightboxImageEl.addEventListener('pointerup', stopPanning);
      lightboxImageEl.addEventListener('pointercancel', stopPanning);

      lightboxImageEl.addEventListener('touchstart', (e) => {
        if (!e.touches || !e.touches.length) return;
        if (e.touches.length >= 2) {
          lbIsPinching = true; lbPinchStartDist = getTouchDist(e.touches[0], e.touches[1]); lbPinchStartZoom = lbZoom;
          endPanning(); e.preventDefault(); return;
        }
        if (lbIsPinching) return;
        const touch = e.changedTouches && e.changedTouches[0];
        if (!touch) return;
        if (lbZoom <= 1) {
          lbSwipeTracking = true; lbSwipeStartX = touch.clientX; lbSwipeStartY = touch.clientY;
          lbSwipeDeltaX = 0; lbSwipeDeltaY = 0; return;
        }
        lbTouchId = touch.identifier;
        startPanning(touch.clientX, touch.clientY);
        e.preventDefault();
      }, { passive: false });

      lightboxImageEl.addEventListener('touchmove', (e) => {
        if (!e.touches || !e.touches.length) return;
        if (e.touches.length >= 2) {
          const dist = getTouchDist(e.touches[0], e.touches[1]);
          if (!lbIsPinching) { lbIsPinching = true; lbPinchStartDist = dist; lbPinchStartZoom = lbZoom; }
          if (lbPinchStartDist > 0) { lbZoom = lbPinchStartZoom * (dist / lbPinchStartDist); applyLightboxZoom(); }
          e.preventDefault(); return;
        }
        if (lbIsPinching) return;
        if (lbZoom <= 1 && lbSwipeTracking) {
          const t = e.touches[0]; if (!t) return;
          lbSwipeDeltaX = t.clientX - lbSwipeStartX; lbSwipeDeltaY = t.clientY - lbSwipeStartY;
          if (Math.abs(lbSwipeDeltaX) > Math.abs(lbSwipeDeltaY)) e.preventDefault();
          return;
        }
        if (!lbIsPanning) return;
        let active = null;
        for (let i = 0; i < e.touches.length; i++) {
          if (lbTouchId === null || e.touches[i].identifier === lbTouchId) { active = e.touches[i]; break; }
        }
        if (!active) return;
        movePanning(active.clientX, active.clientY);
        e.preventDefault();
      }, { passive: false });

      lightboxImageEl.addEventListener('touchend', (e) => {
        const remaining = e.touches ? e.touches.length : 0;
        if (lbSwipeTracking && lbZoom <= 1) {
          if (remaining === 0) {
            const ax = Math.abs(lbSwipeDeltaX), ay = Math.abs(lbSwipeDeltaY);
            if (ax > 52 && ax > ay * 1.15) {
              lbSwipeDeltaX < 0 ? goToNextLightboxImage() : goToPreviousLightboxImage();
            }
          }
          lbSwipeTracking = false; lbSwipeDeltaX = 0; lbSwipeDeltaY = 0;
        }
        if (remaining >= 2) {
          lbIsPinching = true; lbPinchStartDist = getTouchDist(e.touches[0], e.touches[1]); lbPinchStartZoom = lbZoom; return;
        }
        if (lbIsPinching) {
          lbIsPinching = false; lbPinchStartDist = 0; lbPinchStartZoom = lbZoom;
          if (remaining === 1 && lbZoom > 1) {
            lbTouchId = e.touches[0].identifier;
            startPanning(e.touches[0].clientX, e.touches[0].clientY); return;
          }
        }
        if (remaining === 0) endPanning();
      });

      lightboxImageEl.addEventListener('touchcancel', () => {
        lbIsPinching = false; lbPinchStartDist = 0; lbPinchStartZoom = lbZoom;
        lbSwipeTracking = false; lbSwipeDeltaX = 0; lbSwipeDeltaY = 0;
        endPanning();
      });

      lightboxImageEl.addEventListener('wheel', (e) => {
        if (!lightbox || !lightbox.classList.contains('is-open')) return;
        e.preventDefault();
        lbZoom += e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
        applyLightboxZoom();
      }, { passive: false });

      lightboxImageEl.addEventListener('load', () => { applyLightboxZoom(); });
    }

    if (openLightboxButton) {
      openLightboxButton.addEventListener('click', () => {
        if (mainImage) currentDesktopImageUrl = mainImage.getAttribute('data-main-image-url') || currentDesktopImageUrl;
        const activeIdx = thumbs.findIndex((t) => t.classList.contains('border-primary'));
        openLightbox(currentDesktopImageUrl, activeIdx >= 0 ? activeIdx : undefined);
      });
    }

    mobileSlides.forEach((slide, idx) => {
      slide.addEventListener('click', () => {
        const img = slide.querySelector('img');
        openLightbox(img ? (img.currentSrc || img.src || '') : '', idx);
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    if (lightbox) {
      lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    }

    document.addEventListener('keydown', (e) => {
      if (!lightbox || !lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') { closeLightbox(); return; }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goToPreviousLightboxImage(); return; }
      if (e.key === 'ArrowRight') { e.preventDefault(); goToNextLightboxImage(); }
    });
  }

  // ── Boot ──────────────────────────────────────────────────────────────────────
  function boot() {
    const cfg = window.ProductConfig || {};
    const sectionId = cfg.sectionId;
    if (!sectionId) return;
    const root = document.getElementById('shopify-section-' + sectionId);
    if (root) initProductPage(root, cfg);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  document.addEventListener('shopify:section:load', (event) => {
    const cfg = window.ProductConfig || {};
    if (event.target && event.target.id === 'shopify-section-' + cfg.sectionId) {
      event.target.dataset.ppBound = '';
      initProductPage(event.target, cfg);
    }
  });

  window.ProductPage = { init: initProductPage };
}());
