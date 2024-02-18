import { useState } from "react";
import Card from "../card";
import { Pokemon, starterPokemon, allPokemon } from "../pokemonList";


const Home = () => {
    const [starterChosen, setStarterChosen] = useState(false);
    const pokemon: Pokemon = allPokemon[56];
    
    function handleSubmit(): void {
        setStarterChosen(true)
    }

    return ( 
        <div className = "cardsContainer">
            <Card pokemon = {pokemon}/>
        </div>
     );
}
 
export default Home;