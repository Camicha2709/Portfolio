const herramientas = document.getElementById("herramientas");
const progresos = document.querySelectorAll(".progreso");

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