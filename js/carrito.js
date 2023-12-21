document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelector(".cart-items");
  const totalAmount = document.querySelector(".total-amount");
  const clearCartBtn = document.querySelector(".clear-cart");
  const continueShoppingBtn = document.querySelector(".continue-shopping");
  const cartAmount = document.getElementById("cart-amount"); // Elemento del contador
  function renderizarCarrito() {
    cartItems.innerHTML = "";
    let total = 0;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.forEach((item) => {
      const li = document.createElement("li"); // Agregar imagen del producto

      const image = document.createElement("img");
      const numeroProducto = item.nombre.split(" ")[1]; // Obtener el número del nombre del producto

      let imageUrl = `../img/happy${numeroProducto}.svg`;
      if (item.nombre === "HappyZ Flip") {
        imageUrl = `../img/happy.svg`;
      }
      image.src = imageUrl;
      image.alt = `${item.nombre} image`;
      image.classList.add("product-image");
      li.appendChild(image); // Agregar información del producto (nombre, cantidad, precio)
      const itemInfo = document.createElement("div");
      itemInfo.textContent = `${item.nombre} x ${
        item.cantidad
      } - ${formatCurrency(item.precio * item.cantidad)}`;
      li.appendChild(itemInfo);

      cartItems.appendChild(li);
      total += item.precio * item.cantidad;
    });

    totalAmount.textContent = formatCurrency(total); // Formatear y mostrar el total
    updateCartCounter();
  }
  function updateCartCounter() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalItems = carrito.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    cartAmount.textContent = totalItems; // Actualiza el contador
  }

  function formatCurrency(amount) {
    return amount.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
  }

  renderizarCarrito(); // Mostrar el carrito al cargar la página

  clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    alert("Carrito vaciado.");
    renderizarCarrito();
    updateCartCounter(); // Actualiza el contador al vaciar el carrito
  });

  continueShoppingBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
});
