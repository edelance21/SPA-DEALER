const app = document.getElementById("app");

// rutas del sitio
const routes = {
    home: "plantillas/home.html",
    hondacrv: "plantillas/hondacrv.html",
    toyotarav4: "plantillas/toyotarav4.html",
    mazdacx90: "plantillas/mazdacx90.html",
    hyundaitucson: "plantillas/hyundaitucson.html",
};

// evento a cada link del navbar
document.querySelectorAll("[data-route]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const route = e.target.getAttribute("data-route");
        loadPage(route);
    });
});

// función que carga las páginas
function loadPage(route) {
    fetch(routes[route])
        .then(res => res.text())
        .then(html => {
            app.innerHTML = html;
            window.location.hash = route; // opcional
        })
        .catch(err => {
            app.innerHTML = "<h2>Error cargando la página</h2>";
        });
}

// cargar home al iniciar
loadPage("home");
