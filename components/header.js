//HEADER
const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  color: #333;
  font-family: 'poppR';
  display: flex;
  flex-direction: column;
}


nav {
  display: flex;
  align-items: center;
  background-color: #dfdfe2;
  align-content: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
  display: inline;
}

a {
  font-weight: bold;
  margin: 0 25px;
  color: #000;
  text-decoration: none;
}

a:hover {
  padding-bottom: 5px;
  box-shadow: inset 0 -2px 0 0 #fff;
}

.logo img {
  height: 60px;
  display: flex;
  padding: 10%;
}

.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.menu-icon i {
  color: blue;
}

nav ul {
align-content: r;
}

.logo-shoppingcart {
  width: 30px;
}

.cart{
  position: absolute;
}

.cart-amount{
  position: absolute;
  top: 4px;
  right: 15px;
  font-size: 14px;
}




@media only screen and (max-width: 768px) {
  nav ul {
    display: none;
    flex-direction: column;
    width: 40%;
    text-align: right;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #dfdfe2;
  }

  nav ul.show {
    display: flex;
  }

  nav ul li {
    margin: 10px 0;
  }

  .menu-icon {
    display: block;
    color: #000;
    width: 30px;
    height: 30px;
    padding-inline-end: 10%;
  }
  .logo-shoppingcart {
    width: 30px;
    margin-right: 26px;
  }
  
  .cart{
    position: absolute;
  }
  
  .cart-amount{
    position: relative;
    top: -44px;
    right: 15px;
    font-size: 14px;
  }
}

a img {
  width: 30px;
}


  </style>
  <header>
    <nav>
      <div class="logo">
        <img src="../img/logo.png" alt="Logo">
      </div>
      <div class="menu-icon">
      <img class="menu-icon"src="../img/menu.png" alt="Logo">
      </div>
      <ul>
        <li><a href="../html/login.html">Inicia Sesión</a></li>
        <li><a href="../html/contact.html">Contacto</a></li>
        <li class="menu-section"><a onclick="muestraBusqueda();"><img src="../img/busqueda.svg" alt="lupa"></a></li>        
       
        <li>

        <div class="cart">
        <li><a href="cart.html"><img class="logo-shoppingcart" src="../img/shoppingcart.png"
        alt="shoppingcart">
        <div id="cart-amount" class="cart-amount">0</div></a>
        </li>
        </li>
    </div>
    </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);

    const menuIcon = shadowRoot.querySelector(".menu-icon");
    const navList = shadowRoot.querySelector("ul");

    menuIcon.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }
}

customElements.define("header-component", Header);

function crearIconosRedesSociales(container) {
  // Nombres de los archivos SVG
  const nombresIconos = ["instagram", "tiktok", "youtube"];

  // Itera sobre los nombres de los iconos y crea elementos SVG para cada uno
  nombresIconos.forEach((nombreIcono) => {
    const icono = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icono.classList.add("logo-rrss");
    icono.setAttribute("width", "24"); // Ajusta el tamaño según tus necesidades

    // Ajusta la ruta del atributo 'src' según la ubicación de tus archivos SVG
    icono.innerHTML = `<use xlink:href="../img/${nombreIcono}.svg"></use>`;

    container.appendChild(icono);
  });
}

// En tu constructor.js o donde tengas tu lógica para crear el footer
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.querySelector("footer"); // Ajusta el selector según tu estructura HTML
  const redesSocialesContainer = document.createElement("div");
  redesSocialesContainer.classList.add("rrss-footer", "flex-container"); // Agrega la clase 'flex-container' para centrar los iconos
  footerContainer.appendChild(redesSocialesContainer);

  // Llama a la función para crear los iconos dentro del elemento 'rrss-footer'
  crearIconosRedesSociales(redesSocialesContainer);
});
