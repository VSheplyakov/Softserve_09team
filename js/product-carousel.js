(function () {
    const slides = [
        '<div class="slide_doors"><div class="pictr1"><img src="img/door-store-1.jpeg" alt="Luxury Door"></div><p class="picture-info" id="text-info-conteiner">Luxury Door</p><h2 class="Price-door"> 25$ </h2><input class="button-store" type="button" value="Add to Card"></div>',
        '<div class="slide_doors"><div class="pictr2"><img src="img/Huge-door-2.jpeg" alt="Hygge Door"></div><p class="picture-info" id="text-info-conteiner">Hygge Door</p><h2 class="Price-door"> 45$ </h2><input class="button-store" type="button" value="Add to Card"></div>',
        '<div class="slide_doors"><div class="pictr3"><img src="img/minimalist-door.jpeg" alt="Minimalist Door"></div><p class="picture-info" id="text-info-conteiner">Minimalist Door</p><h2 class="Price-door"> 55$ </h2><input class="button-store" type="button" value="Add to Card"></div>'
        
    ]

    let currentSlide = 0;

    function renderCarousel() {
        const slideConteiner = document.querySelector('.carousel-doors .slide_doors');
        slideConteiner.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideConteinпшеer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideConteiner.innerHTML += slides[thirdSlide];
            }
        }

    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length -1 : currentSlide - 1;
        renderCarousel();
    }

    //setInterval(nextSlide, 1000);
    renderCarousel();


    renderCarousel();
    const btnForward = document.querySelector('.carousel-doors .forward');
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector('.carousel-doors .back');
    btnBack.addEventListener('click', prevSlide);
    window.addEventListener('resize', renderCarousel);
})()