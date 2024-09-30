document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const isValid = validarNombre() && validarCorreo() && validarAsunto() && validarMensaje() && validarAcuerdo();
        if (isValid) {
            alert('Formulario enviado con éxito!');
        }
    });
});

function validarNombre() {
    const nombre = document.getElementById('txtNombre').value;
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    return true;
}

function validarCorreo() {
    const correo = document.getElementById('txtCorreo').value;
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(correo)) {
        alert('Por favor, ingresa un email válido.');
        return false;
    }
    return true;
}

function validarAsunto() {
    const asunto = document.getElementById('asunto').value;
    if (asunto === '') {
        alert('Por favor, selecciona un asunto.');
        return false;
    }
    return true;
}

function validarMensaje() {
    const mensaje = document.getElementById('txtMensaje').value;
    if (mensaje === '') {
        alert('Por favor, escribe un mensaje.');
        return false;
    }
    return true;
}

function validarAcuerdo() {
    const acuerdo = document.getElementById('txtAcuerdo').checked;
    if (!acuerdo) {
        alert('Debes aceptar la política de privacidad.');
        return false;
    }
    return true;
}
