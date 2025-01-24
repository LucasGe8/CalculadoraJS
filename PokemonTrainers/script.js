const container = document.getElementById("container");
let URL = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemon() {
  try {
    /* Inicializo un for para que vaya hasta 151 */
    for (let i = 1; i <= 150; i++) {
      /* En cada iteración realizará el fetch correspondiente para traer los datos del pokemon de ese numero */
      const response = await fetch(URL + i);
      /* Obtengo lo datos en json del pokemon */
      const pokemon = await response.json(); // Cada Pokémon es un objeto individual
      renderPokemon(pokemon); // Pasamos el Pokémon directamente
      addToggleEvent();
    }
  } catch (error) {
    console.log("Error al obtener los Pokémon:", error);
  }
}

function renderPokemon(poke) {
  /* Creo un div para el pokemon nuevo */
  const pokemonDiv = document.createElement("div");
  /* Le pongo la clase pokemon */
  pokemonDiv.classList.add("pokemon");
  /* Establezco que dentro del div haya una imagen y un titulo con el nombre del pokemon */
  pokemonDiv.innerHTML = `
        <img src="${poke.sprites.front_default}" alt="${poke.name}">
        <h3>${poke.name}</h3>`;
  container.appendChild(pokemonDiv);
}
function addToggleEvent(){
    const poks = document.getElementsByClassName("pokemon");
    Array.from(poks).forEach((pok) => {
      pok.onclick = function () {
        pok.classList.toggle("inactive");
      };
    });
}


fetchPokemon();
