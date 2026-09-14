const herramientas = document.getElementById("herramientas");
const progresos = document.querySelectorAll(".progreso");
const menuToggle = document.querySelector(".menu-toggle");
const navegacion = document.getElementById("navegacion-principal");

const observer = new IntersectionObserver((entradas) => {

    if (entradas[0].isIntersecting) {

        progresos.forEach(progreso => {

            const porcentaje = progreso.dataset.porcentaje;

            progreso.style.width = porcentaje + "%";

        });

        observer.disconnect();
    }

});
 
observer.observe(herramientas);

function inicializarMenu() {
    if (!menuToggle || !navegacion) return;

    const textoAccesible = menuToggle.querySelector(".sr-only");

    function cerrarMenu() {
        menuToggle.setAttribute("aria-expanded", "false");
        navegacion.classList.remove("is-open");
        if (textoAccesible) textoAccesible.textContent = "Abrir menú de navegación";
    }

    menuToggle.addEventListener("click", () => {
        const menuAbierto = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!menuAbierto));
        navegacion.classList.toggle("is-open", !menuAbierto);
        if (textoAccesible) {
            textoAccesible.textContent = menuAbierto
                ? "Abrir menú de navegación"
                : "Cerrar menú de navegación";
        }
    });

    navegacion.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            cerrarMenu();
            menuToggle.focus();
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarMenu);
} else {
    inicializarMenu();
}

let i=0;
let txt='Thomas Gerónimo Camicha';
let speed=80;


function tipeo(){
    if(i<txt.length){
        document.getElementById("efecto").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(tipeo, speed);
    }
}

