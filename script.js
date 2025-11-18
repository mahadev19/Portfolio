// Small helper JS: mobile nav toggle + dynamic year + smooth scroll

document.addEventListener('DOMContentLoaded', function() {
  // year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // mobile nav toggle
  const nav = document.getElementById('site-nav');
  const btn = document.getElementById('nav-toggle');
  btn && btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav
        if (nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });
});
