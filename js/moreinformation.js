document.addEventListener("DOMContentLoaded", function () {
    const fotos = document.querySelectorAll(".foto");

    fotos.forEach((foto, index) => {
        // foto.addEventListener("click", () => mostrarDescripcion(index + 1));
    });
});

function mostrarDescripcion(id) {
    const descripcion = document.querySelector(`.foto:nth-child(${id}) .descripcion`);
    const imagen = document.querySelector(`.foto:nth-child(${id}) img`);

    if (descripcion.style.transform === "rotateY(90deg)") {
        descripcion.style.transform = "rotateY(0deg)";
        imagen.style.transform = "rotateY(90deg)";
    } else {
        descripcion.style.transform = "rotateY(90deg)";
        imagen.style.transform = "rotateY(0deg)";
    }
}