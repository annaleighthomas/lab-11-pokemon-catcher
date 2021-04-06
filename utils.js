import pokeData from './pokemon/poke-data.js';
// pokedex
export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null; 
}


export function findByPokemonName(name) {
    for (let poke of pokeData) {
        if (poke.pokemon === name) {
            return poke;
        }
    }
}

