import { generateThreePokemon } from './pokemon/three-pokemon.js';
import { capturePokemon } from './local-storage-utils.js';
import { findByPokemonName } from './utils.js';


const button = document.getElementById('button');

function createPokemonDom() {
    const pokeLabel1 = document.getElementById('poke1-label');
    const pokeLabel2 = document.getElementById('poke2-label');
    const pokeLabel3 = document.getElementById('poke3-label');

    const pokeRadio1 = document.getElementById('poke-radio-1');
    const pokeRadio2 = document.getElementById('poke-radio-2');
    const pokeRadio3 = document.getElementById('poke-radio-3');

    const displayedPokemon = generateThreePokemon();

    const img1 = document.getElementById('poke1-image');

    img1.src = displayedPokemon[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = displayedPokemon[0].pokemon;

    const img2 = document.getElementById('poke2-image');

    img2.src = displayedPokemon[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = displayedPokemon[1].pokemon;

    const img3 = document.getElementById('poke3-image');

    img3.src = displayedPokemon[2].url_image;
    pokeLabel3.append(img3);
    pokeRadio3.value = displayedPokemon[2].pokemon;

}

createPokemonDom();

button.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input:checked');

    const pokeSelected = findByPokemonName(selectedRadioButton.value);

    console.log(pokeSelected);

    capturePokemon(pokeSelected);
    createPokemonDom();
});