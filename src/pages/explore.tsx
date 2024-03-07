import { useContext, useState } from "react";
import { Pokemon } from "../pokemonList";
import { allPokemon } from "../pokemonList";
import Battle from "../components/battle";
import { DeckContext } from "../context/deckProvider";


interface ExploreProps {

}

const Explore = ({}: ExploreProps) => {

    const {activeDeck, setActiveDeck} = useContext(DeckContext)


    return ( 
        <div>
            <Battle enemyPokemon = {allPokemon[101]} playerPokemon = {activeDeck[0]}/>
        </div>
     );
}
 
export default Explore;