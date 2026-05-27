const formulario = document.getElementById('contactForm');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const pais = document.getElementById('pais').value;

    if (nombre === '') {
        alert('Por favor, ingrese su nombre completo');
        return;
    }

    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        return;
    }

    if (pais === '') {
        alert('Por favor, seleccione un país');
        return;
    }

    alert('Reserva enviada correctamente. ¡Gracias por elegir Cafe Aroma!');
    
    console.log('Datos del formulario:', {
        nombre: nombre,
        pais: pais
    });

    formulario.reset();
});

const enlaces = document.querySelectorAll('.Menu-Horizontal a[href^="#"]');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = this.getAttribute('href');
        
        if (destino && destino !== '#') {
            const elementoDestino = document.querySelector(destino);
            if (elementoDestino) {
                elementoDestino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
