import { starterPokemon } from "../pokemonList";
import Carousel from "../components/carousel";
import { useContext } from "react";
import { StarterContext } from "../context/StarterProvider";
import { useNavigate } from "react-router-dom";
import { DeckContext } from "../context/deckProvider";


const ChooseStarter = () => {

    return (
        <div>
            <div><img className = "title-image" src = "../images/choosePokemonTitle.png" alt="A title stating 'Choose your pokemon'"></img></div>
            <Carousel pokemonArray={starterPokemon} isDisabled/>
        </div>
    )
}
 
export default ChooseStarter;