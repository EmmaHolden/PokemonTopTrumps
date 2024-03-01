import { useContext, useState } from "react";
import { Pokemon, allPokemon } from "../pokemonList";
import { DeckContext, SetValue } from "../context/deckProvider";
import { addToActiveDeck } from "../utils/addToActiveDeck";

interface ChooseDeckProps {

}

const ChooseDeck = ({}: ChooseDeckProps) => {

    const {activeDeck, setActiveDeck} = useContext(DeckContext)

    return ( 
        <div>
            <p>Choose Active Deck!</p>
            <div className = "page-in-half">
                <span className = "pokemon-storage-box">

                    {allPokemon.map((card: Pokemon, index) => {
                        return (
                        <div key={index}>
                        <button className = "remove-button-styling" disabled = {activeDeck.includes(card)} onClick = {() => addToActiveDeck(card, activeDeck, setActiveDeck)}><img className = "small-card" src={`../images/${card.id}.png`} alt={`The pokemon card of ${card.name}`}></img></button>
                        </div>
                        )
                    })}
                </span>
                <span className ="pokemon-storage-box">
                    {activeDeck.length > 0 && activeDeck.map((card: Pokemon, index) => {
                        return <img key = {index} onClick = {() => addToActiveDeck(card, activeDeck, setActiveDeck)} className = "small-card" src={`../images/${card.id}.png`} alt={`The pokemon card of ${card.name}`}></img>
                    })}
                </span>
            </div>
        </div>
     );
}
 
export default ChooseDeck;