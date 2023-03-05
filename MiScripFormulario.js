//Al cargar la página,  se pone a la escucha el check box para el cambio de tema a oscuro.
window.onload = iniciar;

function iniciar() {
    document
        .getElementById("TemaOscuroCheck")
        .addEventListener("change", CambiarModo);
}

function CambiarModo(e) {
    if (e.target.checked) {
        document.body.style.background = "#2E2E2E";
    } else {
        document.body.style.background = "";
    }
} // fin cambiarModo
