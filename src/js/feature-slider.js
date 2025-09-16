const selector = '[data-flickity-on-small]';

const smallMQ = window.matchMedia('(max-width: 639.98px)');
const reduceMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

const instances = new WeakMap();

function enableCarousel(el) {
  if (instances.has(el)) return;

  const opts = {
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    dragThreshold: 3,
    groupCells: false,
    wrapAround: false,
    imagesLoaded: true,
    selectedAttraction: reduceMotionMQ.matches ? 0.02 : 0.08,
    friction: reduceMotionMQ.matches ? 0.2 : 0.28
  };

  const flkty = new Flickity(el, opts);
  instances.set(el, flkty);
}

function disableCarousel(el) {
  const flkty = instances.get(el);
  if (!flkty) return;

  flkty.destroy();
  instances.delete(el);


  el.querySelectorAll('.about__item').forEach((cell) => {
    cell.style.removeProperty('position');
    cell.style.removeProperty('left');
    cell.style.removeProperty('transform');
  });

  // And on the gallery
  el.style.removeProperty('height');
}

function applyMode() {
  const isSmall = smallMQ.matches;
  document.querySelectorAll(selector).forEach((el) => {
    if (isSmall) {
      enableCarousel(el);
    } else {
      disableCarousel(el);
    }
  });
}

applyMode();

// respond to viewport changes
smallMQ.addEventListener?.('change', applyMode);
// Safari fallback
smallMQ.addListener?.(applyMode);

// respond to motion preference changes (tweak physics if toggled)
reduceMotionMQ.addEventListener?.('change', () => {
  // Re-init to apply new friction/attraction
  document.querySelectorAll(selector).forEach((el) => {
    disableCarousel(el);
    if (smallMQ.matches) enableCarousel(el);
  });
});
