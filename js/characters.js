const baseUrl = 'https://rickandmortyapi.com/api/character/';
const container = document.querySelector('.container');
let personaje = '';
let detalle_personaje = '';


// recuperar parametros de la url
function obtenerParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id');
    fetch(`${baseUrl}${paramId}`)
        .then(response => response.json())
        .then(personaje => {
            console.log(personaje);
            detalle_personaje = createCharacterHtml(personaje);
            container.innerHTML = detalle_personaje;
        });


}


function createCharacterHtml(character) {
    return `<div class="detalle_personaje">
                    <img src="${character.image}" alt="">
                    <h2>${character.name}</h2>
                    <h4>Status: ${character.status}</h4>
                    <a href="index.html" class="btn">Volver al inicio</a>
                </div>`;
}

/* function getSingle(pId) {
    fetch(`${baseUrl}${pId}`)
    console.log(pId)
        .then(response => response.json())
        .then(character => console.log(character));
} */