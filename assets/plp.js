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
    const SERVER_PAGE_PARAM      = 'page';
    const UNUSED_PAGE_PARAM      = 'plp_page';

    const CLIENT_FILTER_DEBOUNCE_MS = 250;
    const SUBMIT_DEBOUNCE_MS        = 500;
    let submitDebounceTimer          = null;

    // AJAX state
    let activeController = null;
    let isLoading        = false;

    const productsColumn = sectionRoot.querySelector('.plp-products-column');

    // ─── Storefront API — fetch-all + client-side pagination ─────────────────
    const SF_TOKEN     = cfg.storefrontToken || '';
    const SF_VERSION   = cfg.storefrontApiVersion || '2025-01';
    const SF_DOMAIN    = cfg.shopDomain || window.location.hostname;
    const SF_URL       = 'https://' + SF_DOMAIN + '/api/' + SF_VERSION + '/graphql.json';
    const COL_HANDLE   = cfg.collectionHandle || '';
    const COL_TAGS     = Array.isArray(cfg.currentTags) ? cfg.currentTags : [];
    const PER_PAGE     = Number(cfg.perPage) || 12;
    const INSTALLMENTS = Number(cfg.installmentsCount) || 10;
    const MEDIA_BG     = cfg.mediaBg || '#F7F7F7';
    const SHOW_RATINGS = !!cfg.showRatings;
    const SHOW_BUY     = !!cfg.showBuyButton;
    const SHOW_DISC    = !!cfg.showDiscountBadge;
    const BUY_LABEL    = cfg.buyLabel || 'COMPRAR';
    const LS_ENABLED   = !!cfg.lowStockEnabled;
    const LS_MIN       = Number(cfg.lowStockMin) || 1;
    const LS_MAX       = Number(cfg.lowStockMax) || 10;
    const LS_BG        = cfg.lowStockBadgeBg || '#F97316';
    const LS_TEXT      = cfg.lowStockBadgeText || '#ffffff';
    const LS_OPACITY   = Number(cfg.lowStockBadgeOpacity || 85) / 100;

    const SF_ACTIVE = !cfg.isSearchPage && !!SF_TOKEN && !!COL_HANDLE;

    // Cache da lista completa filtrada. null = ainda não buscou.
    let sfAllProducts  = null;
    let sfFetchPromise = null;
    let sfCurrentPage  = parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10) || 1;

    const SORT_KEY_MAP = {
      'manual':             { sortKey: 'MANUAL',       reverse: false },
      'best-selling':       { sortKey: 'BEST_SELLING', reverse: false },
      'title-ascending':    { sortKey: 'TITLE',        reverse: false },
      'title-descending':   { sortKey: 'TITLE',        reverse: true  },
      'price-ascending':    { sortKey: 'PRICE',        reverse: false },
      'price-descending':   { sortKey: 'PRICE',        reverse: true  },
      'created-descending': { sortKey: 'CREATED',      reverse: true  },
      'created-ascending':  { sortKey: 'CREATED',      reverse: false },
    };

    const getSortParams = () => {
      const s = new URLSearchParams(window.location.search).get('sort_by') || cfg.currentSort || 'manual';
      return SORT_KEY_MAP[s] || SORT_KEY_MAP['manual'];
    };

    const SF_QUERY = `
      query PlpAll($handle:String!,$first:Int!,$after:String,$sortKey:ProductCollectionSortKeys!,$reverse:Boolean!,$filters:[ProductFilter!]!) {
        collection(handle:$handle) {
          products(first:$first,after:$after,sortKey:$sortKey,reverse:$reverse,filters:$filters) {
            pageInfo { hasNextPage endCursor }
            edges { node {
              id handle title availableForSale totalInventory productType tags
              featuredImage { url(transform:{maxWidth:900,crop:CENTER}) }
              priceRange      { minVariantPrice { amount } }
              compareAtPriceRange { minVariantPrice { amount } }
              ratingValue: metafield(namespace:"custom",key:"rating_value") { value }
              reviewCount: metafield(namespace:"custom",key:"review_count")  { value }
            } }
          }
        }
      }`;

    // Busca uma página da API (até 250 por chamada)
    const sfFetchPage = async (cursor, limit) => {
      const { sortKey, reverse } = getSortParams();
      const filters = [{ available: true }, ...COL_TAGS.map((t) => ({ tag: t }))];
      const resp = await fetch(SF_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': SF_TOKEN },
        body: JSON.stringify({ query: SF_QUERY, variables: { handle: COL_HANDLE, first: limit || 250, after: cursor || null, sortKey, reverse, filters } }),
      });
      if (!resp.ok) throw new Error('SF ' + resp.status);
      const json = await resp.json();
      if (json.errors) throw new Error(JSON.stringify(json.errors));
      const conn = json?.data?.collection?.products;
      if (!conn) throw new Error('No products');
      return { nodes: conn.edges.map((e) => e.node), pageInfo: conn.pageInfo };
    };

    // Busca TODOS os produtos e filtra os de estoque zero
    const fetchAllFiltered = () => {
      if (sfAllProducts !== null) return Promise.resolve(sfAllProducts);
      if (sfFetchPromise) return sfFetchPromise;

      sfFetchPromise = (async () => {
        const all = [];
        let cursor = null;
        let hasMore = true;
        while (hasMore) {
          const { nodes, pageInfo } = await sfFetchPage(cursor, 250);
          all.push(...nodes);
          hasMore = pageInfo.hasNextPage;
          cursor  = pageInfo.endCursor;
        }
        // Remove itens sem estoque
        sfAllProducts = all.filter((p) => {
          if (!p.availableForSale) return false;
          const inv = p.totalInventory;
          if (inv === null || inv === undefined) return true; // sem rastreamento → manter
          return inv > 0;
        });
        return sfAllProducts;
      })();

      return sfFetchPromise;
    };

    const fmtBrl = (n) => new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(n) || 0);
    const esc    = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const getBadge = (tags) => {
      const MAP = [['TOP OFERTA',''],['FRETE GRÁTIS','bg-[#16A34A] text-white'],['MAIS BUSCADO','bg-[#1A1C1C] text-white'],['QUERIDINHO',''],['5% CASHBACK','bg-[#16A34A] text-white'],['OFERTA DO DIA','bg-[#16A34A] text-white']];
      for (const [tag, cls] of MAP) if ((tags || []).includes(tag)) return { text: tag, cls };
      return null;
    };

    const starsHtml = (rating) => {
      const r = Math.min(5, Math.max(1, Math.round(Number(rating) || 5)));
      return Array.from({ length: 5 }, (_, i) =>
        `<span class="material-symbols-outlined text-sm"${i < r ? " style=\"font-variation-settings:'FILL' 1;\"" : ''}>star</span>`
      ).join('');
    };

    const renderCard = (p) => {
      const price   = parseFloat(p.priceRange?.minVariantPrice?.amount || '0');
      const cmpRaw  = parseFloat(p.compareAtPriceRange?.minVariantPrice?.amount || '0');
      const cmp     = cmpRaw > price ? cmpRaw : 0;
      const hasDsc  = cmp > 0;
      const dscPct  = hasDsc ? Math.round((cmp - price) / cmp * 100) : 0;
      const inst    = price / INSTALLMENTS;
      const inv     = Number(p.totalInventory) || 0;
      const isAvail = p.availableForSale ? 1 : 0;
      const rating  = Number(p.ratingValue?.value || 5);
      const reviews = Number(p.reviewCount?.value || 0);
      const badge   = getBadge(p.tags);
      const promo   = hasDsc ? ' style="color:var(--color-promo-final-price)"' : '';
      const url     = '/collections/' + COL_HANDLE + '/products/' + p.handle;
      const numId   = parseInt((p.id || '').split('/').pop() || '0', 10);

      const lsHtml = (LS_ENABLED && isAvail && inv >= LS_MIN && inv <= LS_MAX)
        ? `<div class="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-lg shadow-md leading-none pointer-events-none backdrop-blur-sm" style="background-color:${LS_BG};color:${LS_TEXT};opacity:${LS_OPACITY}"><span class="material-symbols-outlined" style="font-size:14px;font-variation-settings:'FILL' 1;">local_fire_department</span> ÚLTIMAS ${numId % 5 + 1}</div>`
        : '';

      const badgeHtml = badge
        ? `<div class="absolute top-3 left-3"><div class="${badge.cls || 'bg-primary text-white'} text-[10px] font-bold px-2 py-1 rounded shadow-sm">${esc(badge.text)}</div></div>`
        : '';

      const imgHtml = p.featuredImage?.url
        ? `<div class="gc-product-image group-hover:scale-105 transition-transform duration-500" style="background-image:url('${esc(p.featuredImage.url)}');" aria-label="${esc(p.title)}"></div>`
        : '';

      const ratingsHtml = SHOW_RATINGS
        ? `<div class="flex items-center gap-1"><div class="flex plp-card-rating">${starsHtml(rating)}</div>${reviews > 0 ? `<span class="plp-card-meta">(${reviews})</span>` : ''}</div>`
        : '';

      const cmpHtml  = hasDsc ? `<span class="plp-card-meta line-through" style="color:var(--color-promo-old-price)">R$ ${fmtBrl(cmp)}</span>` : '';
      const discHtml = (SHOW_DISC && hasDsc) ? `<span class="plp-card-discount">-${dscPct}%</span>` : '';
      const buyHtml  = SHOW_BUY ? `<a class="plp-card-buy py-3 mt-3 font-bold text-center" href="${url}">${esc(BUY_LABEL)}</a>` : '';
      const priceBlk = SHOW_BUY ? ' mt-auto' : '';
      const category = esc(p.productType || '');

      return `<div class="plp-product-item" data-product-price="${Math.round(price * 100)}" data-product-available="${isAvail}" data-product-colors="">
        <article class="plp-card gc-product-card group" data-card-url="${url}" role="link" tabindex="0" aria-label="Abrir produto ${esc(p.title)}">
          <div class="plp-card-media gc-product-media-frame relative" style="background-color:${esc(MEDIA_BG)};">${imgHtml}${lsHtml}${badgeHtml}
            <button class="favorite-btn absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#DC2626] shadow-lg" type="button" aria-label="Favoritar" data-product-handle="${esc(p.handle)}"><span class="material-symbols-outlined text-xl">favorite</span></button>
          </div>
          <div class="plp-card-content gc-product-card-content">
            <h3 class="plp-card-title font-medium">${esc(p.title)}</h3>
            ${category ? `<p class="plp-card-meta">${category}</p>` : ''}
            ${ratingsHtml}
            <div class="${priceBlk}">${cmpHtml}
              <div class="plp-card-price-row"><div class="flex items-baseline gap-1">
                <span class="plp-card-meta font-bold italic"${promo}>R$</span>
                <span class="plp-card-price font-black"${promo}>${fmtBrl(price)}</span>
              </div>${discHtml}</div>
              <span class="plp-card-meta">${INSTALLMENTS}x de R$ ${fmtBrl(inst)} sem juros</span>
            </div>
            ${buyHtml}
          </div>
        </article></div>`;
    };

    // Paginação com total exato (baseado na lista filtrada)
    const renderPagination = (currentPage, totalPages) => {
      if (totalPages <= 1) return '';
      const params = new URLSearchParams(window.location.search);
      params.delete('page');
      const base = window.location.pathname;
      const qs   = params.toString();
      const pageUrl = (p) => base + (qs ? '?' + qs + '&page=' + p : p > 1 ? '?page=' + p : '');

      let html = '<nav class="mt-10 md:mt-12 flex items-center justify-center gap-2" aria-label="Paginacao da colecao">';

      if (currentPage > 1) {
        html += `<button class="plp-pagination-link" type="button" aria-label="Pagina anterior" onclick="plpGoTo(this)" data-page-url="${pageUrl(currentPage - 1)}" data-api-page="${currentPage - 1}"><span class="material-symbols-outlined">chevron_left</span></button>`;
      }

      const pages = new Set([1, totalPages]);
      for (let p = Math.max(1, currentPage - 2); p <= Math.min(totalPages, currentPage + 2); p++) pages.add(p);
      let prev = 0;
      for (const p of [...pages].sort((a, b) => a - b)) {
        if (p - prev > 1) html += '<span class="plp-pagination-link" style="pointer-events:none">…</span>';
        html += p === currentPage
          ? `<span class="plp-pagination-link is-active">${p}</span>`
          : `<button class="plp-pagination-link" type="button" onclick="plpGoTo(this)" data-page-url="${pageUrl(p)}" data-api-page="${p}">${p}</button>`;
        prev = p;
      }

      if (currentPage < totalPages) {
        html += `<button class="plp-pagination-link" type="button" aria-label="Proxima pagina" onclick="plpGoTo(this)" data-page-url="${pageUrl(currentPage + 1)}" data-api-page="${currentPage + 1}"><span class="material-symbols-outlined">chevron_right</span></button>`;
      }

      return html + '</nav>';
    };

    // Renderiza uma página a partir da lista completa filtrada
    const renderPage = (pageNum, filtered) => {
      const totalPages = Math.ceil(filtered.length / PER_PAGE);
      const safePage   = Math.max(1, Math.min(pageNum, totalPages || 1));
      const start      = (safePage - 1) * PER_PAGE;
      const pageItems  = filtered.slice(start, start + PER_PAGE);

      const oldGrid = sectionRoot.querySelector('.plp-listing-grid');
      if (oldGrid) oldGrid.innerHTML = pageItems.length ? pageItems.map(renderCard).join('') : '<p class="plp-filter-help">Nenhum produto disponivel.</p>';

      const oldPag = sectionRoot.querySelector('[data-plp-pagination-wrap]');
      if (oldPag) oldPag.innerHTML = renderPagination(safePage, totalPages);

      // Atualiza o contador de produtos no subtítulo
      const subtitle = sectionRoot.querySelector('.plp-subtitle');
      if (subtitle) subtitle.textContent = filtered.length + ' produtos encontrados';

      sfCurrentPage = safePage;
    };

    // Navega para uma página usando a lista em cache
    const goToPageViaAPI = async (targetPage) => {
      if (!SF_ACTIVE || targetPage < 1) return false;
      showLoading();
      try {
        const filtered = await fetchAllFiltered();
        renderPage(targetPage, filtered);

        const params = new URLSearchParams(window.location.search);
        if (sfCurrentPage === 1) params.delete('page'); else params.set('page', String(sfCurrentPage));
        const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
        history.pushState({ plpPage: true, apiPage: sfCurrentPage }, '', newUrl);

        hideLoading();
        bindCardClicks();
        applyClientFilters();
        if (productsColumn) window.scrollTo({ top: Math.max(0, productsColumn.getBoundingClientRect().top + window.scrollY - 100), behavior: 'smooth' });
        return true;
      } catch (err) {
        console.warn('[PLP SF]', err.message);
        hideLoading();
        return false;
      }
    };
    // ─────────────────────────────────────────────────────────────────────────

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
        params.set(SERVER_PAGE_PARAM, String(overridePage));
      } else {
        params.delete(SERVER_PAGE_PARAM);
      }
      params.delete(UNUSED_PAGE_PARAM);

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

    const resetSfCache = () => {
      sfAllProducts  = null;
      sfFetchPromise = null;
      sfCurrentPage  = 1;
    };

    // Debounced AJAX submit
    const scheduleFilterSubmit = (delay) => {
      const ms = delay != null ? delay : SUBMIT_DEBOUNCE_MS;
      window.clearTimeout(submitDebounceTimer);
      submitDebounceTimer = window.setTimeout(() => {
        if (SF_ACTIVE) resetSfCache();
        doAjaxFilter(buildFetchURL(null), true);
      }, ms);
    };

    const submitNow = () => {
      window.clearTimeout(submitDebounceTimer);
      if (SF_ACTIVE) resetSfCache();
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
    window.plpGoTo = async function (btn) {
      const url = btn && btn.getAttribute('data-page-url');
      if (!url) return;

      if (SF_ACTIVE) {
        const apiPageAttr = btn.getAttribute('data-api-page');
        const targetPage  = apiPageAttr
          ? parseInt(apiPageAttr, 10)
          : (parseInt(new URLSearchParams(url.includes('?') ? url.split('?')[1] : '').get('page') || '1', 10) || 1);
        if (targetPage > 0) {
          const ok = await goToPageViaAPI(targetPage);
          if (ok) return;
        }
      }

      // Fallback: Shopify AJAX section render (search pages or API failure)
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
    window.addEventListener('popstate', (event) => {
      if (SF_ACTIVE && event.state && event.state.apiPage) {
        goToPageViaAPI(event.state.apiPage);
        return;
      }
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

    // Carrega todos os produtos via API, filtra estoque zero e renderiza a página correta
    if (SF_ACTIVE) {
      fetchAllFiltered().then((filtered) => {
        renderPage(sfCurrentPage, filtered);
        bindCardClicks();
        applyClientFilters();
      }).catch((err) => console.warn('[PLP SF]', err.message));
    }

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
