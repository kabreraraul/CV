document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".proyecto, .habilidad");

    elementos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            mostrarVentanaEmergente(elemento.textContent, elemento.dataset.descripcion);
        });
    });
});

function mostrarVentanaEmergente(titulo, descripcion) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${titulo}</h2>
            <p>${descripcion}</p>
            <button onclick="cerrarModal()">Cerrar</button>
        </div>
    `;

    document.body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector(".modal");
    if (modal) modal.remove();
}