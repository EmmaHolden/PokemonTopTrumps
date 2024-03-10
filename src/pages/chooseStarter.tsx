import { starterPokemon } from "../pokemonList";
import Carousel from "../components/carousel";

const ChooseStarter = () => {

    return (
        <div>
            <div><img className = "title-image" src = "../images/choosePokemonTitle.png" alt="A title stating 'Choose your pokemon'"></img></div>
            <Carousel pokemonArray={starterPokemon}/>
        </div>
    )
}
 
export default ChooseStarter;