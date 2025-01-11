const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick= function(){
    navigation.classList.toggle("open");
}

const list = document.querySelectorAll(".list");
function activarLink(){
    list.forEach((item)=> 
    item.classList.remove('active'));
    this.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el enlace con la clase 'link' dentro de 'list'
    const linkElement = document.querySelector('.list.link a'); 
    if (linkElement && linkElement.getAttribute('href')) { // Aseguramos que el enlace exista en el DOM
        linkElement.addEventListener('click', function (event) {
        event.preventDefault(); // Detener la redirección inmediata
        const link = linkElement.getAttribute('href'); // Obtener el valor del atributo href del enlace
        console.log("Enlace de redirección: ", link); // Para depuración
        setTimeout(() => {
          window.location.href = link; // Realizamos la redirección después de que haya pasado el tiempo de la animación
        }, 500); // Tiempo igual al de la animación (0.3s)
      });
    } else {
      console.error('El enlace no se encontró'); // Si no se encuentra el enlace
    }
  });

list.forEach((item)=>
item.addEventListener('click',activarLink));
