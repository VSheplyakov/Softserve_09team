(function () {
  const modal = document.querySelector('.modal-companies-logo');

  const btn = document.querySelector('.carousel-partners');

  const span = document.querySelector('.close-companies-logo');

  btn.onclick = function () {
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  const slides = [
    '<div class="partners-slide-full"><img src="img/partners-img/aecom.svg" alt="AECOM"></div>',
    '<div class="partners-slide-full"><img src="img/partners-img/fedex.svg" alt="Fedex"></div>',
    '<div class="partners-slide-full"><img src="img/partners-img/giffels.svg" alt="Giffels"></div>',
    '<div class="partners-slide-full"><img src="img/partners-img/interior.svg" alt="Interior"></div>',
    '<div class="partners-slide-full"><img src="img/partners-img/lowes.svg" alt="Lowes"></div>',
  ];

  let currentSlide = 0;

  function renderCarousel() {
    const slideContainer = document.querySelector('.modal-body-companies-logo');
    slideContainer.innerHTML = slides[currentSlide];
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderCarousel();
  }

  function prevSlide() {
    currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
    renderCarousel();
  }

  const btnForward = document.querySelector('.btn-forvard-companies-slide');
  btnForward.addEventListener('click', nextSlide);

  const btnBack = document.querySelector('.btn-back-companies-slide');
  btnBack.addEventListener('click', prevSlide);

  renderCarousel();

  window.addEventListener('resize', renderCarousel);
})();
