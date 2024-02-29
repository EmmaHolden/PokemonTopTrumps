import { useContext, useState } from "react";
import { Pokemon } from "../pokemonList";
import classNames from 'classnames';
import Button from "./button";
import { StarterContext } from "../context/StarterProvider";
import { DeckContext } from "../context/deckProvider";
import { addToDeck } from "../utils/addToDeck";

interface CardProps {
    pokemon: Pokemon;  
    isDisabled?: boolean;
}

const Card = ({pokemon, isDisabled}: CardProps) => {

    const {starterChosen, setStarterChosen} = useContext(StarterContext)
    const {deck, setDeck} = useContext(DeckContext)

    const handleClick = () => {
        if (!starterChosen){
            setStarterChosen(true)
            addToDeck(pokemon, deck, setDeck)
        }
    }

    const classes = classNames('card', {
        'bug-pokemon' : pokemon.element === 'bug',
        'dragon-pokemon' : pokemon.element === 'dragon',
        'electric-pokemon' : pokemon.element === 'electric',
        'fairy-pokemon' : pokemon.element === 'fairy',
        'fighting-pokemon' : pokemon.element === 'fighting',
        'fire-pokemon' : pokemon.element === 'fire',
        'ghost-pokemon' : pokemon.element === 'ghost',
        'grass-pokemon' : pokemon.element === 'grass',
        'ground-pokemon' : pokemon.element === 'ground',
        'ice-pokemon' : pokemon.element === 'ice',
        'normal-pokemon' : pokemon.element === 'normal',
        'poison-pokemon' : pokemon.element === 'poison',
        'psychic-pokemon' : pokemon.element === 'psychic',
        'rock-pokemon' : pokemon.element === 'rock',
        'water-pokemon' : pokemon.element === 'water',
    })

    return ( 
        <div className = {classes} onClick={handleClick}>
            <h2 className = "name">{pokemon.name.toUpperCase()}</h2>
            <img className="sprite" src={`../images/${pokemon.id}.png`} alt={`${pokemon.name}`}></img>
            <div className = "stat-button-group">
                <Button id = 'hp' variant = "stat" disabled={isDisabled}>HP: {pokemon.hp}</Button>
                <Button id = 'attack' variant = "stat" disabled={isDisabled}>Attack: {pokemon.attack}</Button>
                <Button id = 'defense' variant = "stat" disabled={isDisabled}>Defense: {pokemon.defense}</Button>
                <Button id = 'specialAttack' variant = "stat" disabled={isDisabled}>Special Attack: {pokemon.specialAttack}</Button>
                <Button id = 'specialDefense' variant = "stat" disabled={isDisabled}>Special Defense: {pokemon.specialDefense}</Button>
                <Button id = 'speed' variant = "stat" disabled={isDisabled}>Speed: {pokemon.speed}</Button>
            </div>
        </div>
     );
}
 
export default Card;