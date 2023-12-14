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
                <p><strong><a href="../html/aboutus.html">About HappyPhone</a></strong></p>
                <li><a href="../html/help.html">Ayuda</a></li>
                <li><a href="../html/aboutus.html">Sobre nosotros</a></li>
            </ul>
        </section>

        <figure class="rrss-footer">
                <a href="https://www.instagram.com/" target="_blank"><img class="logo-rrss" src="../img/instagram.svg" alt="logo_instagram"></a>
                <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target="_blank"><img class="logo-rrss" src="../img/tiktok.svg" alt="logo_tiktok"></a>
                <a href="https://www.youtube.com/" target="_blank"><img class="logo-rrss" src="../img/youtube.svg" alt="logo_youtube"></a>
            </figure>
        
        </figure>

        <section class="info-footer">
            <ul>
                <p><strong><a href="../html/moreinformation.html" target="_blank">Más información</a></strong></p>
                <li><a href="../html/terms.html" target="_blank">Términos y condiciones</a></li>
                <li><a href="../html/workwithus.html" target="_blank">Trabaja con nosotros</a></li>
            </ul>
        </section>
        <script src="../js/constructor.js"></script>


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
