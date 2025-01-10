const respuesta = document.getElementById("respuesta");
const btnejecutar = document.getElementById("ejecutar");
let frutas = ["naranja", "manzana"];
btnejecutar.addEventListener('click', iniciar)
var aux = 0;
var num = 0;
function iniciar(){
    frutas.forEach(function(item, index, array){
        respuesta.innerText = array;
    })
    return respuesta
}