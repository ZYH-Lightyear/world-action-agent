document.getElementById('copy-bibtex').addEventListener('click', async () => {
  const text = document.getElementById('bibtex').textContent;
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Citation copied.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});

// Four videos per page; hidden clips stop playing immediately.
(() => {
  const gallery = document.getElementById('demo-gallery');
  if (!gallery) return;
  const cards = Array.from(gallery.querySelectorAll('.demo-card'));
  const pageButtons = Array.from(document.querySelectorAll('[data-demo-page]'));
  const previous = document.getElementById('demo-previous');
  const next = document.getElementById('demo-next');
  const status = document.getElementById('demo-page-status');
  const pageSize = 4;
  const pageCount = Math.ceil(cards.length / pageSize);
  let currentPage = 0;
  function showPage(requestedPage) {
    const targetPage = Math.max(0, Math.min(pageCount - 1, requestedPage));
    if (targetPage !== currentPage) {
      cards.forEach(card => card.querySelector('video').pause());
    }
    currentPage = targetPage;
    cards.forEach((card, index) => {
      card.hidden = Math.floor(index / pageSize) !== currentPage;
    });
    pageButtons.forEach(button => {
      if (Number(button.dataset.demoPage) === currentPage) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    previous.disabled = currentPage === 0;
    next.disabled = currentPage === pageCount - 1;
    status.textContent = `${currentPage * pageSize + 1}–${Math.min((currentPage + 1) * pageSize, cards.length)} of ${cards.length} tasks`;
  }
  pageButtons.forEach(button => button.addEventListener('click', () => showPage(Number(button.dataset.demoPage))));
  previous.addEventListener('click', () => showPage(currentPage - 1));
  next.addEventListener('click', () => showPage(currentPage + 1));
  showPage(0);
})();
