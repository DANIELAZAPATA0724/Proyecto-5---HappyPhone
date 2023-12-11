//Constructor de logos de RRSS
document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/iconos.json')
      .then(response => response.json())
      .then(data => {
        const redesSocialesContainer = document.getElementById('redes-sociales-container');
        
        data.redes_sociales.forEach(red => {
          const link = document.createElement('a');
          link.href = red.enlace;
          link.target = '_blank';
  
          const imagen = document.createElement('img');
          imagen.className = 'logo-rrss';
          imagen.src = red.imagen;
          imagen.alt = `logo_${red.nombre.toLowerCase()}`;
  
          link.appendChild(imagen);
          redesSocialesContainer.appendChild(link);
        });
      })
      .catch(error => console.error('Error al obtener el archivo JSON:', error));
  });
  
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
          a.href = `./${movil.nombre}.html`;
          const button = document.createElement('button');
          button.textContent = 'Comprar';
  
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
  