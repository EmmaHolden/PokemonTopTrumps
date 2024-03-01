import { useContext } from "react"
import { DeckContext, SetValue } from "../context/deckProvider"
import { Pokemon } from "../pokemonList"

export const addToActiveDeck = (pokemon: Pokemon, activeDeck: Pokemon[], setActiveDeck: SetValue) => {
    console.log("ACTIVE DECK:")
    console.log(activeDeck)
    console.log("FIRST ITEM IN ACTIVE DECK")
    console.log(activeDeck[0])
    console.log("POKEMON PASSED IN")
    console.log(pokemon)
    console.log(activeDeck.includes(pokemon))
    if (activeDeck.length < 6 && !activeDeck.includes(pokemon)) {
        let newActiveDeck = [...activeDeck]
        newActiveDeck.push(pokemon)
        setActiveDeck(newActiveDeck)
    }
}