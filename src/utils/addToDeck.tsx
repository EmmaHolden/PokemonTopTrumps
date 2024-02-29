import { useContext } from "react"
import { DeckContext, SetValue } from "../context/deckProvider"
import { Pokemon } from "../pokemonList"

export const addToDeck = (pokemon: Pokemon, deck: Pokemon[], setDeck: SetValue) => {
    if (deck.length < 6 && !deck.includes(pokemon)) {
        let newDeck = [...deck]
        newDeck.push(pokemon)
        setDeck(newDeck)
        console.log(deck)
    }
}