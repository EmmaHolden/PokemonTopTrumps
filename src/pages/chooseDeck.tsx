import { useContext } from "react";
import { Pokemon, allPokemon } from "../pokemonList";
import { DeckContext } from "../context/deckProvider";
import { addToActiveDeck } from "../utils/addToActiveDeck";
import { removeFromActiveDeck } from "../utils/removeFromActiveDeck";
import Button from "../components/button";

interface ChooseDeckProps {

}

const ChooseDeck = ({}: ChooseDeckProps) => {

    const {activeDeck, setActiveDeck} = useContext(DeckContext)
    const activeDeckIds = activeDeck.map(pokemon => pokemon.id)
    
    return ( 
        <div>
            <div><img className = "title-image" src = "../images/chooseTeamTitle.png" alt="A title stating 'Choose your team'"></img></div>
            <div className = "page-in-half">
                <span className = "pokemon-storage-box">

                    {allPokemon.map((card: Pokemon, index) => {
                        return (
                        <div key={index}>
                        <Button variant = 'card' disabled = {activeDeckIds.includes(card.id)} onClick = {() => addToActiveDeck(card, activeDeck, setActiveDeck)}><img className = "small-card" src={`../images/${card.id}.png`} alt={`The pokemon card of ${card.name}`}></img></Button>
                        </div>
                        )
                    })}
                </span>
                <span className ="active-pokemon-storage-box">
                    {activeDeck.length > 0 && activeDeck.map((card: Pokemon, index) => {
                        return (
                        <div key={index}>
                            <Button variant = 'card' disabled = {activeDeck.length < 2} onClick = {() => removeFromActiveDeck(card, activeDeck, setActiveDeck)}><img className = "small-card" src={`../images/${card.id}.png`} alt={`The pokemon card of ${card.name}`}></img></Button>
                        </div>
                    )})}
                </span>
            </div>
            <div className = "choose-deck-titles"><h2 className = "heading-120">{"Pokemon Storage System"}</h2><h2 className = "heading-80">{"Active Deck (Maximum of 6)"}</h2></div>
        </div>
     );
}
 
export default ChooseDeck;