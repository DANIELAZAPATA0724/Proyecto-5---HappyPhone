//Constructor de logos de RRSS
// document.addEventListener("DOMContentLoaded", function() {
//     fetch('../json/iconos.json')
//       .then(response => response.json())
//       .then(data => {
//         const redesSocialesContainer = document.getElementById('redes-sociales-container');
//         data.redes_sociales.forEach(red => {
//           const link = document.createElement('a');
//           link.href = red.enlace;
//           link.target = '_blank';
//           const imagen = document.createElement('img');
//           imagen.className = 'logo-rrss';
//           imagen.src = red.imagen;
//           imagen.alt = `logo_${red.nombre.toLowerCase()}`;
//           link.appendChild(imagen);
//           redesSocialesContainer.appendChild(link);
//         });
//       })
//       .catch(error => console.error('Error al obtener el archivo JSON:', error));
//   });
// Constructor del catálogo
document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.getElementById('carousel-products');

  fetch('./json/catalogo.json')
    .then(response => response.json())
    .then(data => {
      data.moviles.forEach(movil => {
        const article = document.createElement('article');
        article.className = 'product';

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.className = 'image-product';
        img.src = movil.ruta_imagen;
        img.alt = movil.nombre;

        const divInfo = document.createElement('div');
        divInfo.className = 'info-product';
        const p = document.createElement('p');
        p.textContent = movil.nombre;
        const a = document.createElement('a');
        a.href = `../html/${movil.clave}.html`;
        const button = document.createElement('button');
        button.textContent = 'Ver';

        a.appendChild(button);
        divInfo.appendChild(p);
        divInfo.appendChild(a);
        figure.appendChild(img);
        article.appendChild(figure);
        article.appendChild(divInfo);
        carouselContainer.appendChild(article);
      });
    })
    .catch(error => console.error('Error al obtener el archivo JSON:', error));
});
// Constructor del login/registro dinamico
const btnSignIn = document.getElementById('Sign-IN');  // Cambié 'Sign-Up' a 'Sign-IN' si selecciono el botón de inicio de sesión.
const btnSignUp = document.getElementById('Sign-Up');
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
   formRegister.classList.add("hide");
   formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
   formLogin.classList.add("hide");
   formRegister.classList.remove("hide");
});


//Validaciones del login/registro

// Expresiones regulares para validación
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Función para validar campos
function validateFields(email, password) {
   return emailRegex.test(email) && passwordRegex.test(password);
}

btnSignIn.addEventListener("click", e => {
   formRegister.classList.add("hide");
   formLogin.classList.remove("hide");
});
btnSignUp.addEventListener("click", e => {
formRegister.classList.add("hide");
formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value; 

   if (validateFields(email, password)) {
       formLogin.classList.add("hide");
       formRegister.classList.remove("hide");
       //// Muestro un mensaje de registro exitoso
      alert("Registrado con éxito. Comienza a disfrutar de una experiencia móvil.");
   } else {
       // Muestra un mensaje de error al usuario
       //alert("Por favor, ingresa un correo electrónico válido y una contraseña con al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números.");
   }
});  
//Validaciones contacto
document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById('contactForm');
const nombreInput = document.getElementById('Nombres');
const telefonoInput = document.getElementById('teléfono');
const correoInput = document.getElementById('correo');
const submitButton = document.querySelector('.botons');
form.addEventListener('submit', function(event) {
    let valid = true;
    // Validar nombre completo
    if (nombreInput.value.trim() === '' || !/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
        valid = false;
        alert('Por favor, ingresa un nombre válido.');
    }
    // Validar correo electrónico
    if (correoInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(correoInput.value)) {
        valid = false;
        alert('Por favor, ingresa un correo electrónico válido.');
    }
    // Validar teléfono (al menos 9 dígitos)
    if (telefonoInput.value.trim() === '' || !/^\d{9,}$/.test(telefonoInput.value)) {
        valid = false;
        alert('Por favor, ingresa un número de teléfono válido (mínimo 9 cifras).');
    }
    if (!valid) {
        event.preventDefault(); // Evitar que se envíe el formulario si hay errores
    }
});
});
//Validacion captcha
const form = document.querySelector('form');
form.addEventListener('submit' , (e) => {
  e.preventDefault();
  const captchaResponse = grecaptcha.getResponse();
  if(!captchaResponse.length > 0) {
      throw new Error("Captcha not complete");
  }
  const fd = new FormData(e.target);
  const params = new URLSearchParams(fd);

  fetch('http://httpbin.org/post', {
      method: "POST",
      body: params,

  })
  .then(res => res.json())
  .then(data => console.log(data))
  .then(data => console.log(data))
  .catch(err => console.error(err))

})

function muestraBusqueda()
{
  let a = document.getElementById("frameBuscar").style.display;
  if(a==="block")
  {
    document.getElementById("frameBuscar").style.display="none";
  }
  else
  {
    document.getElementById("frameBuscar").style.display="block";
    document.getElementById("inpBusq").focus();
  }
}
const input = document.getElementById("inpBusq");
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    console.log("Tecla Enter presionada");
    alert(1);
  }
});