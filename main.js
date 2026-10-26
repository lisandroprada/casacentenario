const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Revelado al scroll: cada elemento entra una sola vez; las fotos entran escalonadas por fila.
const revs = [...document.querySelectorAll('.rev')];
revs.forEach((el) => {
  if (el.classList.contains('vista')) {
    const i = revs.filter((x) => x.classList.contains('vista')).indexOf(el);
    el.style.setProperty('--d', `${(i % 3) * 90}ms`);
  }
});
if ('IntersectionObserver' in window && !reducir) {
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revs.forEach((el) => io.observe(el));
} else {
  revs.forEach((el) => el.classList.add('in'));
}

// Cota de distancia: se dibuja al entrar en pantalla.
const distancia = document.querySelector('.distancia');
if (distancia) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entradas) => {
      if (entradas.some((e) => e.isIntersecting)) { distancia.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(distancia);
  } else {
    distancia.classList.add('in');
  }
}

// Esquema interactivo: tocar o pasar por una referencia resalta su zona.
const esquema = document.querySelector('.esquema');
if (esquema) {
  const activar = (z) => (z ? esquema.setAttribute('data-activa', z) : esquema.removeAttribute('data-activa'));
  esquema.querySelectorAll('.ref').forEach((ref) => {
    const z = ref.dataset.z;
    ref.addEventListener('pointerenter', () => activar(z));
    ref.addEventListener('pointerleave', () => activar(null));
    ref.addEventListener('focus', () => activar(z));
    ref.addEventListener('blur', () => activar(null));
    ref.addEventListener('click', () => activar(esquema.getAttribute('data-activa') === z ? null : z));
    ref.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activar(esquema.getAttribute('data-activa') === z ? null : z); } });
  });
}

// Visor de fotos.
const visor = document.getElementById('visor');
const fotos = [...document.querySelectorAll('.vista img')];
if (visor && visor.showModal && fotos.length) {
  const img = visor.querySelector('img');
  const cap = visor.querySelector('figcaption');
  let actual = 0;
  const mostrar = (i) => {
    actual = (i + fotos.length) % fotos.length;
    const f = fotos[actual];
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
    img.src = f.currentSrc || f.src;
    img.alt = f.alt;
    cap.textContent = f.closest('figure').querySelector('figcaption').textContent;
  };
  fotos.forEach((f, i) => {
    f.tabIndex = 0;
    f.setAttribute('role', 'button');
    f.setAttribute('aria-label', `Ampliar: ${f.closest('figure').querySelector('figcaption').textContent}`);
    const abrir = () => { mostrar(i); visor.showModal(); };
    f.addEventListener('click', abrir);
    f.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });
  });
  visor.addEventListener('click', (e) => {
    const accion = e.target.dataset && e.target.dataset.visor;
    if (accion === 'cerrar' || e.target === visor) visor.close();
    if (accion === 'prev') mostrar(actual - 1);
    if (accion === 'next') mostrar(actual + 1);
  });
  visor.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') mostrar(actual - 1);
    if (e.key === 'ArrowRight') mostrar(actual + 1);
  });
  let x0 = null;
  visor.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  visor.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) mostrar(actual + (dx < 0 ? 1 : -1));
    x0 = null;
  });
}

// Entrada: dura ~4 s, se salta con un toque o una tecla y se muestra en cada carga.
(() => {
  const html = document.documentElement;
  const intro = document.querySelector('.apertura');
  if (!intro || !html.classList.contains('intro-on')) return;
  let hecho = false;
  const terminar = () => {
    if (hecho) return; hecho = true;
    html.classList.add('go');
    setTimeout(() => { intro.remove(); html.classList.remove('intro-on'); }, 1100);
  };
  const saltar = () => {
    if (hecho) return;
    intro.style.animationDuration = '.5s'; intro.style.animationDelay = '0s';
    terminar();
  };
  setTimeout(terminar, 3200);
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => addEventListener(ev, saltar, { once: true, passive: true }));
})();
