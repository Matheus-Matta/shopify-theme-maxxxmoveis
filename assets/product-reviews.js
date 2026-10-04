(function () {
  'use strict';

  const MAX_PHOTOS = 3;
  const MAX_SIDE = 1600;
  const JPEG_QUALITY = 0.82;
  const COMMENT_MIN = 10;
  const COMMENT_MAX = 1500;
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif'];
  const ALLOWED_EXT = /\.(jpe?g|png|webp|gif|heic|heif)$/i;
  const RATING_TEXT = ['', 'Ruim', 'Regular', 'Bom', 'Muito bom', 'Excelente'];

  const storage = {
    get(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* modo privado */ } },
    remove(key) { try { window.localStorage.removeItem(key); } catch (e) { /* modo privado */ } },
  };

  function isAllowed(file) {
    // HEIC costuma chegar com type vazio no Windows/Android: a extensão decide.
    return ALLOWED_TYPES.includes(file.type) || (!file.type && ALLOWED_EXT.test(file.name));
  }

  // Reduz a foto para caber no limite do hub e acelerar o envio no celular.
  // GIF fica intacto (perderia a animação); formato que o navegador não decodifica
  // (HEIC fora do Safari) segue original e o hub decide.
  async function compress(file) {
    if (file.type === 'image/gif' || typeof createImageBitmap !== 'function') return file;
    let bitmap;
    try {
      bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch (e) {
      return file;
    }
    const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    if (bitmap.close) bitmap.close();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY));
    if (!blob || blob.size >= file.size) return file;
    const name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
    return new File([blob], name, { type: 'image/jpeg' });
  }

  // ── Formulário ───────────────────────────────────────────────────────────────
  function initForm(form) {
    const fields = form.querySelector('[data-rv-fields]');
    const done = form.querySelector('[data-rv-done]');
    const doneTitle = form.querySelector('[data-rv-done-title]');
    const doneText = form.querySelector('[data-rv-done-text]');
    const errorEl = form.querySelector('[data-rv-error]');
    const submitBtn = form.querySelector('[data-rv-submit]');
    const comment = form.querySelector('[data-rv-comment]');
    const counter = form.querySelector('[data-rv-counter]');
    const ratingText = form.querySelector('[data-rv-rating-text]');
    const uploader = form.querySelector('[data-rv-uploader]');
    const fileInput = form.querySelector('[data-rv-file]');
    const apiUrl = form.dataset.apiUrl;
    const maxBytes = (Number(form.dataset.maxMb) || 10) * 1024 * 1024;
    const storageKey = form.dataset.storageKey;
    const submitLabel = submitBtn.textContent;
    // Modo demonstração: sem API e sem guardar nada, para ver o layout à vontade.
    const isDemo = form.dataset.demo === 'true';

    // Cada item: { file (já comprimido), url (preview local), busy }
    let photos = [];
    let replaceIndex = -1;
    let sending = false;

    function showDone(title, text) {
      fields.hidden = true;
      done.hidden = false;
      if (title) doneTitle.textContent = title;
      if (text) doneText.textContent = text;
    }

    function showAlreadyReviewed(status) {
      showDone(
        'Você já avaliou este produto.',
        status === 'aprovada' ? 'Sua avaliação já está publicada.' : 'Sua avaliação foi enviada para análise.'
      );
    }

    function showForm() {
      done.hidden = true;
      fields.hidden = false;
    }

    // A marca no navegador só evita piscar o formulário; quem decide é o hub
    // (avaliação excluída ou rejeitada lá libera o cliente para avaliar de novo).
    if (!isDemo && storage.get(storageKey)) showAlreadyReviewed();

    // O hub é quem sabe se já existe avaliação (vale entre navegadores); se a
    // consulta falhar, o formulário fica e o 409 do envio cobre o caso.
    (function checkExisting() {
      if (isDemo) return;
      const params = new URLSearchParams({
        payload: form.elements.payload.value,
        sig: form.elements.sig.value,
      });
      fetch(apiUrl + (apiUrl.includes('?') ? '&' : '?') + params, { headers: { Accept: 'application/json' } })
        .then((response) => (response.ok ? response.json() : null))
        .then((body) => {
          if (!body || sending) return;
          if (body.avaliou) {
            storage.set(storageKey, '1');
            showAlreadyReviewed(body.status);
          } else {
            storage.remove(storageKey);
            showForm();
          }
        })
        .catch(() => {});
    })();

    function setError(message) { errorEl.textContent = message || ''; }

    function renderPhotos() {
      uploader.textContent = '';
      photos.forEach((photo, index) => {
        const slot = document.createElement('div');
        slot.className = 'rv-slot' + (photo.busy ? ' is-busy' : '');

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = 'Prévia da foto ' + (index + 1);
        img.width = 80;
        img.height = 80;

        const replace = document.createElement('button');
        replace.type = 'button';
        replace.className = 'rv-slot__replace';
        replace.setAttribute('aria-label', 'Trocar foto ' + (index + 1));
        replace.addEventListener('click', () => {
          if (sending) return;
          replaceIndex = index;
          fileInput.multiple = false;
          fileInput.click();
        });

        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'rv-slot__remove';
        remove.setAttribute('aria-label', 'Remover foto ' + (index + 1));
        remove.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">close</span>';
        remove.addEventListener('click', () => {
          if (sending) return;
          URL.revokeObjectURL(photos[index].url);
          photos.splice(index, 1);
          setError('');
          renderPhotos();
        });

        slot.append(img, replace, remove);
        uploader.appendChild(slot);
      });

      if (photos.length < MAX_PHOTOS) {
        const add = document.createElement('button');
        add.type = 'button';
        add.className = 'rv-add';
        add.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">add_a_photo</span>'
          + (photos.length ? '' : 'Adicionar');
        add.setAttribute('aria-label', 'Adicionar foto');
        add.addEventListener('click', () => {
          if (sending) return;
          replaceIndex = -1;
          fileInput.multiple = true;
          fileInput.click();
        });
        uploader.appendChild(add);
      }
    }

    function validateFile(file) {
      if (!isAllowed(file)) return 'Esse formato de imagem não é permitido.';
      if (file.size > maxBytes) return 'A imagem deve ter no máximo ' + form.dataset.maxMb + ' MB.';
      return '';
    }

    async function addFile(file, index) {
      const entry = { file, url: URL.createObjectURL(file), busy: true };
      if (index >= 0 && photos[index]) {
        URL.revokeObjectURL(photos[index].url);
        photos[index] = entry;
      } else {
        photos.push(entry);
      }
      renderPhotos();
      entry.file = await compress(file);
      entry.busy = false;
      if (photos.includes(entry)) renderPhotos();
    }

    fileInput.addEventListener('change', () => {
      const selected = Array.from(fileInput.files || []);
      fileInput.value = '';
      if (!selected.length) return;
      setError('');

      if (replaceIndex >= 0) {
        const message = validateFile(selected[0]);
        if (message) return setError(message);
        addFile(selected[0], replaceIndex);
        return;
      }

      const free = MAX_PHOTOS - photos.length;
      if (selected.length > free) setError('Você pode adicionar no máximo ' + MAX_PHOTOS + ' fotos.');
      selected.slice(0, free).forEach((file) => {
        const message = validateFile(file);
        if (message) return setError(message);
        addFile(file, -1);
      });
    });

    form.querySelectorAll('input[name="nota"]').forEach((input) => {
      input.addEventListener('change', () => {
        ratingText.textContent = RATING_TEXT[Number(input.value)] || '';
        setError('');
      });
    });

    comment.addEventListener('input', () => {
      counter.textContent = comment.value.length + '/' + COMMENT_MAX;
    });

    function validateForm() {
      const rating = Number((form.querySelector('input[name="nota"]:checked') || {}).value);
      if (!(rating >= 1 && rating <= 5)) return 'Escolha uma nota de 1 a 5 estrelas.';
      const text = comment.value.trim();
      if (text.length < COMMENT_MIN) return 'Conte um pouco mais: o comentário precisa ter pelo menos ' + COMMENT_MIN + ' caracteres.';
      if (text.length > COMMENT_MAX) return 'O comentário pode ter no máximo ' + COMMENT_MAX + ' caracteres.';
      if (photos.some((photo) => photo.busy)) return 'Aguarde as fotos terminarem de carregar.';
      return '';
    }

    // Para o cliente só aparecem erros do próprio formulário (nota, comentário,
    // fotos). Problemas do hub (produto ou cliente não sincronizado, token,
    // limite, servidor fora) viram uma mensagem genérica.
    function messageFor(status, body) {
      if (status === 400 && body && body.campo && body.mensagem) return String(body.mensagem);
      if (status === 413) return 'As fotos ficaram grandes demais. Remova alguma e tente novamente.';
      return 'Algo inesperado ocorreu. Recarregue a página e tente novamente em alguns minutos.';
    }

    function fakeSend() {
      return new Promise((resolve) => {
        let pct = 0;
        const timer = setInterval(() => {
          pct += 20;
          submitBtn.textContent = 'Enviando avaliação... ' + Math.min(pct, 99) + '%';
          if (pct >= 100) {
            clearInterval(timer);
            resolve({ status: 201, body: null });
          }
        }, 250);
      });
    }

    function send(data) {
      if (isDemo) return fakeSend();
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', apiUrl);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.upload.addEventListener('progress', (event) => {
          if (!event.lengthComputable) return;
          const pct = Math.min(99, Math.round((event.loaded / event.total) * 100));
          submitBtn.textContent = 'Enviando avaliação... ' + pct + '%';
        });
        xhr.addEventListener('load', () => resolve({ status: xhr.status, body: xhr.response }));
        xhr.addEventListener('error', () => resolve({ status: 0, body: null }));
        xhr.send(data);
      });
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (sending) return;
      const message = validateForm();
      if (message) return setError(message);
      setError('');

      const data = new FormData(form);
      data.set('comentario', comment.value.trim());
      photos.forEach((photo) => data.append('fotos', photo.file, photo.file.name));

      sending = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando avaliação...';

      const { status, body } = await send(data);

      sending = false;
      submitBtn.disabled = false;
      submitBtn.textContent = submitLabel;

      if (status >= 200 && status < 300) {
        if (!isDemo) storage.set(storageKey, '1');
        photos.forEach((photo) => URL.revokeObjectURL(photo.url));
        photos = [];
        showDone();
        return;
      }
      if (status === 409 && body && body.erro === 'avaliacao_existente') {
        storage.set(storageKey, '1');
        showAlreadyReviewed();
        return;
      }
      setError(messageFor(status, body));
    });

    renderPhotos();
  }

  // ── Lightbox ─────────────────────────────────────────────────────────────────
  function initLightbox(root) {
    const dialog = root.querySelector('[data-rv-lightbox]');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    const img = dialog.querySelector('[data-rv-lightbox-img]');
    const prev = dialog.querySelector('[data-rv-lightbox-prev]');
    const next = dialog.querySelector('[data-rv-lightbox-next]');
    const count = dialog.querySelector('[data-rv-lightbox-count]');
    let urls = [];
    let current = 0;
    let touchX = null;

    function show(index) {
      current = (index + urls.length) % urls.length;
      img.src = urls[current];
      img.alt = 'Foto ' + (current + 1) + ' de ' + urls.length + ' da avaliação';
      const many = urls.length > 1;
      prev.hidden = !many;
      next.hidden = !many;
      count.textContent = many ? (current + 1) + ' / ' + urls.length : '';
    }

    root.addEventListener('click', (event) => {
      const thumb = event.target.closest('[data-rv-photo]');
      if (!thumb) return;
      const gallery = thumb.closest('[data-rv-gallery]');
      try { urls = JSON.parse(gallery.dataset.rvGallery); } catch (e) { return; }
      if (!urls.length) return;
      show(Number(thumb.dataset.rvPhoto) || 0);
      dialog.showModal();
    });

    prev.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
    dialog.querySelector('[data-rv-lightbox-close]').addEventListener('click', () => dialog.close());
    // Clique fora da foto (no fundo) fecha.
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.classList.contains('rv-lightbox__inner')) dialog.close();
    });
    dialog.addEventListener('keydown', (event) => {
      if (urls.length < 2) return;
      if (event.key === 'ArrowLeft') show(current - 1);
      if (event.key === 'ArrowRight') show(current + 1);
    });
    dialog.addEventListener('touchstart', (event) => { touchX = event.touches[0].clientX; }, { passive: true });
    dialog.addEventListener('touchend', (event) => {
      if (touchX === null || urls.length < 2) return;
      const delta = event.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(delta) > 40) show(current + (delta < 0 ? 1 : -1));
    });
  }

  // ── Modal de envio (celular/tablet) ──────────────────────────────────────────
  // Abaixo de 1024px o <aside> vira um painel que sobe de baixo, aberto pelo
  // botão do topo. No desktop ele fica fixo na coluna ao lado da lista.
  function initSheet(root) {
    const sheet = root.querySelector('[data-rv-sheet]');
    const openBtn = root.querySelector('[data-rv-open]');
    const backdrop = root.querySelector('[data-rv-backdrop]');
    if (!sheet || !openBtn) return;
    const mobile = window.matchMedia('(max-width: 1023px)');

    function open() {
      // No desktop o formulário já está na tela, na coluna ao lado da lista.
      if (!mobile.matches) {
        sheet.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      sheet.classList.add('is-open');
      backdrop.classList.add('is-open');
      sheet.setAttribute('role', 'dialog');
      sheet.setAttribute('aria-modal', 'true');
      openBtn.setAttribute('aria-expanded', 'true');
      document.documentElement.style.overflow = 'hidden';
      const first = sheet.querySelector('input[name="nota"]:checked, .rv-rating-input label, a, textarea');
      setTimeout(() => (first ? first.focus({ preventScroll: true }) : null), 250);
    }

    function close() {
      if (!sheet.classList.contains('is-open')) return;
      sheet.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      sheet.removeAttribute('role');
      sheet.removeAttribute('aria-modal');
      openBtn.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      openBtn.focus({ preventScroll: true });
    }

    openBtn.addEventListener('click', open);
    backdrop.addEventListener('click', close);
    root.querySelectorAll('[data-rv-close]').forEach((btn) => btn.addEventListener('click', close));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
    // Girar o celular para paisagem larga não pode deixar a página travada.
    mobile.addEventListener('change', (event) => { if (!event.matches) close(); });

    // Volta do login (#avaliar): abre o formulário direto.
    if (window.location.hash === '#avaliar') {
      root.scrollIntoView({ block: 'start' });
      open();
    }
  }

  // ── Ver mais ─────────────────────────────────────────────────────────────────
  function initMore(root) {
    const button = root.querySelector('[data-rv-more]');
    if (!button) return;
    const step = Number(button.dataset.rvStep) || 6;
    button.addEventListener('click', () => {
      const hidden = Array.from(root.querySelectorAll('[data-rv-item][hidden]'));
      hidden.slice(0, step).forEach((item) => { item.hidden = false; });
      if (hidden.length <= step) button.parentElement.remove();
    });
  }

  function init(scope) {
    (scope || document).querySelectorAll('[data-rv-root]').forEach((root) => {
      if (root.dataset.rvBound === 'true') return;
      root.dataset.rvBound = 'true';
      const form = root.querySelector('[data-rv-form]');
      if (form) initForm(form);
      initLightbox(root);
      initMore(root);
      initSheet(root);
    });
  }

  init();
  document.addEventListener('shopify:section:load', (event) => init(event.target));
})();
