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

function cerrarMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    navegacion.classList.remove("is-open");
    menuToggle.querySelector(".sr-only").textContent = "Abrir menú de navegación";
}

menuToggle.addEventListener("click", () => {
    const menuAbierto = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!menuAbierto));
    navegacion.classList.toggle("is-open", !menuAbierto);
    menuToggle.querySelector(".sr-only").textContent = menuAbierto
        ? "Abrir menú de navegación"
        : "Cerrar menú de navegación";
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

const menuToggle = document.getElementById('menuToggle');
        const nav = document.querySelector('header nav');

        menuToggle.addEventListener('click', () => {
            const menuAbierto = nav.classList.toggle('menu-abierto');
            menuToggle.setAttribute('aria-expanded', menuAbierto);
            menuToggle.setAttribute('aria-label', menuAbierto ? 'Cerrar menú' : 'Abrir menú');
        });

        nav.querySelectorAll('a').forEach((enlace) => {
            enlace.addEventListener('click', () => nav.classList.remove('menu-abierto'));
        });