import Card from "../components/card";
import { Pokemon, allPokemon } from "../pokemonList";


const Home = () => {
    const pokemon: Pokemon = allPokemon[56];

    return ( 
        <div className = "cards-arrows-container">
            <Card pokemon = {pokemon}/>
        </div>
     );
}
 
export default Home;