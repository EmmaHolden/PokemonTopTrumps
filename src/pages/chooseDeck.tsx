import { useContext, useState } from "react";
import { Pokemon, allPokemon } from "../pokemonList";
import { DeckContext, SetValue } from "../context/deckProvider";
import { addToActiveDeck } from "../utils/addToActiveDeck";

interface ChooseDeckProps {

}

const ChooseDeck = ({}: ChooseDeckProps) => {

    const availableDeck: Pokemon[] = allPokemon;

    const {activeDeck, setActiveDeck} = useContext(DeckContext)

    return ( 
        <div>
            <p>Choose Active Deck!</p>
            <div className = "page-in-half">
                <span className = "pokemon-storage-box">
                    {availableDeck.map((card: Pokemon) => {
                        return <img onClick = {() => addToActiveDeck(card, activeDeck, setActiveDeck)} className = "small-card" src={`../images/${card.id}.png`} alt={`The pokemon card of ${card.name}`}></img>
                    })}
                </span>
                <span className ="pokemon-storage-box">SECOND BOX</span>
            </div>
        </div>
     );
}
 
export default ChooseDeck;