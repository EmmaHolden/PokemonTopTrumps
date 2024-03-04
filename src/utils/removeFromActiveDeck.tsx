import { SetValue } from "../context/deckProvider"
import { Pokemon } from "../pokemonList"

export const removeFromActiveDeck = (pokemon: Pokemon, activeDeck: Pokemon[], setActiveDeck: SetValue) => {
    const index = activeDeck.indexOf(pokemon)
    let newActiveDeck = [...activeDeck]
    newActiveDeck.splice(index, 1)
    setActiveDeck(newActiveDeck)
}