function submitForm() {
  var form = document.getElementById("jobApplicationForm");
  var formData = new FormData(form);

  // Aquí puedes realizar una solicitud AJAX para enviar los datos al servidor.
  // Por ejemplo, utilizando la función fetch.

  fetch('url_del_servidor', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
  })
  .catch(error => {
      console.error('Error:', error);
  });

  // Solo para este ejemplo, mostraremos los datos en la consola.
  console.log("Datos enviados:");
  formData.forEach(function (value, key) {
    console.log(key, value);
  });
}
