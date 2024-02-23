import { useState } from "react";
import { Pokemon } from "../pokemonList";
import classNames from 'classnames';
import Button from "./button";

interface CardProps {
    pokemon: Pokemon;  
    isDisabled?: boolean;
}

const Card = ({pokemon, isDisabled}: CardProps) => {

    type Stat = 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed'

    // const [clicked, setClicked] = useState<Stat[]>([])

    // const handleClick = (e: any) => {
    //     let stat: Stat = e.currentTarget.id;
    //     let newClicked = [...clicked]
    //     newClicked.push(stat)
    //     setClicked(newClicked)
    // }

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
        <div className = {classes}>
            <h2 className = "name">{pokemon.name.toUpperCase()}</h2>
            <img className="sprite" src={`../images/${pokemon.id}.png`} alt={`${pokemon.name}`}></img>
            <div className = "stat-button-group">
                <Button id = 'hp' variant = "stat">HP: {pokemon.hp}</Button>
                <Button id = 'attack' variant = "stat">Attack: {pokemon.attack}</Button>
                <Button id = 'defense' variant = "stat">Defense: {pokemon.defense}</Button>
                <Button id = 'specialAttack' variant = "stat">Special Attack: {pokemon.specialAttack}</Button>
                <Button id = 'specialDefense' variant = "stat">Special Defense: {pokemon.specialDefense}</Button>
                <Button id = 'speed' variant = "stat">Speed: {pokemon.speed}</Button>
            </div>
        </div>
     );
}
 
export default Card;