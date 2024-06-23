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

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

