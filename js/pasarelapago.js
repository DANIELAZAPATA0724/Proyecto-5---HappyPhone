function processPayment() {
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const cardHolder = document.getElementById("card-holder").value;
  
    // Validaciones básicas
    if (!isValidCardNumber(cardNumber)) {
      alert("Por favor, ingrese un número de tarjeta válido.");
      return;
    }
  
    if (!isValidExpiryDate(expiryDate)) {
      alert("Por favor, ingrese una fecha de vencimiento válida (MM/YY).");
      return;
    }
  
    if (!isValidCVV(cvv)) {
      alert("Por favor, ingrese un código CVV válido.");
      return;
    }
  
    if (cardHolder.trim() === "") {
      alert("Por favor, ingrese el titular de la tarjeta.");
      return;
    }
  
    // Aquí deberías realizar la lógica de procesamiento de pago utilizando una pasarela de pagos real.
    // Puedes enviar los datos a un servidor seguro que maneje la transacción real.
  
    alert("Pago procesado con éxito");
  }
  
  function isValidCardNumber(cardNumber) {
    // Implementa una validación más robusta según tus necesidades
    return /^\d{16}$/.test(cardNumber.replace(/\s/g, ""));
  }
  
  function isValidExpiryDate(expiryDate) {
    // Implementa una validación más robusta según tus necesidades
    const [month, year] = expiryDate.split("/");
    const currentDate = new Date();
    const expirationDate = new Date(year+2000, month - 1);
  
    return expirationDate > currentDate;
  }
  
  function isValidCVV(cvv) {
    // Implementa una validación más robusta según tus necesidades
    return /^\d{3}$/.test(cvv);
  }