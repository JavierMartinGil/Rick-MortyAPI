const baseUrl = 'https://rickandmortyapi.com/api/character/';
const container = document.querySelector('.container');
let personaje = '';
let detalle_personaje = '';
let episodios = '';


// recuperar parametros de la url
function obtenerParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id');
    fetch(`${baseUrl}${paramId}`)
        .then(response => response.json())
        .then(personaje => {
            console.log(personaje);
            detalle_personaje = createCharacterHtml(personaje);
            episodios = personaje.episode
            console.log(episodios)
            container.innerHTML = detalle_personaje;
        });

}

function createCharacterHtml(character) {
    let episodiosHtml = "";
    for (let episodio of character.episode) {
        episodiosHtml += `<li><a href="${episodio}">${episodio}</li>`;
    }
    return `<div class="in-grid detalle"><h1>${character.name}</h1></div>
            <div class="detalle_personaje">
            <div class="avatar">
                <img src="${character.image}">                
            </div>
            <div class="info">
                <h2> <i class="fa fa-user"></i> ${character.name}</h2>
                <h3><i class="fa fa-heart"></i> Status: ${character.status}</h3>
                <h4><i class="fa fa-bug"></i> Especie: ${character.species}</h4>
                <a href="index.html" class="btn_volver">Volver al inicio</a>
            </div>
            <div class="episodios">
                <ul>
                 ${episodiosHtml}
                </ul>
            </div>
            </div>`;
}
