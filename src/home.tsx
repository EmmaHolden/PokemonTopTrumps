import { useState } from "react";
import Card from "./card";
import { starterPokemon } from "./pokemonList";


const Home = () => {
    const [starterChosen, setStarterChosen] = useState(false);
    
    function handleSubmit(): void {
        setStarterChosen(true)
    }

    return ( 
        <div className = "cardsContainer">
            <p>You have chosen your pokeys</p>
        </div>
     );
}
 
export default Home;