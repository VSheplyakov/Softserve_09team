(function(){
    const slides = [
        '<div class="slides"><a href=""><img src="img/picture-example1.png" alt="Brown door"></a></div>',
        '<div class="slides"><a href=""><img src="img/picture-example2.png" alt="White double door"></a></div>',
        '<div class="slides"><a href=""><img src="img/picture-example3.png" alt="White door"></a></div>',
    ];

    let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.gallery-carousel .slide');
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

    setInterval(nextSlide, 3000);
    
    renderCarousel();

    const btnForward = document.querySelector('.gallery-carousel .forward');
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector('.gallery-carousel .back');
    btnBack.addEventListener('click', prevSlide);

})();