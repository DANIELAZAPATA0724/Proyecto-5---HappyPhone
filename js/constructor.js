document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-products");

  const productWrapper = document.createElement("div");
  productWrapper.className = "product-wrapper";

  carouselContainer.appendChild(productWrapper);

  fetch("./json/catalogo.json")
    .then((response) => response.json())
    .then((data) => {
      data.moviles.forEach((movil) => {
        const article = document.createElement("article");
        article.className = "product";

        const a = document.createElement('a');
        a.href = `./html/${movil.clave}.html`;

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.className = "image-product";
        img.src = movil.ruta_imagen;
        img.alt = movil.nombre;

        const button = document.createElement('button');
        button.textContent = 'Ver';
        button.className = 'main-button'; // Añade una clase al botón

        figure.appendChild(img);
        figure.appendChild(button);

        a.appendChild(figure);
        article.appendChild(a);
        productWrapper.appendChild(article);
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
 };


 document.addEventListener("DOMContentLoaded", function () {
  
  const searchInput = document.getElementById("inpBusq");
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchText = searchInput.value.toLowerCase(); // Obtener el texto ingresado y convertirlo a minúsculas para la comparación
      fetch("./json/catalogo.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredMobiles = data.moviles.filter(
            (movil) =>
              movil.nombre.toLowerCase().includes(searchText) // Filtrar por nombre que contiene el texto ingresado
          );
          if (filteredMobiles.length > 0) {
            document.getElementById("main-offer").style.display = "none";
            document.getElementById("carousel-products").style.display = "none";
            const productList = document.createElement("ul");
            filteredMobiles.forEach((movil) => {
              const listItem = document.createElement("li");
              const link = document.createElement("a");
              link.href = `./html/${movil.clave}.html`; // Redirigir a productx.html
              link.innerHTML = `<img src='${movil.ruta_imagen}' alt='movil.nombre'> Nombre: ${movil.nombre} <br>Precio: ${movil.precio} <br>Color: ${movil.color} <br>Descripción: ${movil.descripcion}`;
              listItem.appendChild(link);
              productList.appendChild(listItem);
              document.getElementById("frameBuscar").style.display = "none";
            });
            const mainProduct = document.querySelector(".productoBuscado");
            mainProduct.innerHTML = ""; // Limpiar el contenido existente en .main-product
            mainProduct.appendChild(productList); // Agregar la lista de resultados filtrados
          } else {
            alert("No se encontraron resultados");
          }
        })
        .catch((error) =>
          alert("Error al obtener el archivo JSON: ", error)
        );
    }
  });
});
