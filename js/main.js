const baseUrl = 'https://rickandmortyapi.com/api/character/';

const container = document.querySelector('.container');
const selector = document.getElementById('status');
const buscar = document.getElementById('buscar');
let resultado = '';
let resultado_pet = '';
let personajes = '';


buscar.addEventListener('input', (event) => {
    fetch(`${baseUrl}`)
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

// Función para recuperar a todos los personajes
function getAll() {
    fetch(baseUrl)
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
                    <h2>${character.name}</h2>
                    <h4>Status: ${character.status}</h4>
                    <a href="singlecharacter/${character.id}" class="btn">Mas info</a>
                </div>`;
}

// Función para recuperar a los personajes por id
function getSingle(pId) {
    fetch(`${baseUrl}${pId}`)
        .then(response => response.json())
        .then(character => console.log(character));
}




