// Constructor del catálogo
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-products");
  fetch("./json/catalogo.json")
    .then((response) => response.json())
    .then((data) => {
      data.moviles.forEach((movil) => {
        const article = document.createElement("article");
        article.className = "product";

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.className = "image-product";
        img.src = movil.ruta_imagen;
        img.alt = movil.nombre;

        const divInfo = document.createElement("div");
        divInfo.className = "info-product";
        const p = document.createElement("p");
        p.textContent = movil.nombre;

        const a = document.createElement('a');
        a.href = `./html/${movil.clave}.html`;
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
    .catch((error) =>
      console.error("Error al obtener el archivo JSON:", error)
    );
});


function muestraBusqueda() {
  let a = document.getElementById("frameBuscar").style.display;
  if (a === "block") {
    document.getElementById("frameBuscar").style.display = "none";
  } else {
    document.getElementById("frameBuscar").style.display = "block";
    document.getElementById("inpBusq").focus();
  }
}
const input = document.getElementById("inpBusq");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    console.log("Tecla Enter presionada");
    alert(1);
  }
});
