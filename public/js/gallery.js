  const gallery = document.getElementById('gallery-scroll');
  let isCloning = false;

  function duplicateItems() {
    const items = Array.from(gallery.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      gallery.appendChild(clone);
    });
  }

  function resetScrollIfNeeded() {
    const totalWidth = gallery.scrollWidth;
    const visibleWidth = gallery.offsetWidth;
    const scrollLeft = gallery.scrollLeft;

    if (scrollLeft >= totalWidth - visibleWidth * 2) {
      gallery.scrollLeft = gallery.scrollLeft - totalWidth / 2;
    }
  }

  function highlightCenterItem() {
    const items = Array.from(gallery.children);
    const galleryBox = gallery.getBoundingClientRect();
    const center = galleryBox.left + galleryBox.width / 2;

    items.forEach(item => {
      const itemBox = item.getBoundingClientRect();
      const itemCenter = itemBox.left + itemBox.width / 2;
      const isCentered = Math.abs(center - itemCenter) < itemBox.width / 2;
      item.style.transform = isCentered ? 'scale(1.1)' : 'scale(1)';
    });
  }

  for (let i = 0; i < 5; i++) {
    duplicateItems();
  }

  gallery.addEventListener('scroll', () => {
    resetScrollIfNeeded();
    highlightCenterItem();
  });

  setTimeout(() => {
    gallery.scrollLeft = gallery.scrollWidth / 2;
    highlightCenterItem();
  }, 100);