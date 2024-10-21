// const registro = document.getElementById("reg");
// const email = document.getElementById('email');
// const confirmEmail = document.getElementById('confirm-email');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirm-password');
// const nombre = document.getElementById('nombre');
// const apellidos = document.getElementById('apellidos');
// const terminos = document.getElementById('terminos');
// const documentSelect = document.getElementById('document');
// const daySelect = document.getElementById('day');
// const monthSelect = document.getElementById('month');
// const phone = document.getElementById('phone');

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

// registro.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validarInputs();
// });

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

    // const emailValue = email.value.trim();
    // const confirmEmailValue = confirmEmail.value.trim();
    // const passwordValue = password.value.trim();
    // const confirmPasswordValue = confirmPassword.value.trim();
    // const nombreValue = nombre.value.trim();
    // const apellidosValue = apellidos.value.trim();
    // const terminosChecked = terminos.checked;
    // const phoneValue = phone.value.trim();
    
    if (usuarioValue === '') {
        setError(usuario, 'El usuario es obligatorio');
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

    // if (emailValue === '') {
    //     setError(email, 'El correo es obligatorio');
    // } else if (!isValidEmail(emailValue)) {
    //     setError(email, 'Ingrese un correo válido');
    // } else {
    //     setSuccess(email);
    // }

    // if (confirmEmailValue === '') {
    //     setError(confirmEmail, 'Confirme su correo');
    // } else if (emailValue !== confirmEmailValue) {
    //     setError(confirmEmail, 'Los correos no coinciden');
    // } else {
    //     setSuccess(confirmEmail);
    // }

    // if (passwordValue === '') {
    //     setError(password, 'La contraseña es obligatoria');
    // } else if (passwordValue.length < 8) {
    //     setError(password, 'La contraseña debe tener al menos 8 caracteres');
    // } else {
    //     setSuccess(password);
    // }

    // if (confirmPasswordValue === '') {
    //     setError(confirmPassword, 'Confirme su contraseña');
    // } else if (passwordValue !== confirmPasswordValue) {
    //     setError(confirmPassword, 'Las contraseñas no coinciden');
    // } else {
    //     setSuccess(confirmPassword);
    // }

    // if (nombreValue === '') {
    //     setError(nombre, 'El nombre es obligatorio');
    // } else {
    //     setSuccess(nombre);
    // }

    // if (apellidosValue === '') {
    //     setError(apellidos, 'Los apellidos son obligatorios');
    // } else {
    //     setSuccess(apellidos);
    // }

    // if (documentSelect.value === '') {
    //     setError(documentSelect, 'Seleccione un tipo de documento');
    // } else {
    //     setSuccess(documentSelect);
    // }

    // if (daySelect.value === '' || monthSelect.value === '') {
    //     setError(daySelect, 'Seleccione una fecha válida');
    // } else {
    //     setSuccess(daySelect);
    //     setSuccess(monthSelect);
    // }

    // if (phoneValue === '') {
    //     setError(phone, 'El número de celular es obligatorio');
    // } else {
    //     setSuccess(phone);
    // }

    // if (!terminosChecked) {
    //     setError(terminos, 'Debe aceptar los términos y condiciones');
    // } else {
    //     setSuccess(terminos);
    // }

};