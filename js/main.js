const baseUrl = 'https://rickandmortyapi.com/api/character/';

const container = document.querySelector('.container');
const selector = document.getElementById('status');
let resultado = '';


// Función para recuperar a todos los personajes
function getAll() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(characters => {
            let personajes = characters.results;
            /* let resultado = ''; */
            // console.log(personajes)
            for (personaje of personajes) {
                resultado += `<div class="personaje">
                             <img src="${personaje.image}" alt="">
                               <h2>${personaje.name}</h2>
                             <h4>Status: ${personaje.status}</h4>
                            <a href="" class="btn">Mas info</a>
                             </div>`
            }
            container.innerHTML = resultado;
            //return resultado;
        });
}

// Función para recuperar a los personajes según su estado
/* function getState(pEstado) {
    fetch(`${baseUrl}?status=${pEstado}`)
        .then(response => response.json())
        .then(characters => resultado = characters);
    console.log(resultado)
} */

const seleccionarSTatus = selector.addEventListener('change', (pEstado) => {
    fetch(`${baseUrl}?status=${selector.value}`)
    console.log(selector.value)
        .then(response => response.json())
        .then(characters => resultado_pet = characters);
    resultado = '';
    resultado_pet += `<div class="personaje">
                    <img src="${personaje.image}" alt="">
                    <h2>${personaje.name}</h2>
                    <h4>Status: ${personaje.status}</h4>
                    <a href="" class="btn">Mas info</a>
                </div>`
    container.innerHTML = resultado;
})

// Función para recuperar a los personajes por id
function getSingle(pId) {
    fetch(`${baseUrl}${pId}`)
        .then(response => response.json())
        .then(character => console.log(character));
}




