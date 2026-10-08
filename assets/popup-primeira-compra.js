(function () {
  'use strict';

  // Até quando o pop-up fica escondido para este navegador (timestamp em ms).
  const STORAGE_KEY = 'maxxx_popup_1a_compra_ate';
  const DAY = 24 * 60 * 60 * 1000;
  // Quem copiou o cupom ou abriu o banner não precisa vê-lo de novo tão cedo.
  const ACCEPTED_DAYS = 365;

  const storage = {
    get() { try { return Number(window.localStorage.getItem(STORAGE_KEY)) || 0; } catch (e) { return 0; } },
    hideFor(days) { try { window.localStorage.setItem(STORAGE_KEY, String(Date.now() + days * DAY)); } catch (e) { /* modo privado */ } },
  };

  function init(dialog) {
    if (!dialog || dialog.dataset.pcBound === 'true' || typeof dialog.showModal !== 'function') return;
    dialog.dataset.pcBound = 'true';

    const designMode = dialog.dataset.designMode === 'true';
    const days = Number(dialog.dataset.days) || 7;
    const delay = (Number(dialog.dataset.delay) || 0) * 1000;
    let accepted = false;

    function open() {
      // Outro modal aberto (lightbox, carrinho...): não empilha por cima.
      if (dialog.open || document.querySelector('dialog[open]')) return;
      dialog.showModal();
    }

    dialog.addEventListener('close', () => {
      if (!designMode) storage.hideFor(accepted ? ACCEPTED_DAYS : days);
    });
    dialog.querySelector('[data-pc-close]').addEventListener('click', () => dialog.close());
    // Clique no fundo escuro (fora do cartão) fecha.
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    dialog.querySelectorAll('[data-pc-accept]').forEach((link) => {
      link.addEventListener('click', () => { accepted = true; });
    });

    const copy = dialog.querySelector('[data-pc-copy]');
    if (copy) {
      const label = copy.textContent;
      copy.addEventListener('click', () => {
        const code = dialog.querySelector('[data-pc-code]').textContent.trim();
        const done = () => {
          accepted = true;
          copy.textContent = 'Copiado!';
          setTimeout(() => { copy.textContent = label; }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(done).catch(() => {});
        }
      });
    }

    if (designMode) {
      // No editor do tema: abre ao selecionar a section, sem esperar nem guardar nada.
      document.addEventListener('shopify:section:select', (event) => {
        if (event.target.contains(dialog)) open();
      });
      document.addEventListener('shopify:section:deselect', (event) => {
        if (event.target.contains(dialog) && dialog.open) dialog.close();
      });
      return;
    }

    if (storage.get() > Date.now()) return;
    setTimeout(open, delay);
  }

  init(document.querySelector('[data-pc-popup]'));
  document.addEventListener('shopify:section:load', (event) => init(event.target.querySelector('[data-pc-popup]')));
})();
