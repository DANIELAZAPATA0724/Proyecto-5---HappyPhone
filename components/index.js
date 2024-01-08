
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
.clean{
  text-decoration: none;
  color: #ffffff00; 
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
    padding-inline-end: 13%;
    padding-top: 8%;
  }

  .clean{
    text-decoration: none;
    color: #ffffff00; 
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
  <header>
    <nav>
      <div class="logo">
      <a href="./index.html"><img src="./img/logo.png" alt="Logo"></a>
      </div>
      <div class="menu-icon">
      <img class="menu-icon"src="./img/menu.png" alt="Logo">
      </div>
      <ul>
     
      <li><a href="#" class="clean" >libre</a></li>
        <li><a href="./html/login.html">Inicia Sesión</a></li>
        <li><a href="./html/contact.html">Contacto</a></li>
        <li class="menu-section"><a onclick="muestraBusqueda();"><img src="./img/busqueda.svg" class="lupa" alt="Buscar"></a></li>
        <div id="frameBuscar"><input type="text" minlength="3" maxlength="15" id="inpBusq" style="width: 150px;"></div>
        </div>
        </li>
        <li><a href="#" class="clean" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>

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
      document.getElementById("frameBuscar").style.display="none";
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


//FOOTER

const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<style>

@font-face {
  font-family: 'poppB';
  src: url("../fonts/poppins/Poppins-Bold.ttf") format('truetype');
}

@font-face {
  font-family: 'poppR';
  src: url("../fonts/poppins/Poppins-Regular.ttf") format('truetype');
}


footer{
  background-color: #D9D9D9;
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr 5fr;
  font-size: 14px;
  
}
.about-footer{
    display: grid;
    justify-content:start;
    padding-left: 2%;
}

.about-footer li{
  display: grid;
  justify-content:flex-start;
}

ul{
  padding-inline-start: 0px;}

.rrss-footer{
  display: flex;
  align-items: center;
}

.logo-rrss{
  width: 90%;
  margin: 1rem;
  gap:0;
  transition: all .3s;
  
}

.logo-rrss:hover{
  transform: scale(1.3); 
}

.logo-rrss:hover{
  transform: scale(1.3); 
}

.info-footer{
  padding-right: 5%;
  display: grid;
  justify-content:flex-end;
  font-family: 'poppR';
}

.info-footer p,li{
  display: grid;
  justify-content:flex-end;
  font-family: 'poppR';
}

a{
  text-decoration: none;
  color: #000; 
}

a:hover{
  color:#2F8F97;
}

.menu-section:hover{
  cursor: pointer;
  color: #297780;
}


</style>

<footer>
        <section class="about-footer">
            <ul>
                <p><strong><a href="./html/aboutus.html" target="_self">About HappyPhone</a></strong></p>
                <li><a href="./html/technicalservice.html" target="_self">Servicio Técnico</a></li>
                <li> &copy; 2023 HappyPhone. Todos los derechos reservados.
                </li>
            </ul>
        </section>

        <figure class="rrss-footer">
                <a href="https://www.instagram.com/" target="_blank"><img class="logo-rrss" src="./img/instagram.svg" alt="logo_instagram"></a>
                <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target="_blank"><img class="logo-rrss" src="./img/tiktok.svg" alt="logo_tiktok"></a>
                <a href="https://www.youtube.com/" target="_blank"><img class="logo-rrss" src="./img/youtube.svg" alt="logo_youtube"></a>
            

        
        </figure>

        <section class="info-footer">
            <ul>
                <p><strong><a href="./html/moreinformation.html" target="_self">Nuestro Equipo</a></strong></p>
                <li><a href="./html/terms.html" target="_self">Términos y condiciones</a></li>
                <li><a href="./html/workwithus.html" target="_self">Trabaja con nosotros</a></li>
            </ul>
        </section>
        <script src="./js/constructor.js"></script>


    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);


