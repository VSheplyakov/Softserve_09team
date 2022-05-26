(function() {
    const slides = [
       '<div class="slides"><img src="img/partners-img/aecom.svg" alt="AECOM"></div>',
       '<div class="slides"><img scr="img/partners-img/fedex.svg" alt="Fedex"></div>',
       '<div class="slides"><img scr="img/partners-img/giffels.svg" alt="Giffels"></div>',
       '<div class="slides"><img scr="img/partners-img/interior.svg" alt="Interior"></div>',
       '<div class="slides"><img scr="img/partners-img/lowes.svg" alt="Lowes"></div>' 
    ];

    let currentSlide = 0;
    
    function renderCarousel() {
        const carouselContainer = document.querySelector(.'carousel-partners');
        carouselContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    setInterval(nextSlide, 3000);

})();