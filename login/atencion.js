// Obtener referencias a los elementos del formulario
const form = document.querySelector('form');
const nameInput = document.querySelector('input[placeholder="Nombre"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const subjectInput = document.querySelector('input[placeholder="Asunto"]');
const messageInput = document.querySelector('textarea');

// Agregar un event listener al formulario para validar los campos
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  // Validar los campos
  if (nameInput.value.trim() === '') {
    alert('Por favor, ingresa tu nombre');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Por favor, ingresa tu correo electrónico');
    return;
  }

  if (subjectInput.value.trim() === '') {
    alert('Por favor, ingresa el asunto');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Por favor, ingresa tu mensaje');
    return;
  }

  // Si todos los campos son válidos, enviar el formulario
  form.submit();
});

// Obtener referencia al input de búsqueda de preguntas frecuentes
const faqSearchInput = document.querySelector('.faq input');

// Agregar event listener al input de búsqueda para filtrar las preguntas
faqSearchInput.addEventListener('input', () => {
  const searchTerm = faqSearchInput.value.toLowerCase();
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('h3').textContent.toLowerCase();
    if (question.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});