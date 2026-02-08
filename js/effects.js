document.addEventListener('DOMContentLoaded', () => {
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

  const noButton = document.querySelector('[data-no-button]');
  if (noButton) {
    noButton.addEventListener('mouseover', () => {
      const x = Math.random() * 60 - 30;
      const y = Math.random() * 60 - 30;
      noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

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