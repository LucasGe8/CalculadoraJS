const txt = document.getElementById("respuesta")
async function obtenerDatos() {
    await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error=>console.log('Solicitud Fallida', error))
}
obtenerDatos();