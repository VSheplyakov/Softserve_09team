(function(){
    const slides = [
        '<div class="slides"><img src="img/picture-example1.png" alt="Brown door"</div>',
        '<div class="slides"><img src="img/picture-example2.png" alt="White double door"</div>',
        '<div class="slides"><img src="img/picture-example3.png" alt="White door"</div>',
    ]

    let currentSlide = 0;

    function renderCarousel() {
        const carouselContainer = document.querySelector('.gallery-carousel');
        carouselContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 3000);
    
})();