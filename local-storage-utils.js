import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';


export function getPokedex() {
    const stringifyPokedex = localStorage.getItem(POKEDEX);

    if (!stringifyPokedex) return [];

    const parsedPokedex = JSON.parse(stringifyPokedex);

    return parsedPokedex;
}


export function setPokedex(parsedPokedex) {
    const stringifyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringifyPokedex);
}


export function encounterPokemon(pokemon) {

    const pokedex = getPokedex();
                
    const doesPokemonMatch = findById(pokedex, pokemon.pokemon);

    if (doesPokemonMatch) {
        doesPokemonMatch.encountered++;
    } else {
        const createNewPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1,
        };

        pokedex.push(createNewPokedexItem);
    }

    setPokedex(pokedex);

    return pokedex;
}


export function capturePokemon(pokemon) {

    const pokedex = getPokedex();

    const doesPokemonMatch = findById(pokedex, pokemon.pokemon);

    doesPokemonMatch.captured++;

    setPokedex(pokedex);

    return pokedex;

}