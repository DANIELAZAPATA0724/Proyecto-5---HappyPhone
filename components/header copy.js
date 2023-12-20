//HEADER ---- Pendiente por agregar estilos para que se vea todo integrado. Por el momento queda en index aparte para que funcione.
const headerTemplate = document.createElement("template");

headerStyle = `
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
align-content: rigth;
}

 
/*carrito de compra cantidad*/

.logo-shoppingcart {
    width: 40px;
    position:absolute;
    margin-top: 2rem;
    margin-left: -59px;
  }

.cart-amount{
    position: relative;
    background-color:red;
    margin-top: 1rem;
    margin-right: -7px;
    font-size: 16px;
    padding: 3px;
    border-radius: 3px;
  }


@media only screen and (max-width: 768px) {
  nav ul {
    display: none;
    flex-direction: column;
    width: 40%;
    text-align: right;
    position: absolute;
    top: 100px;
    right: 0px;
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

  /*carrito de compra cantidad*/

.logo-shoppingcart {
    width: 40px;
    position:absolute;
    margin-top: 2rem;
    margin-left: -59px;
  }

.cart-amount{
    position: relative;
    background-color:red;
    margin-top: 1rem;
    margin-right: -7px;
    font-size: 16px;
    padding: 3px;
    border-radius: 3px;
  }

}

.lupa {
  width: 30px;
}

#frameBuscar{
  width: 170px;
  height: 28px;
  background-color: red;
  margin: 0px;
  padding: 0px;
  position: fixed;
  top: 80px;
  right: 0px;
  z-index: 1;
  display:none;
  overflow: hidden;
}


  </style>
`;
console.log(window.location);
headerView =
  window.location.href == "index.html"
    ? `
  <header>
    <nav>
      <div class="logo">
      <a href="index.html"><img src="./img/logo.png" alt="Logo"></a>
      </div>
      <div class="menu-icon">
      <img class="menu-icon"src="./img/menu.png" alt="Logo">
      </div>
      <ul>
        <li><a href="./html/login.html">Inicia Sesión</a></li>
        <li><a href="./html/contact.html">Contacto</a></li>
        <li class="menu-section"><a onclick="muestraBusqueda();"><img src="./img/busqueda.svg" class="lupa" alt="Buscar"></a></li>
        <div id="frameBuscar"><input type="text" minlength="3" maxlength="15" id="inpBusq" style="width: 150px;"></div>
        </div>
        </li>
        </li>
        
    </nav>
  </header>`
    : ` 
      <div class="logo">
      <a href="./index.html"><img src="./img/logo.png" alt="Logo"></a>
      </div>
      <div class="menu-icon">
      <img class="menu-icon"src="./img/menu.png" alt="Logo">
      </div>
      <ul>
        <li><a href="./html/login.html">Inicia Sesión</a></li>
        <li><a href="./html/contact.html">Contacto</a></li>
        <li class="menu-section"><a onclick="muestraBusqueda();"><img src="./img/busqueda.svg" class="lupa" alt="Buscar"></a></li>
        <div id="frameBuscar"><input type="text" minlength="3" maxlength="15" id="inpBusq" style="width: 150px;"></div>
        </div>
        </li>
        </li>

    </nav>
  
  </header>
  `;

headerTemplate.innerHTML = headerView + headerStyle;

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
      document.getElementById("frameBuscar").style.display = "none";
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
