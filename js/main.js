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