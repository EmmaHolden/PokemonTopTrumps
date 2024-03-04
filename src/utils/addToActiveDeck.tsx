import { SetValue } from "../context/deckProvider"
import { Pokemon } from "../pokemonList"

export const addToActiveDeck = (pokemon: Pokemon, activeDeck: Pokemon[], setActiveDeck: SetValue) => {
    if (activeDeck.length < 6) {
        let newActiveDeck = [...activeDeck]
        newActiveDeck.push(pokemon)
        setActiveDeck(newActiveDeck)
    }
}