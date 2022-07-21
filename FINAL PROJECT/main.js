//BUTTONS
const getPokemonButton = document.getElementById("select")
const getRandomPokemon = document.getElementById("getRand")
const fight = document.getElementById("fight")

//When loading the browser the first time we need to show a pokemon, 
//  so we are going to show Bulbasaur (ID = 1)
function init () {
    fetchPokemonRandom(1)
    fetchPokemonSelected(1)
}

getRandomPokemon.addEventListener("click", () => {
    //Getting a random numnber between 1 and 150
    const getRandom = random(1, 151)
    //Sending the pokemon's ID to the function in order to display the results
    fetchPokemonRandom(getRandom)
})

getPokemonButton.addEventListener("click", () => {
    //Getting the number/ID of the pokemon from the user's input
    const pokemon = document.getElementById("pokemon-id").value
    //Sending the pokemon's ID to the function in order to display the results
    fetchPokemonSelected(pokemon)
})



//FUNCTION get a random number between two numbers 
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

//FUNCTION to get the pokemon selected by the user
const fetchPokemonSelected = async (id) => {

    try {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    //Setting the pokemon's image
    const card = document.querySelector('.card-pokemon-image')
    card.setAttribute('src', data.sprites.other.dream_world.front_default)
    //Pokemon's name
    const name = document.querySelector('.card-pokemon-name')
    name.innerHTML = data.name
    //Pokemon's health points
    const healthPoints = document.querySelector('.card-pokemon-hp')
    healthPoints.innerHTML = data.stats[0].base_stat
    //Pokemon's attack points
    const attack = document.querySelector('.card-pokemon-attack')
    attack.innerHTML = data.stats[1].base_stat
    //Pokemon's defense points
    const defense = document.querySelector('.card-pokemon-defense')
    defense.innerHTML = data.stats[2].base_stat
    }

    catch(error) {  console.error(error) }

}

//FUNCTION to get a random pokemon
const fetchPokemonRandom = async (id) => {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        //Setting the random pokemon's image
        const card = document.querySelector('.card-random-image')
        card.setAttribute('src', data.sprites.other.dream_world.front_default)
        //Random pokemon's name
        const name = document.querySelector('.card-random-name')
        name.innerHTML = data.name
        //Random pokemon's health points
        const healthPoints = document.querySelector('.card-random-hp')
        healthPoints.innerHTML = data.stats[0].base_stat
        //Random pokemon's attack points
        const attack = document.querySelector('.card-random-attack')
        attack.innerHTML = data.stats[1].base_stat
        //Random pokemon's defense points
        const defense = document.querySelector('.card-random-defense')
        defense.innerHTML = data.stats[2].base_stat
    }

    catch(error) {  console.error(error) }
}

//Let's fight!
fight.addEventListener("click", () => {
    
    //Creating the object for your pokemon
    const player1 = {
        hp: document.querySelector('.card-pokemon-hp').textContent,
        attack: document.querySelector('.card-pokemon-attack').textContent,
        defense: document.querySelector('.card-pokemon-defense').textContent
    }

    //Object for your opponent
    const player2 = {
        hp: document.querySelector('.card-random-hp').textContent,
        attack: document.querySelector('.card-random-attack').textContent,
        defense: document.querySelector('.card-random-defense').textContent
    }

    //Who causes the most damage??
    let p1 = player1.hp - (player2.attack - player1.defense)
    let p2 = player2.hp - (player1.attack - player2.defense)

    //If you have more health at the end of the fight, then..
    if (p1 > p2){
        document.querySelector('.fightResult').innerHTML = "YOU WIN! :)"
    }

    //If you both get the same health points, then...
    else if (p1 == p2){
        document.querySelector('.fightResult').innerHTML = "DRAW"
    }

    //But if you have less health at the end of the fight, then...
    else {
        document.querySelector('.fightResult').innerHTML = "YOU LOSE! :("
    }
});