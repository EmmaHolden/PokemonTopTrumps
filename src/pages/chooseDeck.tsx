import { useContext, useState } from "react";
import { Pokemon, allPokemon } from "../pokemonList";
import { DeckContext, SetValue } from "../context/deckProvider";
import { addToDeck } from "../utils/addToDeck";

interface ChooseDeckProps {

}

const ChooseDeck = ({}: ChooseDeckProps) => {

    const availableDeck: Pokemon[] = allPokemon;

    const {deck, setDeck} = useContext(DeckContext)

    return ( 
        <div>
            <p>Choose Active Deck!</p>
            <div className = "page-in-half">
                <span className = "pokemon-storage-box">
                    {availableDeck.map((card: Pokemon) => {
                        return <img onClick = {() => addToDeck(card, deck, setDeck)} className = "small-card" src={`../images/${card.id}.png`} alt={`The pokemon card of ${card.name}`}></img>
                    })}
                </span>
                <span className ="pokemon-storage-box">SECOND BOX</span>
            </div>
        </div>
     );
}
 
export default ChooseDeck;