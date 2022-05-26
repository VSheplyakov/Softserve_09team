(function () {
  const slides = [
    '<div class="partners-slide"><img src="img/partners-img/aecom.svg" alt="AECOM"></div>',
    '<div class="partners-slide"><img src="img/partners-img/fedex.svg" alt="Fedex"></div>',
    '<div class="partners-slide"><img src="img/partners-img/giffels.svg" alt="Giffels"></div>',
    '<div class="partners-slide"><img src="img/partners-img/interior.svg" alt="Interior"></div>',
    '<div class="partners-slide"><img src="img/partners-img/lowes.svg" alt="Lowes"></div>',
  ];

  let currentSlide = 0;

  function renderCarousel() {
    const slideContainer = document.querySelector('.carousel-partners');
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth >= 600) {
      const secondSlide =
        currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      slideContainer.innerHTML += slides[secondSlide];
      if (window.innerWidth >= 900) {
        const thirdSlide =
          secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
        slideContainer.innerHTML += slides[thirdSlide];
        if (window.innerWidth >= 1200) {
          const fourthSlide =
            thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
          slideContainer.innerHTML += slides[fourthSlide];
          if (window.innerWidth >= 1600) {
            const fifthSlide =
              fourthSlide + 1 >= slides.length ? 0 : fourthSlide + 1;
            slideContainer.innerHTML += slides[fifthSlide];
          }
        }
      }
    }
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderCarousel();
  }

  setInterval(nextSlide, 1500);
  renderCarousel(0);

  window.addEventListener('resize', renderCarousel);
})();
