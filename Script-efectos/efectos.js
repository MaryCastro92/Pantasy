document.addEventListener("DOMContentLoaded", () => {
    // 1. INYECCIÓN AUTOMÁTICA DEL HTML DEL DRAGÓN
    const dragonHTML = `
        <div id="dragon-transicion" class="dragon-overlay">
            <div class="fuego-animado"></div>
            <div class="contenedor-huida mary-box">
                <div class="humo"></div>
                <div class="chibi mary-chibi"></div>
            </div>
            <div class="contenedor-huida anji-box">
                <div class="humo"></div>
                <div class="chibi anji-chibi"></div>
            </div>
            <h2 class="texto-quemado">¡EL PAN SE QUEMA!</h2>
        </div>`;
    
    document.body.insertAdjacentHTML('beforeend', dragonHTML);

    const overlay = document.getElementById('dragon-transicion');
    const grito = overlay.querySelector('.texto-quemado');
    const frases = ["¡MIS LIBROS!", "¡EL ORÁCULO NO PREDICE ESTO!", "¡ANJI, CORRE!", "¡QUÉ CALOR!", "¡SE VA A QUEMAR EL PAN!"];

    // 2. DETECTOR DE CLICS EN ENLACES Y BOTONES
    const disparadores = document.querySelectorAll('a, .boton-seccion, .boton-enviar');

    disparadores.forEach(el => {
        el.addEventListener('click', (e) => {
            const destino = el.href;

            // Si es un enlace interno válido
            if (destino && !destino.includes('#') && !el.target) {
                e.preventDefault();

                // Efecto de sacudida en el botón pulsado
                el.classList.add('temblor-activo');
                
                // Cambiar frase al azar
                grito.innerText = frases[Math.floor(Math.random() * frases.length)];

                // Disparar el fuego tras el temblor inicial
                setTimeout(() => {
                    overlay.style.display = 'flex';
                    overlay.classList.add('pantalla-quemada');
                }, 0);

                // Navegar a la nueva página cuando la pantalla esté tapada
                setTimeout(() => {
                    window.location.href = destino;
                }, 1600);
            }
        });
    });
});