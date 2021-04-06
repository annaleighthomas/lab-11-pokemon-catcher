import pokeData from './poke-data.js';
import { encounterPokemon } from '../local-storage-utils.js';

function getRandomPokeIndex() {
    return Math.floor(Math.random() * pokeData.length);
}

export function generateThreePokemon() {

    let randomNum1 = getRandomPokeIndex();
    let randomNum2 = getRandomPokeIndex();
    let randomNum3 = getRandomPokeIndex();

    while (
        randomNum1 === randomNum2
        || randomNum2 === randomNum3
        || randomNum1 === randomNum3
    ) { 
        randomNum1 = getRandomPokeIndex();
        randomNum2 = getRandomPokeIndex();
        randomNum3 = getRandomPokeIndex();
    }

    const poke1 = pokeData[randomNum1];
    const poke2 = pokeData[randomNum2];
    const poke3 = pokeData[randomNum3];

    encounterPokemon(poke1);
    encounterPokemon(poke2);
    encounterPokemon(poke3);

    return [poke1, poke2, poke3];
}
