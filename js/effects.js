document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------
     Floating hearts
  ------------------------------ */
  const heartsContainer = document.querySelector('.floating-hearts');
  if (heartsContainer) {
    for (let i = 0; i < 16; i += 1) {
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 6}s`;
      heart.style.animationDuration = `${6 + Math.random() * 6}s`;
      heartsContainer.appendChild(heart);
    }
  }

  /* ------------------------------
     Timeline reveal
  ------------------------------ */
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    timelineItems.forEach((item) => observer.observe(item));
  }

  /* ------------------------------
     Typewriter effect
  ------------------------------ */
  const typewriter = document.querySelector('[data-typewriter]');
  if (typewriter) {
    const fullText = typewriter.textContent.trim();
    typewriter.textContent = '';
    let index = 0;
    const speed = 30;

    const timer = setInterval(() => {
      typewriter.textContent += fullText.charAt(index);
      index += 1;
      if (index >= fullText.length) {
        clearInterval(timer);
        typewriter.classList.remove('typewriter');
      }
    }, speed);
  }

  /* ------------------------------
     Image modal
  ------------------------------ */
  const modal = document.querySelector('[data-modal]');
  const modalImage = modal ? modal.querySelector('img') : null;
  const galleryItems = document.querySelectorAll('[data-gallery]');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (!modal || !modalImage) return;
      modalImage.src = item.dataset.full;
      modal.classList.add('open');
    });
  });

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modal.classList.remove('open');
      }
    });
  }

  /* ------------------------------
     😌 NO BUTTON (POLITE DODGE)
  ------------------------------ */
  const noButton = document.querySelector('[data-no-button]');
  const yesButton = document.querySelector('[data-yes-button]');

  if (noButton) {
    noButton.style.transition = 'transform 0.2s ease';
    noButton.style.willChange = 'transform';

    const moveSafely = () => {
      const noRect = noButton.getBoundingClientRect();
      const yesRect = yesButton ? yesButton.getBoundingClientRect() : null;

      let x, y;
      let attempts = 0;

      do {
        x = Math.random() * 140 - 70;
        y = Math.random() * 100 - 50;
        attempts += 1;

        if (!yesRect) break;

        const futureRect = {
          left: noRect.left + x,
          right: noRect.right + x,
          top: noRect.top + y,
          bottom: noRect.bottom + y
        };

        const overlaps =
          futureRect.right > yesRect.left &&
          futureRect.left < yesRect.right &&
          futureRect.bottom > yesRect.top &&
          futureRect.top < yesRect.bottom;

        if (!overlaps) break;
      } while (attempts < 10);

      noButton.style.transform = `translate(${x}px, ${y}px)`;
    };

    // Move when hovered
    noButton.addEventListener('mouseenter', moveSafely);

    // Move when clicked
    noButton.addEventListener('click', (e) => {
      e.preventDefault();
      moveSafely();
    });
  }

  /* ------------------------------
     Confetti celebration
  ------------------------------ */
  const confettiContainer = document.querySelector('[data-confetti]');
  if (confettiContainer) {
    const colors = ['#ff8fab', '#ffd6e8', '#ffb3c6', '#fff0f5', '#ff5d8f'];

    for (let i = 0; i < 40; i += 1) {
      const piece = document.createElement('span');
      piece.classList.add('confetti-piece');
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 3}s`;
      piece.style.animationDuration = `${3 + Math.random() * 3}s`;
      confettiContainer.appendChild(piece);
    }
  }
});
