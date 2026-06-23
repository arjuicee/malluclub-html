(function () {
  const toggle = document.getElementById('nav-toggle');
  const toggleButton = document.querySelector('label[for="nav-toggle"].nav-toggle-button');
  const nav = document.getElementById('primary-nav');

  if (toggle && toggleButton && nav) {
    const setExpanded = (open) => {
      const isOpen = open ?? toggle.checked;
      toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleButton.querySelector('.visually-hidden')?.textContent = isOpen ? 'Close menu' : 'Open menu';
      document.body.classList.toggle('nav-open', isOpen);
    };

    setExpanded(false);
    toggle.addEventListener('change', () => setExpanded());

    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.checked = false;
        setExpanded(false);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.checked) {
        toggle.checked = false;
        setExpanded(false);
      }
    });

    const sectionIds = ['about', 'highlights', 'faq', 'testimonials'];
    const links = sectionIds
      .map((id) => nav.querySelector(`a[href="#${id}"]`))
      .filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const clearActive = () => links.forEach((l) => l.classList.remove('is-active'));
    const setActiveById = (id) => {
      clearActive();
      const link = nav.querySelector(`a[href="#${id}"]`);
      if (link) link.classList.add('is-active');
    };

    if ('IntersectionObserver' in window && sections.length) {
      const io = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id) {
            setActiveById(visible.target.id);
          } else if (window.scrollY < 80) {
            clearActive();
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: [0.15, 0.35] }
      );
      sections.forEach((s) => io.observe(s));
    }
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
