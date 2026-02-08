document.addEventListener('DOMContentLoaded', () => {
  // Initial fade-in
  document.body.classList.add('fade-in');

  // Handle page transitions
  const transitionLinks = document.querySelectorAll('.js-transition');

  transitionLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.getAttribute('href');
      const openInNewTab = link.getAttribute('target') === '_blank';

      // Ignore invalid or anchor links
      if (!target || target.startsWith('#')) {
        return;
      }

      // ✅ Allow browser default behavior for new tab
      if (openInNewTab) {
        return;
      }

      // Otherwise, handle smooth same-tab transition
      event.preventDefault();

      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });

  // Audio toggle logic
  const audioToggle = document.querySelector('[data-audio-toggle]');
  const audio = document.querySelector('audio[data-audio]');

  if (audioToggle && audio) {
    audioToggle.addEventListener('change', () => {
      if (audioToggle.checked) {
        audio.play().catch(() => {
          // Autoplay restrictions safety
        });
      } else {
        audio.pause();
      }
    });
  }
});
