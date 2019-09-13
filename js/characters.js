const baseUrl = 'https://rickandmortyapi.com/api/character/';
const container = document.querySelector('.container');
let personaje = '';
let detalle_personaje = '';


// recuperar parametros de la url y pinta el personaje
function obtenerParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id');
    fetch(`${baseUrl}${paramId}`)
        .then(response => response.json())
        .then(personaje => {
            detalle_personaje = createCharacterHtml(personaje);
            container.innerHTML = detalle_personaje;
        });

}

function createCharacterHtml(character) {
    console.log(character)
    let episodiosHtml = "";
    for (let episodio of character.episode) {
        episodiosHtml += `<li><a href="${episodio}">Episodio número: ${episodio.substring(40, episodio.length)}</li>`;
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
                <h4><i class="fa fa-venus-mars"></i> Género: ${character.gender}</h4>
                <h4><i class="fa fa fa-map-marker"></i> Localización: ${character.location.name}</h4>
                <a href="index.html" class="btn_volver">Volver al inicio</a>
            </div>
            <div class="episodios">
            <h3><i class="fa fa-list"></i> Lista de episodios</h3>
                <ul>
                 ${episodiosHtml}
                </ul>
            </div>
            </div>`;
}
