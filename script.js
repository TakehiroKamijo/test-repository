// Simple UI: mobile nav toggle, form validation and basic Formspree submit handling
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', function () {
    siteNav.classList.toggle('open');
    this.setAttribute('aria-expanded', siteNav.classList.contains('open'));
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (siteNav.classList.contains('open')) siteNav.classList.remove('open');
      }
    });
  });

  // Form handling (optional: Formspree or server)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = '送信中…';

      // Basic client-side validation
      const formData = new FormData(form);
      if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        status.textContent = '全ての必須項目を入力してください。';
        return;
      }

      try {
        // Submit to the form action (Formspree endpoint or your backend)
        const resp = await fetch(form.action, {
          method: form.method,
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        if (resp.ok) {
          status.textContent = '送信が完了しました。ありがとうございます。';
          form.reset();
        } else {
          const data = await resp.json();
          status.textContent = data?.error || '送信中にエラーが発生しました。';
        }
      } catch (err) {
        status.textContent = 'ネットワークエラーが発生しました。時間をおいて再試行してください。';
      }
    });
  }
});