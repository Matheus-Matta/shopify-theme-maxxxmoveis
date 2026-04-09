window.ThemeUtils = (function () {
  'use strict';

  const buildStoreUrl = (path) => {
    const root = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root)
      ? window.Shopify.routes.root
      : '/';
    return root + String(path || '').replace(/^\/+/, '');
  };

  const escapeHtml = (value) => String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const formatMoneyFromCents = (cents) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
      .format((Number(cents) || 0) / 100);

  return { buildStoreUrl, escapeHtml, formatMoneyFromCents };
})();

document.addEventListener('DOMContentLoaded', () => {
  const { buildStoreUrl, escapeHtml, formatMoneyFromCents } = window.ThemeUtils;

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuPanel = document.querySelector('[data-menu-panel]');

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuPanel.hasAttribute('data-open');

      if (isOpen) {
        menuPanel.removeAttribute('data-open');
        menuPanel.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
        return;
      }

      menuPanel.setAttribute('data-open', 'true');
      menuPanel.hidden = false;
      menuToggle.setAttribute('aria-expanded', 'true');
    });
  }

  // --- Favorites Frontend Logic ---
  const FAVES_KEY = 'store_favorites';

  function normalizeFavoriteEntry(entry) {
    if (!entry) return null;

    if (typeof entry === 'string') {
      const normalizedHandle = entry.trim();
      if (!normalizedHandle) return null;
      return { id: '', handle: normalizedHandle };
    }

    if (typeof entry === 'object') {
      const normalizedHandle = (entry.handle || entry.productHandle || '').toString().trim();
      const normalizedId = (entry.id || entry.productId || '').toString().trim();
      if (!normalizedHandle && !normalizedId) return null;
      return { id: normalizedId, handle: normalizedHandle };
    }

    return null;
  }

  function normalizeFavorites(list) {
    if (!Array.isArray(list)) return [];

    const seen = new Set();
    const normalized = [];

    list.forEach((entry) => {
      const item = normalizeFavoriteEntry(entry);
      if (!item) return;

      const key = item.handle ? `handle:${item.handle}` : `id:${item.id}`;
      if (seen.has(key)) return;
      seen.add(key);
      normalized.push(item);
    });

    return normalized;
  }

  function getFavoriteButtonPayload(btn) {
    const handle = (btn.getAttribute('data-favorite-btn') || btn.getAttribute('data-product-handle') || '').trim();
    const id = (btn.getAttribute('data-product-id') || '').trim();
    if (!handle && !id) return null;
    return { handle, id };
  }

  function favoriteMatchesPayload(favorite, payload) {
    if (favorite.handle && payload.handle) return favorite.handle === payload.handle;
    if (favorite.id && payload.id) return favorite.id === payload.id;
    return false;
  }

  function favoriteKey(favorite) {
    return favorite.handle ? `handle:${favorite.handle}` : `id:${favorite.id}`;
  }

  function getFavorites() {
    try {
      const parsed = JSON.parse(localStorage.getItem(FAVES_KEY));
      return normalizeFavorites(parsed || []);
    } catch (e) {
      return [];
    }
  }

  function saveFavorites(faves) {
    localStorage.setItem(FAVES_KEY, JSON.stringify(normalizeFavorites(faves)));
  }

  function updateFavoritesUI() {
    const faves = getFavorites();
    document.querySelectorAll('[data-favorite-btn], [data-product-handle]').forEach(btn => {
      const payload = getFavoriteButtonPayload(btn);
      if (!payload) return;
      const icon = btn.querySelector('.material-symbols-outlined');
      const isFavorite = faves.some((favorite) => favoriteMatchesPayload(favorite, payload));

      if (isFavorite) {
        btn.classList.add('text-[#EF4444]', '!opacity-100');
        btn.classList.remove('text-[#6B7280]', 'opacity-0');
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
      } else {
        btn.classList.remove('text-[#EF4444]', '!opacity-100');
        btn.classList.add('text-[#6B7280]', 'opacity-0');
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
      }
    });

    const badges = document.querySelectorAll('[data-favorites-count-badge]');
    badges.forEach(badge => {
      badge.textContent = faves.length;
      if (faves.length > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    });
  }

  async function renderFavoritesPage() {
    const grid = document.querySelector('[data-favorites-page-grid]');
    if (!grid) return;

    const emptyState = document.querySelector('[data-favorites-page-empty]');
    const loadingState = document.querySelector('[data-favorites-page-loading]');
    const faves = getFavorites();
    const handles = faves
      .map((item) => item.handle)
      .filter(Boolean);

    if (loadingState) loadingState.classList.remove('hidden');
    grid.innerHTML = '';

    if (handles.length === 0) {
      if (loadingState) loadingState.classList.add('hidden');
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    const requests = handles.map(async (handle) => {
      const response = await fetch(buildStoreUrl(`products/${encodeURIComponent(handle)}.js`));
      if (!response.ok) {
        throw new Error(`Produto nao encontrado: ${handle}`);
      }
      return response.json();
    });

    const products = (await Promise.allSettled(requests))
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value);

    if (loadingState) loadingState.classList.add('hidden');

    if (products.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    const html = products
      .map((product) => {
        const imageSrc = product.featured_image || '';
        const title = escapeHtml(product.title);
        const url = buildStoreUrl(`products/${encodeURIComponent(product.handle)}`);
        const compareAtRaw = product.compare_at_price || product.compare_at_price_min || 0;
        const hasFavPromo = Number(compareAtRaw) > Number(product.price) && Number(compareAtRaw) > 0;
        const price = formatMoneyFromCents(product.price);
        const compareAtFormatted = hasFavPromo ? formatMoneyFromCents(compareAtRaw) : '';
        const firstAvailableVariant = Array.isArray(product.variants)
          ? (product.variants.find((variant) => variant.available) || product.variants[0])
          : null;
        const variantId = firstAvailableVariant ? String(firstAvailableVariant.id) : '';

        return `
          <article class="fav-item">
            <a class="fav-thumb" href="${url}">
              <div class="fav-image">
                ${imageSrc ? `<img src="${imageSrc}" alt="${title}" loading="lazy" width="540" height="540">` : ''}
              </div>
            </a>
            <div class="fav-body">
              <h3 class="fav-title"><a class="fav-title-link" href="${url}">${title}</a></h3>
              ${hasFavPromo ? `<p class="fav-price" style="text-decoration:line-through; color: var(--color-promo-old-price); font-size:0.85em">${compareAtFormatted}</p>` : ''}
              <p class="fav-price"${hasFavPromo ? ' style="color: var(--color-promo-final-price)"' : ''}>${price}</p>
              <div class="fav-actions">
                <a class="fav-btn fav-btn-outline" href="${url}">Ir para produto</a>
                ${variantId
                  ? `<form class="fav-add-form" method="post" action="${buildStoreUrl('cart/add')}"><input type="hidden" name="id" value="${variantId}"><input type="hidden" name="quantity" value="1"><button class="fav-btn fav-btn-primary" type="submit">Adicionar ao carrinho</button></form>`
                  : `<button class="fav-btn fav-btn-primary" type="button" disabled>Indisponivel</button>`}
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    grid.innerHTML = html;
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-favorite-btn], [data-product-handle]');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const payload = getFavoriteButtonPayload(btn);
    if (!payload) return;

    let faves = getFavorites();
    const hasFavorite = faves.some((favorite) => favoriteMatchesPayload(favorite, payload));

    if (hasFavorite) {
      const payloadKey = payload.handle ? `handle:${payload.handle}` : `id:${payload.id}`;
      faves = faves.filter((favorite) => favoriteKey(favorite) !== payloadKey);
    } else {
      faves.push({ id: payload.id, handle: payload.handle });
    }

    saveFavorites(faves);
    updateFavoritesUI();
    renderFavoritesPage();
  });

  // ── fav-add-form: AJAX para evitar reload de página ──────────────────────
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('.fav-add-form');
    if (!form) return;
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const prevLabel = btn ? btn.textContent : null;
    if (btn) { btn.disabled = true; btn.textContent = 'Adicionando...'; }

    try {
      const resp = await fetch(buildStoreUrl('cart/add.js'), {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (!resp.ok) throw new Error('add_failed');
      const cartRes = await fetch(buildStoreUrl('cart.js'), { headers: { 'Accept': 'application/json' } });
      if (cartRes.ok) {
        const data = await cartRes.json();
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: { itemCount: Number(data.item_count) } }));
      }
      if (btn) btn.textContent = 'Adicionado!';
    } catch (_) {
      if (btn) btn.textContent = 'Erro, tente novamente';
    } finally {
      window.setTimeout(() => {
        if (btn) { btn.disabled = false; btn.textContent = prevLabel; }
      }, 1500);
    }
  });

  updateFavoritesUI();
  renderFavoritesPage();

  window.addEventListener('storage', (event) => {
    if (event.key !== FAVES_KEY) return;
    updateFavoritesUI();
    renderFavoritesPage();
  });
});

// â”€â”€ Scroll-reveal (IntersectionObserver) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
  if (!window.IntersectionObserver) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
  );


  // Aplica gc-reveal em titulos de secao antes de iniciar o observer
  document.querySelectorAll('.ctc-heading, .featured-section-title, .section__title').forEach(function (el, i) {
    if (!el.classList.contains('gc-reveal')) {
      el.classList.add('gc-reveal');
      el.setAttribute('data-sr-delay', String((i % 3) + 1));
    }
  });

  var initReveal = function () {
    document.querySelectorAll('.gc-reveal:not(.is-visible)').forEach(function (el) {
      observer.observe(el);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }

  document.addEventListener('plp:updated', initReveal);
})();

// â”€â”€ Product-card image-shimmer handler â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function () {
  var fadeShimmer = function (shimmer) {
    if (!shimmer || shimmer.classList.contains('loaded')) return;
    shimmer.classList.add('loaded');
  };

  var processFrames = function () {
    document.querySelectorAll('.gc-product-media-frame').forEach(function (frame) {
      var shimmer = frame.querySelector('.gc-img-shimmer');
      if (!shimmer || shimmer.classList.contains('loaded')) return;

      // Case 1: <img> tag
      var img = frame.querySelector('img');
      if (img) {
        if (img.complete && img.naturalWidth > 0) { fadeShimmer(shimmer); return; }
        img.addEventListener('load',  function () { fadeShimmer(shimmer); }, { once: true });
        img.addEventListener('error', function () { fadeShimmer(shimmer); }, { once: true });
        return;
      }

      // Case 2: CSS background-image div (tab carousel / featured)
      var bgEl = frame.querySelector('[data-ctc-images],[data-featured-images]');
      if (bgEl) {
        var urlsAttr = bgEl.getAttribute('data-ctc-images') || bgEl.getAttribute('data-featured-images') || '';
        var firstUrl = urlsAttr.split('|')[0].trim();
        if (!firstUrl) { fadeShimmer(shimmer); return; }
        var preload = new Image();
        preload.onload = preload.onerror = function () { fadeShimmer(shimmer); };
        preload.src = firstUrl;
        setTimeout(function () { fadeShimmer(shimmer); }, 4000);
        return;
      }

      fadeShimmer(shimmer);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processFrames);
  } else {
    processFrames();
  }

  document.addEventListener('plp:updated', processFrames);
})();