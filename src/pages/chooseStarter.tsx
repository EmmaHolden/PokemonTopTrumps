import { starterPokemon } from "../pokemonList";
import Carousel from "../components/carousel";
import { useContext } from "react";
import { StarterContext } from "../context/StarterProvider";
import { useNavigate } from "react-router-dom";


const ChooseStarter = () => {
    
    const {starterChosen, setStarterChosen} = useContext(StarterContext)

    const navigate = useNavigate()

    const handleClick = () => {
        setStarterChosen(true)
        navigate("/")
    }
    return (
        <div>
            <div><img className = "title-image" src = "../images/choosePokemonTitle.png" alt="A title stating 'Choose your pokemon'"></img></div>
            <Carousel pokemonArray={starterPokemon} isDisabled onClick={handleClick}/>
        </div>
    )
}
 
export default ChooseStarter;