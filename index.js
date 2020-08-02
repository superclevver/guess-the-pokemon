const pokemonImg = document.querySelector('.pokemonImg');
const inputPokemon = document.querySelector('#input');
const title = document.querySelector('.title');

let randomPokemon = getRandomPokemon();

//Get input value
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        const value = input.value.trim();
        if (value === randomPokemon) {
            //Delete pokémon from array
            pokemons.splice(pokemons.indexOf(randomPokemon), 1);
            //If hide is on classList remove it
            pokemonImg.classList.toggle('hide');
            //Showing pokemon name in the title
            title.textContent = randomPokemon;
            setTimeout(() => {
                //Reset title
                title.textContent = "Who's that POKÉMON?"
                //Get the next random pokémon
                randomPokemon = getRandomPokemon();
                //Reset input
                input.value = "";
            }, 3000);
            
        }
    }
});

/**
 * Return random pokémon name.
 */
function getRandomPokemon() {
    let randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    console.log(`Current pokémon: ${randomPokemon}`);
    pokemonImg.src = `pokemon_imgs/${randomPokemon}.png`;
    pokemonImg.classList.toggle('hide');
    pokemonImg.alt = randomPokemon;
    return randomPokemon;
}
