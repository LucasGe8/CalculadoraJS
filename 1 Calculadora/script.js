const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
/*querySelectorAll trae todos los elementos de ese tipo y los
agrupa como si fuera un array, más concretamente se llama NodeList*/

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear"){
            //Borra todo lo que hay en la pantalla
            display.innerText = "";
        }
        else if (item.id == "backspace"){
            //convertir primero todo lo del display a string
            let string = display.innerText.toString();
            //eliminar el último caracter con substr(primero,ultimo)
            display.innerText = string.substr(0,string.length-1);
        }
        else if (display.innerText != "" && item.id == "equal"){
            //let cadena = "2+2"
            /*eval() lo que hace es tomar una operación en string
            y devolver su resultado*/
            display.innerText = eval(display.innerText);
        }
        else if(display.innerText =="" && item.id == "equal"){
            display.innerText = "Null";
            /*setTimeout ejecuta un código después de un tiempo determinado
            en milisegundos*/
            setTimeout(()=>(display.innerText = ""), 2000);
        }
        else{
            /*sumar las id como si fueran caracteres dentro del display
            , al hacerlo de esta manera se ahorra mucho tiempo*/
            display.innerText += item.id;
        }
    }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick = () =>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}
