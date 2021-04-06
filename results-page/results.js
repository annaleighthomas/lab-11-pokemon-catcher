import { getPokedex } from '../local-storage-utils.js';
import { renderTableRow } from './results-utils.js'

const tBody = document.querySelector('tbody');
const resetButton = document.querySelector('#reset-button');


const pokedex = getPokedex();

for (let poke of pokedex) {

    const tr = renderTableRow(poke);

    tBody.append(tr);
}

resetButton.addEventListener('click', () => {
    localStorage.clear();

    window.location = '../';

});