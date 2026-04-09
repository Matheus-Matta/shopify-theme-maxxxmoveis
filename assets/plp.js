(function () {
  'use strict';

  function initPLP(sectionRoot, cfg) {
    if (!sectionRoot) return;

    const filterForm = sectionRoot.querySelector('[data-plp-filter-form]');
    if (!filterForm) return;

    const SECTION_ID = cfg.sectionId || '';

    // Client-side filter URL param keys
    const CLIENT_COLOR_PARAM     = '_color';
    const CLIENT_PRICE_MIN_PARAM = '_price_min';
    const CLIENT_PRICE_MAX_PARAM = '_price_max';
    const CLIENT_IN_STOCK_PARAM  = '_in_stock';

    const CLIENT_FILTER_DEBOUNCE_MS = 250;
    const SUBMIT_DEBOUNCE_MS        = 500;
    let submitDebounceTimer          = null;

    // AJAX state
    let activeController = null;
    let isLoading        = false;

    const productsColumn = sectionRoot.querySelector('.plp-products-column');

    // Lazy-create loading overlay
    let loadingOverlay = null;
    const skeletonCount = Number(cfg.skeletonCount) || 12;

    const getLoadingOverlay = () => {
      if (loadingOverlay) return loadingOverlay;
      loadingOverlay = document.createElement('div');
      loadingOverlay.className = 'plp-ajax-loading-overlay';
      const grid = document.createElement('div');
      grid.className = 'plp-skeleton-grid';
      for (let i = 0; i < skeletonCount; i++) {
        const card = document.createElement('div');
        card.className = 'plp-skeleton-card';
        grid.appendChild(card);
      }
      loadingOverlay.appendChild(grid);
      if (productsColumn) productsColumn.appendChild(loadingOverlay);
      return loadingOverlay;
    };

    const showLoading = () => {
      if (!productsColumn) return;
      isLoading = true;
      productsColumn.style.minHeight = (productsColumn.offsetHeight || 400) + 'px';
      getLoadingOverlay().classList.add('is-visible');
    };

    const hideLoading = () => {
      isLoading = false;
      if (loadingOverlay) loadingOverlay.classList.remove('is-visible');
      if (productsColumn) productsColumn.style.removeProperty('min-height');
    };

    // Build URL from form + client filters
    const buildFetchURL = (overridePage) => {
      const formData = new FormData(filterForm);
      const params   = new URLSearchParams();

      for (const [key, value] of formData.entries()) {
        if (value !== '') params.append(key, value);
      }

      if (overridePage != null && overridePage > 1) {
        params.set('page', String(overridePage));
      } else {
        params.delete('page');
      }

      // Preserve client-side filter params from current URL
      const currentParams = new URLSearchParams(window.location.search);
      [CLIENT_COLOR_PARAM, CLIENT_PRICE_MIN_PARAM, CLIENT_PRICE_MAX_PARAM, CLIENT_IN_STOCK_PARAM].forEach((key) => {
        const val = currentParams.get(key);
        if (val) params.set(key, val);
      });

      const action = filterForm.getAttribute('action') || window.location.pathname;
      return action + '?' + params.toString();
    };

    // AJAX fetch + DOM swap
    const doAjaxFilter = (targetURL, pushState) => {
      if (activeController) activeController.abort();
      activeController = new AbortController();

      showLoading();

      const fetchURL = targetURL + (targetURL.includes('?') ? '&' : '?') + 'section_id=' + SECTION_ID;

      fetch(fetchURL, { signal: activeController.signal })
        .then((response) => {
          if (!response.ok) throw new Error('HTTP ' + response.status);
          return response.text();
        })
        .then((html) => {
          const parser      = new DOMParser();
          const doc         = parser.parseFromString(html, 'text/html');
          const newSection  = doc.getElementById('shopify-section-' + SECTION_ID);
          if (!newSection) throw new Error('Section not found in response');

          const newGrid  = newSection.querySelector('.plp-listing-grid');
          const oldGrid  = sectionRoot.querySelector('.plp-listing-grid');
          if (newGrid && oldGrid) oldGrid.innerHTML = newGrid.innerHTML;

          const newPagWrap = newSection.querySelector('[data-plp-pagination-wrap]');
          const oldPagWrap = sectionRoot.querySelector('[data-plp-pagination-wrap]');
          if (newPagWrap && oldPagWrap) oldPagWrap.innerHTML = newPagWrap.innerHTML;

          const newSubtitle = newSection.querySelector('.plp-subtitle');
          const oldSubtitle = sectionRoot.querySelector('.plp-subtitle');
          if (newSubtitle && oldSubtitle) oldSubtitle.innerHTML = newSubtitle.innerHTML;

          const newEmpty = newSection.querySelector('[data-client-empty-state]');
          const oldEmpty = sectionRoot.querySelector('[data-client-empty-state]');
          if (newEmpty && oldEmpty) oldEmpty.outerHTML = newEmpty.outerHTML;

          if (pushState) history.pushState({ plpPage: true }, '', targetURL);

          hideLoading();
          bindCardClicks();
          applyClientFilters();

          if (productsColumn) {
            const top = productsColumn.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        })
        .catch((err) => {
          if (err.name === 'AbortError') return;
          hideLoading();
          window.location.href = targetURL;
        });
    };

    // Debounced AJAX submit
    const scheduleFilterSubmit = (delay) => {
      const ms = delay != null ? delay : SUBMIT_DEBOUNCE_MS;
      window.clearTimeout(submitDebounceTimer);
      submitDebounceTimer = window.setTimeout(() => doAjaxFilter(buildFetchURL(null), true), ms);
    };

    const submitNow = () => {
      window.clearTimeout(submitDebounceTimer);
      doAjaxFilter(buildFetchURL(null), true);
    };

    // Server-side filter listeners
    filterForm.querySelectorAll('[data-auto-submit]').forEach((input) => {
      input.addEventListener('change', () => scheduleFilterSubmit());
    });

    let numberDebounceTimer = null;
    filterForm.querySelectorAll('[data-auto-submit-number]').forEach((input) => {
      input.addEventListener('input', () => {
        window.clearTimeout(numberDebounceTimer);
        numberDebounceTimer = window.setTimeout(() => scheduleFilterSubmit(450), 350);
      });
      input.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        submitNow();
      });
      input.addEventListener('blur', () => scheduleFilterSubmit(250));
    });

    const pricePresetButtons = filterForm.querySelectorAll('[data-price-max]');
    if (pricePresetButtons.length > 0) {
      const minInput = filterForm.querySelector('[name*="price"][name*="gte"]');
      const maxInput = filterForm.querySelector('[name*="price"][name*="lte"]');
      pricePresetButtons.forEach((button) => {
        button.addEventListener('click', () => {
          if (!maxInput) return;
          const maxValue = button.getAttribute('data-price-max') || '';
          if (minInput && !minInput.value) minInput.value = '0';
          maxInput.value = maxValue;
          scheduleFilterSubmit(300);
        });
      });
    }

    // Mobile filter drawer
    const mobileFilterOpen    = sectionRoot.querySelector('[data-mobile-filter-open]');
    const mobileFilterClose   = sectionRoot.querySelector('[data-mobile-filter-close]');
    const mobileFilterOverlay = sectionRoot.querySelector('[data-mobile-filter-overlay]');
    const mobileFilterDrawer  = sectionRoot.querySelector('[data-mobile-filter-drawer]');

    const openMobileFilters = () => {
      if (!mobileFilterDrawer || !mobileFilterOverlay) return;
      mobileFilterDrawer.classList.add('is-open');
      mobileFilterOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    const closeMobileFilters = () => {
      if (!mobileFilterDrawer || !mobileFilterOverlay) return;
      mobileFilterDrawer.classList.remove('is-open');
      mobileFilterOverlay.classList.remove('is-open');
      document.body.style.removeProperty('overflow');
    };

    if (mobileFilterOpen)    mobileFilterOpen.addEventListener('click', openMobileFilters);
    if (mobileFilterClose)   mobileFilterClose.addEventListener('click', closeMobileFilters);
    if (mobileFilterOverlay) mobileFilterOverlay.addEventListener('click', closeMobileFilters);

    window.addEventListener('resize', () => {
      if (!window.matchMedia('(max-width: 767px)').matches) closeMobileFilters();
    });

    // Adaptive products column width
    const shell  = sectionRoot.querySelector('.plp-shell');
    const layout = sectionRoot.querySelector('.plp-layout');

    if (shell && layout && productsColumn) {
      const configuredCards   = Number.parseInt(shell.dataset.cardsPerRow || '4', 10);
      const cardWidthDesktop  = Number.parseFloat(shell.dataset.cardWidthDesktop || '270') || 270;
      const gridGapDesktop    = Number.parseFloat(shell.dataset.gridGapDesktop || '20') || 20;

      const applyAdaptiveWidth = () => {
        if (window.matchMedia('(max-width: 767px)').matches) {
          productsColumn.style.removeProperty('--plp-products-column-width');
          return;
        }
        const targetWidth = (configuredCards * cardWidthDesktop) + ((configuredCards - 1) * gridGapDesktop);
        productsColumn.style.setProperty('--plp-products-column-width', targetWidth + 'px');
      };

      applyAdaptiveWidth();
      window.addEventListener('resize', applyAdaptiveWidth);
    }

    // Card click (delegated, re-bindable)
    const bindCardClicks = () => {
      sectionRoot.querySelectorAll('.gc-product-card[data-card-url]').forEach((card) => {
        if (card._plpBound) return;
        card._plpBound = true;
        const targetUrl = card.getAttribute('data-card-url');
        if (!targetUrl) return;
        card.addEventListener('click', (event) => {
          if (event.target.closest('a, button, input, select, textarea, label')) return;
          window.location.href = targetUrl;
        });
        card.addEventListener('keydown', (event) => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          window.location.href = targetUrl;
        });
      });
    };
    bindCardClicks();

    // Pagination — global handler for buttons without href
    window.plpGoTo = function (btn) {
      const url = btn && btn.getAttribute('data-page-url');
      if (!url) return;
      const linkURL      = new URL(url, window.location.origin);
      const currentParams = new URLSearchParams(window.location.search);
      [CLIENT_COLOR_PARAM, CLIENT_PRICE_MIN_PARAM, CLIENT_PRICE_MAX_PARAM, CLIENT_IN_STOCK_PARAM].forEach((key) => {
        const val = currentParams.get(key);
        if (val) linkURL.searchParams.set(key, val);
        else linkURL.searchParams.delete(key);
      });
      doAjaxFilter(linkURL.pathname + linkURL.search, true);
    };

    // Browser back/forward
    window.addEventListener('popstate', () => {
      doAjaxFilter(window.location.pathname + window.location.search, false);
    });

    // Client-side filters — restore from URL on load
    const restoreClientFiltersFromURL = () => {
      const currentParams = new URLSearchParams(window.location.search);

      const savedColors = currentParams.get(CLIENT_COLOR_PARAM);
      if (savedColors) {
        const savedColorsArr = savedColors.split(',').map((c) => c.trim().toLowerCase()).filter(Boolean);
        sectionRoot.querySelectorAll('[data-client-color]').forEach((input) => {
          input.checked = savedColorsArr.includes((input.value || '').toLowerCase().trim());
        });
      }

      const savedPriceMin = currentParams.get(CLIENT_PRICE_MIN_PARAM);
      const pMinInput     = sectionRoot.querySelector('[data-client-price-min]');
      if (savedPriceMin && pMinInput) pMinInput.value = savedPriceMin;

      const savedPriceMax = currentParams.get(CLIENT_PRICE_MAX_PARAM);
      const pMaxInput     = sectionRoot.querySelector('[data-client-price-max]');
      if (savedPriceMax && pMaxInput) pMaxInput.value = savedPriceMax;

      const savedInStock  = currentParams.get(CLIENT_IN_STOCK_PARAM);
      const inStockInput  = sectionRoot.querySelector('[data-client-in-stock]');
      if (savedInStock === '1' && inStockInput) inStockInput.checked = true;
    };

    restoreClientFiltersFromURL();

    // Persist client filter state in URL without AJAX
    const saveClientFiltersToURL = () => {
      const url = new URL(window.location.href);

      const selectedColors = Array.from(sectionRoot.querySelectorAll('[data-client-color]'))
        .filter((input) => input.checked)
        .map((input) => (input.value || '').toLowerCase().trim())
        .filter(Boolean);

      if (selectedColors.length > 0) {
        url.searchParams.set(CLIENT_COLOR_PARAM, selectedColors.join(','));
      } else {
        url.searchParams.delete(CLIENT_COLOR_PARAM);
      }

      const pMinInputSave  = sectionRoot.querySelector('[data-client-price-min]');
      const pMaxInputSave  = sectionRoot.querySelector('[data-client-price-max]');
      const inStockSave    = sectionRoot.querySelector('[data-client-in-stock]');

      if (pMinInputSave && pMinInputSave.value !== '') {
        url.searchParams.set(CLIENT_PRICE_MIN_PARAM, pMinInputSave.value);
      } else {
        url.searchParams.delete(CLIENT_PRICE_MIN_PARAM);
      }

      if (pMaxInputSave && pMaxInputSave.value !== '') {
        url.searchParams.set(CLIENT_PRICE_MAX_PARAM, pMaxInputSave.value);
      } else {
        url.searchParams.delete(CLIENT_PRICE_MAX_PARAM);
      }

      if (inStockSave && inStockSave.checked) {
        url.searchParams.set(CLIENT_IN_STOCK_PARAM, '1');
      } else {
        url.searchParams.delete(CLIENT_IN_STOCK_PARAM);
      }

      history.replaceState(history.state, '', url.toString());
    };

    const applyClientFilters = () => {
      const productItems        = sectionRoot.querySelectorAll('.plp-product-item[data-product-price]');
      const clientEmptyState    = sectionRoot.querySelector('[data-client-empty-state]');

      const selectedColors = Array.from(sectionRoot.querySelectorAll('[data-client-color]'))
        .filter((input) => input.checked)
        .map((input) => (input.value || '').toLowerCase().trim())
        .filter(Boolean);

      const pMinInputApply  = sectionRoot.querySelector('[data-client-price-min]');
      const pMaxInputApply  = sectionRoot.querySelector('[data-client-price-max]');
      const inStockApply    = sectionRoot.querySelector('[data-client-in-stock]');

      const minValueCents = pMinInputApply && pMinInputApply.value !== ''
        ? Math.max(0, Number.parseFloat(pMinInputApply.value) * 100) : null;
      const maxValueCents = pMaxInputApply && pMaxInputApply.value !== ''
        ? Math.max(0, Number.parseFloat(pMaxInputApply.value) * 100) : null;
      const onlyInStock   = !!(inStockApply && inStockApply.checked);

      let visibleCount = 0;
      productItems.forEach((item) => {
        const rawPrice     = Number.parseFloat(item.dataset.productPrice || '0');
        const rawColors    = (item.dataset.productColors || '').toLowerCase();
        const productColors = rawColors ? rawColors.split('|').map((v) => v.trim()).filter(Boolean) : [];
        const isAvailable  = item.dataset.productAvailable === '1';

        const matchColor = selectedColors.length === 0 || selectedColors.some((color) => productColors.includes(color));
        const matchMin   = minValueCents === null || rawPrice >= minValueCents;
        const matchMax   = maxValueCents === null || rawPrice <= maxValueCents;
        const matchStock = !onlyInStock || isAvailable;

        const isVisible = matchColor && matchMin && matchMax && matchStock;
        item.style.display = isVisible ? '' : 'none';
        if (isVisible) visibleCount += 1;
      });

      if (clientEmptyState) {
        clientEmptyState.classList.toggle('hidden', visibleCount > 0);
      }
    };

    let clientFilterDebounceTimer = null;
    const scheduleClientFilters = () => {
      window.clearTimeout(clientFilterDebounceTimer);
      clientFilterDebounceTimer = window.setTimeout(() => {
        applyClientFilters();
        saveClientFiltersToURL();
      }, CLIENT_FILTER_DEBOUNCE_MS);
    };

    sectionRoot.querySelectorAll('[data-client-color]').forEach((input) => {
      input.addEventListener('change', scheduleClientFilters);
    });

    const pMinBind   = sectionRoot.querySelector('[data-client-price-min]');
    const pMaxBind   = sectionRoot.querySelector('[data-client-price-max]');
    const inStockBind = sectionRoot.querySelector('[data-client-in-stock]');

    if (pMinBind) {
      pMinBind.addEventListener('input', scheduleClientFilters);
      pMinBind.addEventListener('blur', scheduleClientFilters);
    }
    if (pMaxBind) {
      pMaxBind.addEventListener('input', scheduleClientFilters);
      pMaxBind.addEventListener('blur', scheduleClientFilters);
    }
    if (inStockBind) {
      inStockBind.addEventListener('change', scheduleClientFilters);
    }

    applyClientFilters();

    // Search ranking (client-side, runs once on page load)
    const isSearchPage  = Boolean(cfg.isSearchPage);
    const searchTermRaw = String(cfg.searchTerm || '');

    if (isSearchPage && searchTermRaw.trim() !== '') {
      const listingGrid = sectionRoot.querySelector('.plp-listing-grid');
      if (listingGrid) {
        const normalize    = (value) => String(value || '').toLowerCase().trim();
        const query        = normalize(searchTermRaw);
        const productNodes = Array.from(listingGrid.querySelectorAll('.plp-product-item'));
        const ranked = productNodes.map((node, index) => {
          const title      = normalize(node.dataset.searchTitle);
          const categories = normalize(node.dataset.searchCategories);
          const tags       = normalize(node.dataset.searchTags);
          let score = 0;
          if (title.includes(query))      score = 300;
          else if (categories.includes(query)) score = 200;
          else if (tags.includes(query))  score = 100;
          return { node, index, score };
        });
        ranked.sort((a, b) => b.score !== a.score ? b.score - a.score : a.index - b.index);
        ranked.forEach((item) => listingGrid.appendChild(item.node));
      }
    }
  }

  function boot() {
    const cfg       = window.PLPConfig || {};
    const sectionId = cfg.sectionId;
    if (!sectionId) return;
    const root = document.getElementById('shopify-section-' + sectionId);
    if (root) initPLP(root, cfg);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  document.addEventListener('shopify:section:load', (event) => {
    const cfg = window.PLPConfig || {};
    if (event.target && event.target.id === 'shopify-section-' + cfg.sectionId) {
      initPLP(event.target, cfg);
    }
  });

  window.PLPSection = { init: initPLP };
}());
