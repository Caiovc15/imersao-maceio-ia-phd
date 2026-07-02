document.addEventListener('DOMContentLoaded', () => {
  // Add js-enabled class to body for scroll reveals
  document.body.classList.add('js-enabled');

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => observer.observe(el));

  // FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const answer = otherItem.querySelector('.faq-answer');
        if(answer) answer.style.height = '0px';
      });

      // Toggle current FAQ
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        const inner = item.querySelector('.faq-answer-inner');
        if(answer && inner) {
          answer.style.height = inner.getBoundingClientRect().height + 'px';
        }
      }
    });
  });

  // Custom Video Controls Logic
  const videoWrappers = document.querySelectorAll('.video-wrapper');
  
  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const playPauseBtn = wrapper.querySelector('#play-pause-btn, .play-pause-btn');
    const muteUnmuteBtn = wrapper.querySelector('#mute-unmute-btn, .mute-unmute-btn');

    if (video && playPauseBtn && muteUnmuteBtn) {
      // Play/Pause
      playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
          // Pause all other videos
          videoWrappers.forEach(otherWrapper => {
            const otherVideo = otherWrapper.querySelector('video');
            const otherBtn = otherWrapper.querySelector('#play-pause-btn, .play-pause-btn');
            if (otherVideo && otherVideo !== video && !otherVideo.paused) {
              otherVideo.pause();
              if (otherBtn) {
                otherBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>';
              }
            }
          });

          video.play();
          // Pause icon
          playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
        } else {
          video.pause();
          // Play icon
          playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>';
        }
      });

      // Mute/Unmute
      muteUnmuteBtn.addEventListener('click', () => {
        if (video.muted) {
          video.muted = false;
          // Unmuted icon
          muteUnmuteBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
        } else {
          video.muted = true;
          // Muted icon
          muteUnmuteBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
        }
      });
    }
  });

  // --- Gallery Randomization & Modal Logic ---
  
  // VAMOS COLOCAR TODAS AS FOTOS AQUI!
  // Você pode adicionar novas fotos copiando e colando uma linha e trocando o nome da imagem.
  const allPhotos = [
    'assets/IMG_9278.JPG.jpeg',
    'assets/IMG_9279.JPG.jpeg',
    'assets/IMG_9280.JPG.jpeg',
    'assets/IMG_9281.JPG.jpeg',
    'assets/IMG_9282.JPG.jpeg',
    'assets/IMG_9283.JPG.jpeg',
    'assets/IMG_9284.JPG.jpeg',
    'assets/IMG_9285.JPG.jpeg',
    'assets/IMG_9286.JPG.jpeg',
    'assets/IMG_9287.JPG.jpeg',
    'assets/IMG_9288.JPG.jpeg',
    'assets/IMG_9289.JPG.jpeg',
    'assets/IMG_9290.JPG.jpeg',
    'assets/IMG_9291.JPG.jpeg',
    'assets/IMG_9292.JPG.jpeg',
    'assets/IMG_9293.JPG.jpeg',
    'assets/IMG_9294.JPG.jpeg',
    'assets/IMG_9295.JPG.jpeg',
    'assets/IMG_9296.JPG.jpeg',
    'assets/IMG_9297.JPG.jpeg',
    'assets/IMG_9299.JPG.jpeg',
    'assets/IMG_9300.JPG.jpeg',
    'assets/IMG_9301.JPG.jpeg',
    'assets/IMG_9302.JPG.jpeg',
    'assets/IMG_9303.JPG.jpeg',
    'assets/IMG_9304.JPG.jpeg',
    'assets/IMG_9305.JPG.jpeg',
    'assets/IMG_9306.JPG.jpeg',
    'assets/IMG_9307.JPG.jpeg',
    'assets/IMG_9308.JPG.jpeg',
    'assets/IMG_9309.JPG.jpeg',
    'assets/IMG_9310.JPG.jpeg',
    'assets/IMG_9311.JPG.jpeg',
    'assets/IMG_9312.JPG.jpeg',
    'assets/IMG_9313.JPG.jpeg',
    'assets/IMG_9314.JPG (1).jpeg',
    'assets/IMG_9316.JPG.jpeg',
    'assets/IMG_9318.JPG.jpeg',
    'assets/IMG_9319.JPG.jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.45 (1).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.45 (2).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.45 (3).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.45 (4).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.45 (5).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.45.jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (1).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (2).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (3).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (4).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (5).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (6).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46 (7).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.46.jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47 (1).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47 (2).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47 (3).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47 (4).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47 (5).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47 (6).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.47.jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.48 (1).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.48 (2).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.48 (3).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.48 (4).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.48 (5).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.48.jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49 (1).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49 (2).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49 (3).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49 (4).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49 (5).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49 (6).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.49.jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.50 (1).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.50 (2).jpeg',
    'assets/WhatsApp Image 2026-06-30 at 17.27.50.jpeg',
    'assets/galeria-1.jpg',
    'assets/galeria-2.jpg',
    'assets/galeria-3.jpg',
    'assets/galeria-4.jpg'
  ];

  // Shuffle array para embaralhar as fotos
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const dynamicImages = document.querySelectorAll('.dynamic-gallery-img');
  
  if (dynamicImages.length > 0 && allPhotos.length > 0) {
    // Sorteia fotos aleatórias para exibir no grid principal
    const shuffledPhotos = shuffleArray(allPhotos);
    dynamicImages.forEach((imgEl, index) => {
      // Se houver fotos suficientes, atribui as sorteadas; senão, repete
      const photoSrc = shuffledPhotos[index % shuffledPhotos.length];
      imgEl.src = photoSrc;
    });
  }

  // Modal Logic
  const btnMorePhotos = document.getElementById('btn-more-photos');
  const photosModal = document.getElementById('photos-modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalGrid = document.getElementById('modal-gallery-grid');

  if (btnMorePhotos && photosModal) {
    // Injeta todas as fotos no grid do modal
    allPhotos.forEach(photoSrc => {
      const img = document.createElement('img');
      img.src = photoSrc;
      img.alt = 'Foto da Galeria Completa';
      img.loading = 'lazy';
      modalGrid.appendChild(img);
    });

    const openModal = () => {
      photosModal.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Evita scroll do site atrás do modal
    };

    const closeModal = () => {
      photosModal.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    btnMorePhotos.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Fechar ao apertar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && photosModal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // --- Logo Ticker Tooltip ---
  const tickerLogos = document.querySelectorAll('.ticker-logo');
  if (tickerLogos.length > 0) {
    const tooltip = document.createElement('div');
    tooltip.className = 'global-ticker-tooltip';
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.innerHTML = `
      <div class="tooltip-segment"></div>
      <div class="tooltip-desc"></div>
    `;
    document.body.appendChild(tooltip);

    const segmentEl = tooltip.querySelector('.tooltip-segment');
    const descEl = tooltip.querySelector('.tooltip-desc');
    let activeLogo = null;

    const showTooltip = (el) => {
      const segment = el.getAttribute('data-segment');
      const desc = el.getAttribute('data-desc');
      if (!segment || !desc) return;

      segmentEl.textContent = segment;
      descEl.textContent = desc;

      const rect = el.getBoundingClientRect();
      
      tooltip.classList.add('visible');
      tooltip.setAttribute('aria-hidden', 'false');
      
      // Calculate position
      const tooltipRect = tooltip.getBoundingClientRect();
      let top = rect.bottom + 12 + window.scrollY;
      let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

      // Edge detection
      if (left < 10) left = 10;
      if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
      }

      // If it goes below the screen, position above
      if (top + tooltipRect.height - window.scrollY > window.innerHeight - 10) {
        top = rect.top + window.scrollY - tooltipRect.height - 12;
      }

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      activeLogo = el;
      el.classList.add('active');
    };

    const hideTooltip = () => {
      tooltip.classList.remove('visible');
      tooltip.setAttribute('aria-hidden', 'true');
      if (activeLogo) {
        activeLogo.classList.remove('active');
        activeLogo = null;
      }
    };

    tickerLogos.forEach(logo => {
      logo.addEventListener('mouseenter', () => showTooltip(logo));
      logo.addEventListener('mouseleave', hideTooltip);
      logo.addEventListener('focus', () => showTooltip(logo));
      logo.addEventListener('blur', hideTooltip);
      
      // Touch support
      logo.addEventListener('click', (e) => {
        if (activeLogo === logo) {
          hideTooltip();
        } else {
          showTooltip(logo);
        }
        e.stopPropagation();
      });
    });

    document.addEventListener('click', () => {
      hideTooltip();
    });
  }



  // --- Sticky CTA & scroll indicator with rAF ---
  const stickyCta = document.getElementById('sticky-cta');
  const heroSection = document.querySelector('.hero-section');
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateScroll = () => {
    if (stickyCta && heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom + window.scrollY;
      if (window.scrollY > heroBottom) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });
  // Initial check
  updateScroll();


  // --- Stats Count-Up ---
  const runCountUp = (el) => {
    // get target from data-target attribute, or check if innerText has a span with data-target
    let targetSpan = el.querySelector('span[data-target]');
    let targetEl = targetSpan ? targetSpan : el;
    const target = parseInt(targetEl.getAttribute('data-target') || '0', 10);
    const duration = 1200; // 1.2s as requested
    const stepTime = Math.abs(Math.floor(duration / target)) || 10;
    
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      targetEl.textContent = current;
      if (current >= target) {
        targetEl.textContent = target;
        clearInterval(timer);
      }
    }, stepTime);
  };

  const statsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stat-number');
        numbers.forEach(num => runCountUp(num));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const statsContainer = document.querySelector('.stats-container');
  if(statsContainer) {
    statsObserver.observe(statsContainer);
  }

  // --- Schedule SVG Reveal ---
  const scheduleObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const scheduleGrid = document.querySelector('.schedule-grid');
  if(scheduleGrid) {
    scheduleObserver.observe(scheduleGrid);
  }



  // --- Testimonials Carousel Logic ---
  const carouselContainer = document.getElementById('test-carousel');
  if (carouselContainer) {
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    const prevBtn = carouselContainer.querySelector('.carousel-prev');
    const nextBtn = carouselContainer.querySelector('.carousel-next');
    const dots = carouselContainer.querySelectorAll('.carousel-indicators .dot');
    
    let currentIndex = 0;
    let isAnimating = false;
    
    const pauseAllVideos = () => {
      const allVideos = carouselContainer.querySelectorAll('video');
      const allPlayBtns = carouselContainer.querySelectorAll('.play-pause-btn');
      allVideos.forEach((vid, i) => {
        vid.pause();
        const btn = allPlayBtns[i];
        if (btn) {
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>';
        }
      });
    };

    const updateCarousel = (newIndex, direction) => {
      if (isAnimating || newIndex === currentIndex) return;
      isAnimating = true;
      
      pauseAllVideos();

      // Remove classes from current
      const currentSlide = slides[currentIndex];
      const newSlide = slides[newIndex];
      
      // Setup transition classes
      currentSlide.classList.remove('active');
      if (direction === 'left') {
        currentSlide.classList.add('sliding-left');
      } else {
        currentSlide.classList.remove('sliding-left');
      }
      
      newSlide.classList.remove('sliding-left');
      
      // Update dots
      dots[currentIndex].classList.remove('active');
      dots[newIndex].classList.add('active');
      
      // Trigger reflow
      void newSlide.offsetWidth;
      
      newSlide.classList.add('active');
      
      currentIndex = newIndex;
      
      setTimeout(() => {
        currentSlide.classList.remove('sliding-left');
        isAnimating = false;
      }, 400); // Matches CSS transition duration
    };

    const goNext = () => {
      const newIndex = (currentIndex + 1) % slides.length;
      updateCarousel(newIndex, 'right');
    };

    const goPrev = () => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(newIndex, 'left');
    };

    // Button Listeners
    if (nextBtn) nextBtn.addEventListener('click', goNext);
    if (prevBtn) prevBtn.addEventListener('click', goPrev);

    // Dot Listeners
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (index > currentIndex) {
          updateCarousel(index, 'right');
        } else if (index < currentIndex) {
          updateCarousel(index, 'left');
        }
      });
    });

    // Keyboard Navigation
    carouselContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        goNext();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
        e.preventDefault();
      }
    });

    // Swipe (Touch) Support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselContainer.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum distance to trigger swipe
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swiped Left -> Go Next
        goNext();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        // Swiped Right -> Go Prev
        goPrev();
      }
    };
  }

});
