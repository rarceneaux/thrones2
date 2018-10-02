import {printToDom} from "../helpers/util.js";

const characters = [ {id: 'character1' , name: 'Ned', house:'Yo Mama', img:'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/eddard-ned-stark-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg'},
{id: 'character2' , name: 'Ned', house:'Yo Mama', img:'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/eddard-ned-stark-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg'}];



const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x=>x.id === characterId)
};



const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for(let i=0; i<characterCards.length;i++){
        characterCards[i].addEventListener('click', characterClick);
    }
};



const charactersBuilder = () =>{
    let domString ='';
    characters.forEach((character) => {
        domString += `<div class="col-2 character-card" id="${character.id}">`;
        domString +=`<div class="card">`;
        domString += `<img class="card-img-top" src="${character.img}" ${character.name}>`;
        domString += `<div>`;
        domString += `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });

    printToDom(domString);
    createEvents();
};

export {charactersBuilder};





