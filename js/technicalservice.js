//Validaciones del login/registro

// Expresiones regulares para validación
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Función para validar campos
function validateFields(email, password) {
  return emailRegex.test(email) && passwordRegex.test(password);
}

function enviarMensaje() {
  // Puedes agregar aquí la lógica para enviar el mensaje (por ejemplo, mediante una solicitud AJAX)
  alert(
    "Mensaje enviado. Nos pondremos en contacto contigo pronto. ¡Gracias por confiar en HappyPhone!"
  );
  document.getElementById("contactForm").reset();
}
