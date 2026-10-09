(function () {
  'use strict';

  // Uma frase por vez: entra por um lado, atravessa (ou para no centro) e sai. A
  // próxima só começa depois do fim da anterior + a pausa, então nunca passam juntas.
  // Velocidade em px/s: frase longa demora mais, mas anda no mesmo ritmo das curtas.
  function init(root) {
    if (!root || root.dataset.tbBound === 'true') return;
    root.dataset.tbBound = 'true';

    const viewport = root.querySelector('.tb__viewport');
    const items = Array.from(root.querySelectorAll('[data-tb-item]'));
    if (!viewport || !items.length || typeof Element.prototype.animate !== 'function') return;

    const mode = root.dataset.mode === 'center' ? 'center' : 'cross';
    const ltr = root.dataset.direction === 'ltr';
    const speed = Math.max(10, Number(root.dataset.speed) || 120);
    const hold = Math.max(0, Number(root.dataset.hold) || 3) * 1000;
    const gap = Math.max(0, Number(root.dataset.gap) || 0) * 1000;
    const pauseOnHover = root.dataset.pauseHover === 'true';
    // Por padrão a barra sempre anima. No Windows, "Efeitos de animação" desligado
    // ativa prefers-reduced-motion e a frase ficaria parada; só respeita isso se o
    // bloco pedir.
    const reduced = root.dataset.respectReducedMotion === 'true'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false };

    let index = 0;
    let animation = null;
    let timer = null;
    let hovering = false;
    let waiting = false; // terminou uma frase e a pausa já acabou, mas o mouse está em cima
    let generation = 0; // invalida callbacks de um ciclo cancelado (aba oculta, reinício)

    root.classList.add('is-ready');

    function stop() {
      generation += 1;
      clearTimeout(timer);
      if (animation) animation.cancel();
      animation = null;
      waiting = false;
      items.forEach((item) => { item.style.opacity = '0'; });
    }

    function frames(item) {
      const W = viewport.clientWidth;
      const w = item.offsetWidth;
      // Posições relativas (left em % da barra + translateX em % da frase), sem conta
      // em px: o layout usa zoom: 0.9 no desktop e cada navegador mede offsetWidth/
      // clientWidth de um jeito com zoom, o que tirava a frase do centro. As medidas
      // em px só entram na duração (velocidade).
      const at = (left, x) => ({ left: left + '%', transform: 'translate(' + x + '%, -50%)', opacity: 1 });
      const start = ltr ? at(0, -100) : at(100, 0);
      const end = ltr ? at(100, 0) : at(0, -100);
      const center = () => at(50, -50);

      // Frase maior que a barra não tem como "parar no centro": atravessa.
      if (mode === 'center' && w < W) {
        const half = (W + w) / 2 / speed * 1000;
        const total = half * 2 + hold;
        return {
          keyframes: [
            start,
            Object.assign(center(), { offset: half / total }),
            Object.assign(center(), { offset: (half + hold) / total }),
            end,
          ],
          duration: total,
        };
      }
      return { keyframes: [start, end], duration: (W + w) / speed * 1000 };
    }

    function next() {
      waiting = false;
      if (hovering && pauseOnHover) { waiting = true; return; }
      const item = items[index];
      index = (index + 1) % items.length;
      play(item);
    }

    function play(item) {
      const cycle = generation;
      // A barra existe no header desktop e no mobile; a cópia escondida (largura 0)
      // fica esperando sem animar até virar a visível.
      if (!viewport.clientWidth) {
        index = (index - 1 + items.length) % items.length;
        timer = setTimeout(() => { if (cycle === generation) next(); }, 1000);
        return;
      }
      if (reduced.matches) {
        // Sem movimento: a frase aparece parada no centro e troca depois de um tempo.
        item.style.left = '50%';
        item.style.transform = 'translate(-50%, -50%)';
        item.style.opacity = '1';
        timer = setTimeout(() => {
          if (cycle !== generation) return;
          item.style.opacity = '0';
          next();
        }, hold + 1000);
        return;
      }
      const { keyframes, duration } = frames(item);
      animation = item.animate(keyframes, { duration, easing: 'linear', fill: 'forwards' });
      if (hovering && pauseOnHover) animation.pause();
      animation.onfinish = () => {
        if (cycle !== generation) return;
        animation.cancel();
        animation = null;
        timer = setTimeout(() => { if (cycle === generation) next(); }, gap);
      };
    }

    function start() {
      stop();
      next();
    }

    if (pauseOnHover) {
      root.addEventListener('mouseenter', () => {
        hovering = true;
        if (animation) animation.pause();
      });
      root.addEventListener('mouseleave', () => {
        hovering = false;
        if (animation) animation.play();
        else if (waiting) next();
      });
    }

    // Aba em segundo plano: o navegador segura os timers e as animações saem de
    // sincronia. Para tudo e recomeça da frase em que estava ao voltar.
    document.addEventListener('visibilitychange', () => {
      if (!root.isConnected) return; // header recarregado no editor do tema
      if (document.hidden) stop();
      else {
        index = (index - 1 + items.length) % items.length;
        start();
      }
    });

    // Largura mudou (girar o celular, redimensionar): a frase atual termina com a
    // conta antiga e a próxima já usa a largura nova; nada a fazer aqui.
    start();
  }

  function initAll(scope) {
    (scope || document).querySelectorAll('[data-tb]').forEach(init);
  }

  initAll();
  document.addEventListener('shopify:section:load', (event) => initAll(event.target));
})();
