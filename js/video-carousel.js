(function () {
  const slides = [
    `<img class="video_block-youtube" src="img/video-page-video-lock.png" alt="Video Lock Door"><h2 class="video_subtitle">Door Lock Instalation</h2>
      <p class="video_text-about">We install door locks
          of my comlexity.</p>`,
    `<img class="video_block-youtube" src="img/video-page-video-altana.png" alt="Video Altana Project"><h2 class="video_subtitle">Video Altana Project</h2>
      <p class="video_text-about">Installation of doors in a master bedroom of a specific shape.</p>`,
    `<img class="video_block-youtube" src="img/video-page-video-budget-door.png" alt="video lock"><h2 class="video_subtitle">Budget Door Instalation</h2>
      <p class="video_text-about">We fulfill any order for a full due.</p>`,
  ];

  let currentSlide = 0;

  function renderCarousel() {
    const slideContainer = document.querySelector('.video_video-block');
    slideContainer.innerHTML = slides[currentSlide];
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderCarousel();
  }

  setInterval(nextSlide, 5000);
  renderCarousel();

  window.addEventListener('resize', renderCarousel);
})();
