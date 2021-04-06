import pokeData from './poke-data.js';
import { encounterPokemon } from '../local-storage-utils.js';

function getRandomPokeIndex() {
    return Math.floor(Math.random() * pokeData.length);
}

export function generateThreePokemon() {

    let randomnum1 = getRandomPokeIndex();
    let randomnum2 = getRandomPokeIndex();
    let randomnum3 = getRandomPokeIndex();

    while (
        randomnum1 === randomnum2
        || randomnum2 === randomnum3
        || randomnum1 === randomnum3
    ) { 
        randomnum1 = getRandomPokeIndex();
        randomnum2 = getRandomPokeIndex();
        randomnum3 = getRandomPokeIndex();
    }

    const poke1 = pokeData[randomnum1];
    const poke2 = pokeData[randomnum2];
    const poke3 = pokeData[randomnum3];

    return [poke1, poke2, poke3];
}
