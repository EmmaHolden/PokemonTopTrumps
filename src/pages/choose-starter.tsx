import { useState } from "react";
import { starterPokemon, allPokemon } from "../pokemonList";
import Carousel from "../components/carousel";


interface ChooseStarterProps {
    starterChosen: boolean;
    setStarterChosen: any;
}

const ChooseStarter = ({starterChosen, setStarterChosen}: ChooseStarterProps) => {

    const handleClick = () => {
        setStarterChosen(true)
    }
    return (
        <div className = "starterPageContainer">
            <div className = "titleContainer"><img className = "titleImage" src = "../images/choosePokemonTitle.png"></img></div>
            <Carousel pokemonArray={starterPokemon} isDisabled onClick={handleClick}/>
        </div>
    )
}
 
export default ChooseStarter;