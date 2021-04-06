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