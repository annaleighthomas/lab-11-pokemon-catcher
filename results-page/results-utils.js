import { getPokedex } from '../local-storage-utils.js';



export function renderTableRow(POKEDEX) {

    const tr = document.createElement('tr');
    const tdPokemon = document.createElement('td');
    const tdEncountered = document.createElement('td');
    const tdCaptured = document.createElement('td');

    tdPokemon.textContent = POKEDEX.id;
    tdEncountered.textContent = POKEDEX.encountered;
    tdCaptured.textContent = POKEDEX.captured;

    tr.append(tdPokemon, tdEncountered, tdCaptured);

    return tr;
}

const pokedex = getPokedex();

const names = [];
const captured = [];
const encountered = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon Captured',
                data: captured,
                backgroundColor: '#FBEBD8',
                borderColor: '#E53C38',

                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data: encountered,
                backgroundColor: '#E53C38',
                borderColor: '#FBEBD8',

                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});