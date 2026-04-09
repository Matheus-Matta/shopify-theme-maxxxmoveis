'use strict';

(function () {
  const QTY_DEBOUNCE_MS = 200;

  class CartPage {
    constructor(container) {
      this._root = container;
      this._subtotalEl = container.querySelector('[data-cart-subtotal]');
      this._totalEl = container.querySelector('[data-cart-total]');
      this._totalMobileEl = container.querySelector('[data-cart-total-mobile]');
      this._itemsContainer = container.querySelector('.cart-items-list');
      this._debounceTimers = new Map();
      this._abortControllers = new Map();
      const cfg = window.CartConfig || {};
      this._currencyCode = cfg.currencyCode || 'BRL';
    }

    init() {
      this._bindQuantityControls();
      this._bindRemoveButtons();
      this._bindCheckout();
    }

    applyCartState(cart) {
      if (!cart || !Array.isArray(cart.items)) return;

      const { formatMoneyFromCents } = window.ThemeUtils;
      if (this._subtotalEl) this._subtotalEl.textContent = formatMoneyFromCents(cart.items_subtotal_price);
      if (this._totalEl) this._totalEl.textContent = formatMoneyFromCents(cart.total_price);
      if (this._totalMobileEl) this._totalMobileEl.textContent = formatMoneyFromCents(cart.total_price);

      const itemMap = new Map(cart.items.map((item) => [item.key, item]));
      this._root.querySelectorAll('[data-cart-item-key]').forEach((card) => {
        const itemKey = card.getAttribute('data-cart-item-key');
        const cartItem = itemMap.get(itemKey);
        if (!cartItem) { card.remove(); return; }

        const qtyInput = card.querySelector('[data-cart-qty-input]');
        const linePriceEl = card.querySelector('[data-cart-line-price]');
        if (qtyInput) qtyInput.value = String(cartItem.quantity);
        if (linePriceEl) linePriceEl.textContent = formatMoneyFromCents(cartItem.final_line_price);
      });

      const isEmpty = !cart.items.length;
      const fullContent = this._root.querySelector('[data-cart-full-content]');
      const emptyState = this._root.querySelector('[data-cart-empty-state]');
      if (fullContent) fullContent.style.display = isEmpty ? 'none' : '';
      if (emptyState) emptyState.style.display = isEmpty ? '' : 'none';

      document.dispatchEvent(new CustomEvent('cart:updated', {
        detail: { itemCount: isEmpty ? 0 : cart.item_count },
      }));
    }

    async changeItemQuantity(itemKey, nextQty, itemLine) {
      const prev = this._abortControllers.get(itemKey);
      if (prev) prev.abort();

      const controller = new AbortController();
      this._abortControllers.set(itemKey, controller);

      const body = { updates: { [itemKey]: nextQty } };

      try {
        window.__mxCartChangeActive = true;
        const response = await fetch(window.ThemeUtils.buildStoreUrl('cart/update.js'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('fail_' + response.status);
        const cart = await response.json();
        this.applyCartState(cart);
      } catch (err) {
        if (err.name === 'AbortError') return;
        // Não recarrega — tenta sincronizar estado atual do carrinho
        try {
          const r = await fetch(window.ThemeUtils.buildStoreUrl('cart.js'), { headers: { Accept: 'application/json' } });
          if (r.ok) this.applyCartState(await r.json());
        } catch (_) {}
        this._root.querySelectorAll('[data-cart-remove].is-loading').forEach((b) => b.classList.remove('is-loading'));
      } finally {
        window.__mxCartChangeActive = false;
        if (this._abortControllers.get(itemKey) === controller) {
          this._abortControllers.delete(itemKey);
        }
      }
    }

    queueChangeItemQuantity(itemKey, nextQty, immediate, itemLine) {
      const current = this._debounceTimers.get(itemKey);
      if (current) clearTimeout(current);

      if (immediate) {
        this._debounceTimers.delete(itemKey);
        void this.changeItemQuantity(itemKey, nextQty, itemLine);
        return;
      }

      const timerId = setTimeout(() => {
        this._debounceTimers.delete(itemKey);
        void this.changeItemQuantity(itemKey, nextQty, itemLine);
      }, QTY_DEBOUNCE_MS);

      this._debounceTimers.set(itemKey, timerId);
    }

    _syncQtyInput(input, nextValue) {
      const value = Math.max(0, Number(nextValue) || 0);
      input.value = String(value);
      return value;
    }

    _getItemKey(el) {
      const card = el.closest('[data-cart-item-key]');
      return card ? card.getAttribute('data-cart-item-key') : '';
    }

    _getItemLine(el) {
      const card = el.closest('[data-cart-line]');
      return card ? Number(card.getAttribute('data-cart-line') || 0) : 0;
    }

    _bindQuantityControls() {
      this._root.querySelectorAll('[data-cart-qty-control]').forEach((control) => {
        const input = control.querySelector('.cart-item__qty-value');
        const increaseBtn = control.querySelector('[data-cart-qty-increase]');
        const decreaseBtn = control.querySelector('[data-cart-qty-decrease]');
        const itemKey = this._getItemKey(control);
        const itemLine = this._getItemLine(control);
        if (!input) return;

        input.addEventListener('input', () => {
          input.value = input.value.replace(/\D+/g, '');
          if (!itemKey || input.value === '') return;
          this.queueChangeItemQuantity(itemKey, this._syncQtyInput(input, input.value), false, itemLine);
        });

        input.addEventListener('blur', () => {
          if (itemKey) this.queueChangeItemQuantity(itemKey, this._syncQtyInput(input, input.value), true, itemLine);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (itemKey) this.queueChangeItemQuantity(itemKey, this._syncQtyInput(input, (Number(input.value) || 0) + 1), false, itemLine);
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (itemKey) this.queueChangeItemQuantity(itemKey, this._syncQtyInput(input, (Number(input.value) || 0) - 1), false, itemLine);
          } else if (e.key === 'Enter') {
            e.preventDefault();
            input.blur();
          }
        });

        increaseBtn && increaseBtn.addEventListener('click', () => {
          if (itemKey) this.queueChangeItemQuantity(itemKey, this._syncQtyInput(input, (Number(input.value) || 0) + 1), false, itemLine);
        });

        decreaseBtn && decreaseBtn.addEventListener('click', () => {
          if (itemKey) this.queueChangeItemQuantity(itemKey, this._syncQtyInput(input, (Number(input.value) || 0) - 1), false, itemLine);
        });

        this._syncQtyInput(input, input.value);
      });
    }

    _bindRemoveButtons() {
      this._root.querySelectorAll('[data-cart-remove]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const itemKey = this._getItemKey(btn);
          const itemLine = this._getItemLine(btn);
          if (!itemKey && !itemLine) return;
          btn.classList.add('is-loading');
          this.queueChangeItemQuantity(itemKey, 0, true, itemLine);
        });
      });
    }

    _bindCheckout() {
      this._root.querySelectorAll('[data-cart-checkout]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const href = btn.getAttribute('href');
          if (!href) return;
          this._root.querySelectorAll('[data-cart-checkout]').forEach((el) => {
            el.classList.add('is-loading');
            el.dataset.cartCheckoutOrigText = el.textContent.trim();
            el.textContent = 'Aguarde...';
          });
          window.location.href = href;
        });
      });
    }
  }

  const initCartPage = () => {
    const root = document.querySelector('[data-cart-qty-bound]') || document.querySelector('.cart-page-root');
    if (!root) {
      const sectionRoots = document.querySelectorAll('[id^="shopify-section-"]');
      let cartRoot = null;
      sectionRoots.forEach((el) => {
        if (el.querySelector('[data-cart-item-key]') || el.querySelector('[data-cart-qty-control]')) {
          cartRoot = el;
        }
      });
      if (!cartRoot) return;
      if (cartRoot.dataset.cartQtyBound === 'true') return;
      cartRoot.dataset.cartQtyBound = 'true';
      new CartPage(cartRoot).init();
      return;
    }
    if (root.dataset.cartQtyBound === 'true') return;
    root.dataset.cartQtyBound = 'true';
    new CartPage(root).init();
  };

  const initCartSection = (sectionId) => {
    const el = document.getElementById('shopify-section-' + sectionId);
    if (!el) return;
    if (el.dataset.cartQtyBound === 'true') return;
    el.dataset.cartQtyBound = 'true';
    new CartPage(el).init();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCartPage);
  } else {
    initCartPage();
  }

  window.CartPage = CartPage;
  window.__cartInitSection = initCartSection;
})();
