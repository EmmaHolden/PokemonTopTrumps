import { useContext, useState } from "react";
import { Pokemon } from "../pokemonList";
import { allPokemon } from "../pokemonList";
import Battle from "../components/battle";
import { DeckContext } from "../context/deckProvider";
import { useParams } from "react-router-dom";



const WildBattle = () => {
    // Caterpie, Weedle, Metapod, Kakuna, Pikachu
    const viridianForestPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 10 || pokemon.id === 11 || pokemon.id === 13 || pokemon.id === 14 || pokemon.id === 25 || pokemon.id === 16)

    // Zubat, Geodude, Sandshrew, Clefairy, Paras
    const mtMoonPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 41 || pokemon.id === 74 || pokemon.id === 27 || pokemon.id === 35 || pokemon.id === 46)

    // Gastly, Haunter, Cubone, Rattata, 
    const lavenderTowerPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 92 || pokemon.id === 93 || pokemon.id === 104 || pokemon.id === 19)

    // Pikachu, Raichu, Magnemite, Magneton, Grimer, Muk, Voltorb, Electabuzz 
    const powerPlantPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 25 || pokemon.id === 26 || pokemon.id === 81 || pokemon.id === 82 || pokemon.id === 88 || pokemon.id === 89 || pokemon.id === 100 || pokemon.id === 125)

    // Zubat, Geodude, Machop, Onix
    const rockTunnelPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 41 || pokemon.id === 74 || pokemon.id === 66 || pokemon.id === 95)

    // Magikarp, Poliwag, Goldeen, Tentacool, Shellder, Horsea, Staryu
    const cinnabarIslandPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 129 || pokemon.id === 60 || pokemon.id === 118 || pokemon.id === 72 || pokemon.id === 90 || pokemon.id === 116 || pokemon.id === 120)

    const shuffle = (array: Pokemon[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 

    function getPokemon(location: string | undefined){
        if (location === "viridian-forest"){
            return viridianForestPokemon;
        } else if (location === "lavender-town"){
            return lavenderTowerPokemon;
        } else if (location === "mt-moon"){
            return mtMoonPokemon;
        } else if (location === "power-plant"){
            return powerPlantPokemon;
        } else if (location === "rock-tunnel"){
            return rockTunnelPokemon;
        } else if (location === "cinnabar-island"){
            return cinnabarIslandPokemon;
        } else {
            return allPokemon
        }
    }
    const { location } = useParams()

    const {activeDeck, setActiveDeck} = useContext(DeckContext)

    const enemyPokemonArray = getPokemon(location)
    const shuffledEnemies = shuffle(enemyPokemonArray);


    return ( 
        <div>
            <Battle enemyPokemon = {shuffledEnemies[0]} playerPokemon = {activeDeck[0]}/>
        </div>
     );
}
 
export default WildBattle