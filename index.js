document.addEventListener('DOMContentLoaded', function() {
    const h6Element = document.querySelector('#typed-text-1 span');
    const h1Element = document.querySelector('#typed-text-2 span');

    // Inicia la animación para la primera frase
    h6Element.parentElement.style.opacity = '1';

    // Establece un retraso para iniciar la animación de la segunda frase
    setTimeout(function() {
        h1Element.parentElement.style.opacity = '1';
    }, 2000); // Retraso de 2 segundos para que la primera animación termine
});



document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    const titulos = document.querySelectorAll('.titulos h2, .titulos h6');
    titulos.forEach(titulo => {
        observer.observe(titulo);
    });
});

var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    speed: 600,
    preventClicks: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});