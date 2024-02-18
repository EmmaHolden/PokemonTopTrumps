import { useState } from "react";
import Card from "./card";
import { starterPokemon } from "./pokemonList";


const ChooseStarter = () => {

    return ( 
        <div className = "cardsContainer">
            {starterPokemon.map((pokemon) => {
                return (
                    <div className = "starterCardContainer">
                        <Card pokemon = {pokemon} isDisabled/>
                        <button>Choose me</button>
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default ChooseStarter;