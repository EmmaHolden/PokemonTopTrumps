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
            {
            !starterChosen ?
            starterPokemon.map((pokemon) => {
                return (
                    <div className = "starterCardContainer">
                        <Card pokemon = {pokemon} isDisabled/>
                        <button onClick={handleSubmit}>Choose me</button>
                    </div>
                )
            })
            :
            <p>You have chosen your pokeys</p>
        }
        </div>
     );
}
 
export default Home;