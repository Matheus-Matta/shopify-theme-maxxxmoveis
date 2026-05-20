/**
 * MaxxxMóveis – Purchase Toast (Prova Social)
 *
 * Busca produtos REAIS da loja via Shopify AJAX API (sem autenticação).
 * Combina com nome e cidade fictícios para simular compra recente.
 * Exibe toast animado no canto inferior esquerdo a cada 2-4 minutos.
 */
(function () {
  'use strict';

  /* ─── Configurações ─────────────────────────────────────────── */
  var CFG = {
    minInterval:     2 * 60 * 1000, // 2 minutos
    maxInterval:     4 * 60 * 1000, // 4 minutos
    firstDelay:      20 * 1000,     // primeira exibição após 20s
    displayDuration: 6000,
    animDuration:    420,
    cacheKey:        'mx_pt_prods',
    cacheExpiry:     30 * 60 * 1000, // 30 min
  };

  /* ─── Dados fictícios ───────────────────────────────────────── */
  var NAMES = [
    'Ana P.', 'Carlos M.', 'Fernanda S.', 'Ricardo L.', 'Juliana R.',
    'Pedro H.', 'Mariana C.', 'Lucas O.', 'Camila B.', 'Diego F.',
    'Patrícia G.', 'Gustavo N.', 'Larissa V.', 'Felipe A.', 'Bruna T.',
    'Eduardo W.', 'Letícia K.', 'André Z.', 'Natalia Q.', 'Rodrigo E.',
    'Aline J.', 'Thiago S.', 'Renata M.', 'Bruno C.', 'Isabela F.',
  ];

  var CITIES = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG',
    'Curitiba, PR', 'Porto Alegre, RS', 'Salvador, BA',
    'Fortaleza, CE', 'Recife, PE', 'Manaus, AM', 'Goiânia, GO',
    'Florianópolis, SC', 'Vitória, ES', 'Natal, RN', 'Maceió, AL',
    'Campinas, SP', 'São Bernardo, SP', 'Uberlândia, MG', 'Belém, PA',
    'Teresina, PI', 'Campo Grande, MS', 'São Luís, MA', 'João Pessoa, PB',
  ];

  var TIME_LABELS = [
    'Agora mesmo', 'Há 1 minuto', 'Há 2 minutos', 'Há 3 minutos',
    'Há 5 minutos', 'Há 7 minutos', 'Há 10 minutos', 'Há 15 minutos',
    'Há 20 minutos', 'Há 30 minutos',
  ];

  /* ─── Utilitários ───────────────────────────────────────────── */
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  function formatMoney(value) {
    // A AJAX API geralmente retorna o preço como string "260.00". 
    // Se for um número muito grande (ex: 26000), pode ser centavos.
    // Mas no products.json do Shopify é quase sempre o valor final.
    var num = Number(value) || 0;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
      .format(num);
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function buildStoreUrl(path) {
    var root = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
    return root + String(path || '').replace(/^\/+/, '');
  }

  /* ─── Cache de produtos ─────────────────────────────────────── */
  function getCached() {
    try {
      var raw = sessionStorage.getItem(CFG.cacheKey);
      if (!raw) return null;
      var p = JSON.parse(raw);
      if (!p || !p.ts || !Array.isArray(p.products)) return null;
      if (Date.now() - p.ts > CFG.cacheExpiry) return null;
      return p.products;
    } catch (e) { return null; }
  }

  function setCache(products) {
    try { sessionStorage.setItem(CFG.cacheKey, JSON.stringify({ ts: Date.now(), products: products })); }
    catch (e) { /* quota */ }
  }

  /* ─── Busca produtos reais via Shopify AJAX API ─────────────── */
  async function fetchProducts() {
    var cached = getCached();
    if (cached && cached.length > 0) return cached;

    var products = [];

    // Tenta buscar da coleção "all" ordenada por best-selling
    var urls = [
      buildStoreUrl('collections/all/products.json?limit=24&sort_by=best-selling'),
      buildStoreUrl('products.json?limit=20'),
    ];

    for (var i = 0; i < urls.length; i++) {
      try {
        var res = await fetch(urls[i], { headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          var data = await res.json();
          if (data && Array.isArray(data.products) && data.products.length > 0) {
            products = data.products;
            break;
          }
        }
      } catch (e) { /* ignora e tenta o próximo */ }
    }

    // Filtra produtos com imagem e disponíveis (estoque)
    var filtered = products.filter(function (p) {
      // Verifica se tem imagem
      var hasImg = p.featured_image || p.image || (p.images && p.images.length > 0);
      
      // Verifica disponibilidade (estoque)
      var isAvailable = p.available;
      if (isAvailable === undefined && p.variants) {
        isAvailable = p.variants.some(function(v) { return v.available; });
      }

      return hasImg && p.title && isAvailable !== false;
    });

    var final = filtered.length > 0 ? filtered : products;
    if (final.length > 0) setCache(final);
    return final;
  }

  /* ─── Monta objeto de "compra fictícia" com produto real ─────── */
  function buildFakeOrder(product) {
    if (!product) return null;

    // Tenta pegar a imagem de vários lugares possíveis na resposta da API
    var imgSrc = '';
    var rawImg = product.featured_image || product.image || (product.images && product.images[0]);
    
    if (rawImg) {
      if (typeof rawImg === 'string') {
        imgSrc = rawImg;
      } else if (typeof rawImg === 'object' && rawImg.src) {
        imgSrc = rawImg.src;
      }
    }

    // Se ainda não temos imagem, tenta pegar da lista de imagens
    if (!imgSrc && product.images && product.images.length > 0) {
      imgSrc = typeof product.images[0] === 'string' ? product.images[0] : product.images[0].src;
    }

    // Se após todas as tentativas não houver imagem, aborta para não mostrar toast sem foto
    if (!imgSrc) return null;

    // Otimiza URL do CDN para tamanho pequeno
    if (imgSrc.indexOf('//') === 0) imgSrc = 'https:' + imgSrc;
    if (imgSrc.includes('cdn.shopify.com')) {
      imgSrc = imgSrc.replace(/(_\d+x\d+)?(\.(jpg|jpeg|png|webp|gif))(\?|$)/i, '_140x140$2$4');
    }

    // Preço: usa o menor preço disponível
    var price = product.price || 0;
    if (!price && product.variants && product.variants[0]) {
      price = product.variants[0].price || 0;
    }

    return {
      customerName:  rand(NAMES),
      productTitle:  product.title,
      productHandle: product.handle,
      imageUrl:      imgSrc,
      price:         price,    
      timeAgo:       'Agora mesmo',
    };
  }

  /* ─── Estilos ───────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('mx-pt-style')) return;
    var s = document.createElement('style');
    s.id = 'mx-pt-style';
    s.textContent = `
      #mx-purchase-toast {
        position: fixed; bottom: 24px; left: 24px; z-index: 99990;
        pointer-events: none;
        
        font-family: var(--font-body-family, 'Inter', sans-serif);
      }
      #mx-pt-inner {
        display: flex; align-items: center; gap: 14px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 8px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07);
        padding: 14px 40px 14px 14px;
        min-width: 290px; max-width: 350px;
        pointer-events: auto; position: relative;
        border: 1px solid rgba(0,0,0,0.06);
        transform: translateX(-120%) scale(0.92); opacity: 0;
        transition: transform 0.44s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        will-change: transform, opacity;
      }
      #mx-pt-inner.mx-pt-in  { transform: translateX(0) scale(1); opacity: 1; }
      #mx-pt-inner.mx-pt-out { transform: translateX(-112%) scale(0.9); opacity: 0;
        transition: transform 0.3s ease-in, opacity 0.22s ease-in; }

      .mx-pt-img { flex-shrink:0; width:66px; height:66px; border-radius:10px;
        overflow:hidden; background:#f3f4f6; position:relative; }
      .mx-pt-img img { width:100%; height:100%; object-fit:cover; display:block; }
      .mx-pt-check { position:absolute; bottom:-3px; right:-3px; width:22px; height:22px;
        background:#16a34a; border-radius:50%; border:2.5px solid #fff;
        display:flex; align-items:center; justify-content:center; flex-shrink:0; z-index: 2; }

      .mx-pt-body { flex:1; min-width:0; }
      .mx-pt-label { display:flex; align-items:center; gap:5px;
        font-size:10.5px; font-weight:700; color:#16a34a;
        text-transform:uppercase; letter-spacing:.07em; margin-bottom:3px; }
      .mx-pt-dot { width:7px; height:7px; border-radius:50%; background:#16a34a;
        flex-shrink:0; animation:mx-pt-pulse 1.6s ease-in-out infinite; }
      @keyframes mx-pt-pulse {
        0%,100%{ box-shadow:0 0 0 0 rgba(22,163,74,.45); }
        50%    { box-shadow:0 0 0 5px rgba(22,163,74,0); }
      }
      .mx-pt-customer { font-size:13.5px; font-weight:700; color:#111827;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:1px; }
      .mx-pt-product  { font-size:12px; color:#374151;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:5px; }
      .mx-pt-footer   { display:flex; align-items:center; flex-wrap:wrap; gap:6px; }
      .mx-pt-price    { font-size:13px; font-weight:800;
        color:var(--color-primary,#0058BB); white-space:nowrap; }
      .mx-pt-sep      { color:#d1d5db; font-size:11px; }
      .mx-pt-location { font-size:11px; color:#6b7280;
        display:flex; align-items:center; gap:3px;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:130px; }
      .mx-pt-time     { font-size:11px; color:#9ca3af; }

      .mx-pt-close {
        position:absolute; top:9px; right:9px; width:22px; height:22px;
        border-radius:50%; background:transparent; border:none; cursor:pointer;
        display:flex; align-items:center; justify-content:center;
        opacity:.4; transition:opacity .2s,background .2s; padding:0;
      }
      .mx-pt-close:hover { opacity:.85; background:#f3f4f6; }



      @media(max-width:480px){
        #mx-purchase-toast{ bottom:14px; left:10px; right:10px; }
        #mx-pt-inner{ min-width:unset; max-width:100%; }
      }
    `;
    document.head.appendChild(s);
  }

  /* ─── Container ─────────────────────────────────────────────── */
  function createContainer() {
    if (document.getElementById('mx-purchase-toast')) return;
    var el = document.createElement('div');
    el.id = 'mx-purchase-toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML = '<div id="mx-pt-inner"></div>';
    document.body.appendChild(el);
  }

  /* ─── Exibe o toast ─────────────────────────────────────────── */
  var _visible = false;
  var _hideTimer = null;

  function showToast(order) {
    if (_visible || !order) return;
    
    // Validação mínima para não mostrar toast vazio
    if (!order.customerName || !order.productTitle) {
      console.warn('[PurchaseToast] Dados do pedido incompletos:', order);
      return;
    }

    var inner = document.getElementById('mx-pt-inner');
    if (!inner) {
      createContainer();
      inner = document.getElementById('mx-pt-inner');
    }
    if (!inner) return;

    _visible = true;

    var productUrl = order.productHandle
      ? buildStoreUrl('products/' + order.productHandle) : null;

    // Limpa classes de animação anteriores para evitar conflitos
    inner.classList.remove('mx-pt-in', 'mx-pt-out');

    inner.innerHTML = `
      <div class="mx-pt-img">
        ${order.imageUrl
          ? `<img src="${escapeHtml(order.imageUrl)}" alt="" loading="lazy" width="66" height="66">`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:28px;">🛋️</div>`
        }
        <div class="mx-pt-check">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 5.5L4 8L9.5 2.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="mx-pt-body">
        <div class="mx-pt-label"><span class="mx-pt-dot"></span>Compra realizada!</div>
        <div class="mx-pt-customer">${escapeHtml(order.customerName)}</div>
        <div class="mx-pt-product" title="${escapeHtml(order.productTitle)}">${escapeHtml(order.productTitle)}</div>
        <div class="mx-pt-footer">
          <span class="mx-pt-price">${formatMoney(order.price)}</span>
          <span class="mx-pt-sep">·</span>
          <span class="mx-pt-time">${escapeHtml(order.timeAgo)}</span>
        </div>
      </div>
      <button class="mx-pt-close" id="mx-pt-close-btn" aria-label="Fechar">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M1 1l7 7M8 1L1 8" stroke="#6b7280" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </button>
    `;

    // Clique navega para o produto
    inner.style.cursor = productUrl ? 'pointer' : 'default';
    inner.onclick = function (e) {
      if (e.target.closest('#mx-pt-close-btn')) return;
      if (productUrl) window.location.href = productUrl;
    };

    var closeBtn = document.getElementById('mx-pt-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', function (e) {
      e.stopPropagation(); hideToast();
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { 
        if (inner) inner.classList.add('mx-pt-in'); 
      });
    });

    if (_hideTimer) clearTimeout(_hideTimer);
    _hideTimer = setTimeout(hideToast, CFG.displayDuration);
  }

  function hideToast() {
    if (_hideTimer) { clearTimeout(_hideTimer); _hideTimer = null; }
    var inner = document.getElementById('mx-pt-inner');
    if (!inner) { _visible = false; return; }

    inner.classList.add('mx-pt-out');

    setTimeout(function () {
      if (inner) {
        inner.classList.remove('mx-pt-in', 'mx-pt-out');
        inner.innerHTML = '';
      }
      _visible = false;
    }, CFG.animDuration + 60);
  }

  /* ─── Pool de produtos sem repetição ────────────────────────── */
  var _pool = [];
  var _used = [];

  function pickProduct() {
    if (_pool.length === 0) return null;
    if (_used.length >= _pool.length) _used = [];
    var available = _pool.map(function (_, i) { return i; })
      .filter(function (i) { return _used.indexOf(i) === -1; });
    var idx = available.length > 0
      ? available[randInt(0, available.length - 1)]
      : randInt(0, _pool.length - 1);
    _used.push(idx);
    return _pool[idx];
  }

  /* ─── Loop principal ────────────────────────────────────────── */
  async function tick() {
    if (_pool.length === 0) {
      _pool = await fetchProducts();
    }

    var product = pickProduct();
    var order   = buildFakeOrder(product);
    if (order) showToast(order);

    var nextIn = randInt(CFG.minInterval, CFG.maxInterval);
    setTimeout(tick, nextIn + CFG.displayDuration);
  }

  /* ─── Init ──────────────────────────────────────────────────── */
  function init() {
    if (/\/(checkout|cart)/.test(window.location.pathname)) return;
    injectStyles();
    createContainer();
    // Pré-carrega produtos
    fetchProducts().then(function (p) { _pool = p; }).catch(function () {});
    setTimeout(tick, CFG.firstDelay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
