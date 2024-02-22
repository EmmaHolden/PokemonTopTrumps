import { useState } from "react";
import Card from "../components/card";
import { Pokemon, starterPokemon, allPokemon } from "../pokemonList";


const Home = () => {
    const pokemon: Pokemon = allPokemon[56];

    return ( 
        <div className = "cardsContainer">
            <Card pokemon = {pokemon}/>
        </div>
     );
}
 
export default Home;