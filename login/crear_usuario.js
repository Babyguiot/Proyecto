// ... (código anterior para otros eventos)

// Botón de "Crear usuario" por su ID
const createUserBtn = document.getElementById('create-user-btn');

// Añade un detector de eventos 'click' al botón
createUserBtn.addEventListener('click', (e) => {
  // Evita el comportamiento predeterminado del botón
  e.preventDefault();

  // Redirige a la página de registro
  window.location.href = 'registro.html';
});

// ... (código restante para el evento de inicio de sesión)
createUserBtn.addEventListener('click', (e) => {
    // Confirmación antes de redirigir
    if (confirm("¿Desea crear una cuenta?")) {
      e.preventDefault();
      window.location.href = 'registro.html';
    }
  });
  