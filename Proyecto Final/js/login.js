
document.getElementById("user-icon").addEventListener("click", function(event) {
    event.preventDefault();
    var loginBox = document.getElementById("login-box");
    if (loginBox.style.display === "none" || loginBox.style.display === "") {
        loginBox.style.display = "block";
    } else {
        loginBox.style.display = "none";
    }
});


window.addEventListener("click", function(event) {
    var loginBox = document.getElementById("login-box");
    if (!event.target.closest(".user-icon")) {
        loginBox.style.display = "none";
    }
});

const formulario = document.getElementById('formRegistro');
const usuario = document.getElementById('txtUsername');
const contraseña = document.getElementById('txtPassword');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validarInputs = () => {
    const usuarioValue = usuario.value.trim();
    const contraseñaValue = contraseña.value.trim();
    
    if (usuarioValue === '') {
        setError(usuario, 'Los nombres son obligatorios');
    } else {
        setSuccess(usuario);
    }

    if (contraseñaValue === '') {
        setError(contraseña, 'La contraseña es obligatoria');
    } else if (contraseñaValue.length < 8) {
        setError(contraseña, 'La contraseña debe ser de mínimo 8 caracteres');
    } else {
        setSuccess(contraseña);
    }

};