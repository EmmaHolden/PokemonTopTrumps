import { useState } from "react";
import Card from "../card";
import { starterPokemon } from "../pokemonList";


const ChooseStarter = ({starterChosen, setStarterChosen}: {starterChosen: boolean, setStarterChosen: any}) => {

    const handleClick = () => {
        setStarterChosen(true)
    }
    
    return ( 
        <div className = "cardsContainer">
            {starterPokemon.map((pokemon) => {
                return (
                    <div className = "starterCardContainer">
                        <Card pokemon = {pokemon} isDisabled/>
                        <button onClick = {handleClick}>Choose me</button>
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default ChooseStarter;