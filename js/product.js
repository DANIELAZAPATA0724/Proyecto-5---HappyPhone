document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtns = document.querySelectorAll(".add-to-cart");
  const incrementBtns = document.querySelectorAll(".btn-incrementar");
  const decrementBtns = document.querySelectorAll(".btn-decrementar");
  const quantityInputs = document.querySelectorAll(".cantidad-input");

  incrementBtns.forEach((incrementBtn, index) => {
    incrementBtn.addEventListener("click", () => {
      let cantidad = parseInt(quantityInputs[index].value);
      cantidad++;
      quantityInputs[index].value = cantidad;
    });
  });

  decrementBtns.forEach((decrementBtn, index) => {
    decrementBtn.addEventListener("click", () => {
      let cantidad = parseInt(quantityInputs[index].value);
      if (cantidad > 0) {
        cantidad--;
        quantityInputs[index].value = cantidad;
      }
    });
  });

  const carritoInicial = JSON.parse(localStorage.getItem("carrito"));
  if (!carritoInicial || carritoInicial.length === 0) {
    localStorage.setItem("carrito", JSON.stringify([]));
  }

  addToCartBtns.forEach((addToCartBtn, index) => {
    addToCartBtn.addEventListener("click", () => {
      const productName = addToCartBtn.dataset.productName;
      const quantity = parseInt(quantityInputs[index].value);

      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      let found = carrito.find((item) => item.nombre === productName);

      if (found) {
        found.cantidad += quantity; // Incrementa la cantidad si el producto ya está en el carrito
      } else {
        let price;
        switch (productName) {
          case "Happy 5":
            price = 1050.99;
            break;
          case "Happy 1":
            price = 299;
            break;
          case "Happy 2":
            price = 699;
            break;
          case "Happy 3":
            price = 499;
            break;
          case "Happy 4":
            price = 399;
            break;
          case "HappyZ Flip":
            price = 1250.99;
            break;
          case "Happy 6":
            price = 1050.99;
            break;
          case "Happy 7":
            price = 999.99;
            break;
          case "Happy 8":
            price = 999.99;
            break;
          case "Happy 9":
            price = 999.99;
            break;
          case "Happy 10":
            price = 999.99;
            break;
          default:
            price = 0;
        }

        const newItem = {
          nombre: productName,
          cantidad: quantity,
          precio: price,
        };

        carrito.push(newItem);
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito."); //alert('Producto agregado al carrito.');
      window.location.href = "carrito.html"; // Redirige a la página del carrito
    });
  });

  const returnToCatalog = document.querySelector(".return-to-catalog");

  if (returnToCatalog) {
    returnToCatalog.addEventListener("click", () => {
      window.location.href = "./index.html"; // Redirige a la página de inicio
    });
  }

  let addUpItems = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Obtiene el carrito del localStorage
    let totalItems = carrito.reduce((total, item) => total + item.cantidad, 0); // Calcula el total de elementos en el carrito

    let addCart = document.getElementById("cart-amount");
    addCart.innerHTML = totalItems; // Muestra el número total de elementos en el carrito en el elemento con id "cart-amount"
  };

  addUpItems(); // Invoca la función para mostrar la cantidad inicial de elementos en el carrito
});
