const baseUrl = 'https://rickandmortyapi.com/api/character/';

const container = document.querySelector('.container');
const selector = document.getElementById('status');
const buscar = document.getElementById('buscar');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
let resultado = '';
let resultado_pet = '';
let personajes = '';
let contador = 1;
anterior.disabled = true;

buscar.addEventListener('input', (event) => {
    fetch(`${baseUrl}?page=${contador}`)
        .then(response => response.json())
        .then(characters => personajes = characters.results)
        .then(personajes => {
            console.log(personajes);
            let personajesHtml = "";
            console.log(event.target.value)
            for (personaje of personajes) {
                if (personaje.name.toLowerCase().includes(event.target.value.toLowerCase()))
                    personajesHtml += createCharacterHtml(personaje)
            }
            container.innerHTML = personajesHtml;
        })
})


selector.addEventListener('change', (event) => {
    console.log(event.target.value);
    fetch(`${baseUrl}?status=${event.target.value}`)

        .then(response => response.json())
        .then(characters => personajes = characters.results)
        .then(personajes => {
            console.log(personajes);
            let personajesHtml = "";
            for (personaje of personajes) {
                personajesHtml += createCharacterHtml(personaje);
            }
            container.innerHTML = personajesHtml;
        });

})

siguiente.addEventListener('click', siguientePag);
anterior.addEventListener('click', anteriorPag);

// Función para recuperar a todos los personajes
function getAll() {
    fetch(`${baseUrl}?page=${contador}`)
        .then(response => response.json())
        .then(characters => {
            let personajes = characters.results;

            for (personaje of personajes) {
                resultado += createCharacterHtml(personaje);
            }
            container.innerHTML = resultado;
        });
}

function createCharacterHtml(character) {
    return `<div class="personaje">
                    <img src="${character.image}" alt="">
                    <h2><i class="fa fa-user"></i> ${character.name}</h2>
                    <h4><i class="fa fa-heart"></i> Status: ${character.status}</h4>
                    <h4><i class="fa fa-bug"></i> Especie: ${character.species}</h4>
                    <a href="singlecharacter.html?id=${character.id}" class="btn">Mas info</a>
                </div>`;
}

function siguientePag() {

    if (contador > 20) {
        contador = 20;
    }
    anterior.disabled = false;
    contador++;
    resultado = '';
    getAll();
}

function anteriorPag() {

    if (contador <= 1) {
        anterior.disabled = true;
    } else {
        contador--;
        anterior.disabled = false;
    }
    resultado = '';
    getAll();
}




