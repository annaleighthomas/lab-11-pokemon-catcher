## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps



main page will need
    // place to display results 
    ///display 3 pokemon choices connected oto radio buttons
    //a button to click

html
- div to display how many pokemon have been caught 
- 3 radio buttons <label>
                        <input type='radio' name='pokemon'>
                        <img />
                    </label>
- button to catch pokemon <button></button>



css 
- input {
    display: none;
}

- input:checked + img {
    border: solid 2px magenta
}


button to catch pokemon.

State
- encounters each time we see a pokemon 
- caught each time a a pokemon is caught 
    - const pokedex = []

javascript 
- interface PokeItem {
    id: string,
    captured: number,
    encountered: number
}

type Pokedex = Array<PokeItem>


state
- let captures = 0 

event handler 
- addEventHander('click', () => ) {
    - "send selected pokemon to the pokedex"
        1) figure out which pokemon is selected
        - capturePokemon(selectedPokemon)
    - increment captures state
    - check the captures state
        - if the captures state is 10, redirect
        - otherwiser generateThreePokemon
- onLoad
    - generateThreePokemon
}

functions 
- generateThreePokemon
    - start with raw array of pokemon data
    - Math.random() to get 3 random array indexes
        - make sure they're unique
            - WHILE they're not unique, get three new random numbers
    - use the three indexes to get three pokemon
    - increment the encountered property for all pokemon
            - ask: is it in the pokedex yet?
            - if not, `{ pokemon: 'ekans', captured: 0, encountered: 1 }`
            - if so, increment the encountered property
    - we'll put them in the DOM

javascript 
while (anyOfOurNumbersAreRepeats) {
    generateThreeNewNumbers()
}
```

- create local storage utils
    - getPokedex
    - encounterPokemon
    - capturePokemon


- capturePokemon(selectedPokemon)
    1) we need to grab our pokedex from localStorage
    2) increment the captured property for just this pokemon
