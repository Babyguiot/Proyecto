const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === '' || password === '') {
        errorMsg.textContent = 'Por favor, ingrese ambos campos';
        return;
    }

    //
    //  un mensaje de éxito cundo le da iniciar
    errorMsg.textContent = 'Iniciando sesión...';
    setTimeout(() => {
        errorMsg.textContent = 'Sesión iniciada con éxito!';
    }, 2000);
});
//  botón de "Crear usuario" por su ID
const createUserBtn = document.getElementById('create-user-btn');

// Añade un detector de eventos 'click' al botón
createUserBtn.addEventListener('click', (e) => {

  // Implementa tu lógica aquí - redirecciona a una página de creación de usuario, muestra un modal, etc.
  console.log("Usuario quiere crear una cuenta"); // Mensaje de ejemplo en la consola

  // Evita el comportamiento predeterminado de enviar el formulario (si está dentro de un formulario)
  e.preventDefault();
});
