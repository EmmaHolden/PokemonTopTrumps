import { useState } from "react";
import Card from "../card";
import { starterPokemon } from "../pokemonList";

interface ChooseStarterProps {
    starterChosen: boolean;
    setStarterChosen: any;
}

const ChooseStarter = ({starterChosen, setStarterChosen}: ChooseStarterProps) => {

    const handleSubmit = () => {
        setStarterChosen(true)
    }
    
    return ( 
        <div className = "cardsContainer">
            {starterPokemon.map((pokemon) => {
                return (
                    <div onClick = {handleSubmit}>
                        <Card pokemon = {pokemon} isDisabled/>
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default ChooseStarter;