function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    
    const slides = document.querySelectorAll('.slider__item');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');
    const dotsContainer = document.querySelector('.slider__dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Создаем точки для навигации
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider__dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider__dot');
    
    function goToSlide(slideIndex) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (slideIndex + slideCount) % slideCount;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Обработчики событий
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Автоматическое переключение
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Пауза при наведении
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Свайп на мобильных
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
}