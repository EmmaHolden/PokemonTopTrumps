import { useState } from "react";
import Card from "../card";
import { starterPokemon } from "../pokemonList";

interface ChooseStarterProps {
    starterChosen: boolean;
    setStarterChosen: any;
}

const ChooseStarter = ({starterChosen, setStarterChosen}: ChooseStarterProps) => {
    
    return ( 
        <div className = "cardsContainer">
            {starterPokemon.map((pokemon) => {
                return (
                    <div>
                        <Card starterChosen = {starterChosen} setStarterChosen = {setStarterChosen} pokemon = {pokemon} isDisabled/>
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default ChooseStarter;