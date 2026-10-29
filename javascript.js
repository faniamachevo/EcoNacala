
document.addEventListener("DOMContentLoaded", function () {
    const paginaAtual =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(function (link) {
        if (link.getAttribute("href") === paginaAtual) {
            link.setAttribute("aria-current", "page");
        }
    });

    const formularios = document.querySelectorAll(".formulario");

    formularios.forEach(function (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            alert(
                "Formulário validado! Esta demonstração ainda não envia os dados para um servidor."
            );

            formulario.reset();
        });
    });
});
