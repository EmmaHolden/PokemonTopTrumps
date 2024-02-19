import { useState } from "react";
import { Pokemon } from "./pokemonList";
import classNames from 'classnames';

interface CardProps {
    pokemon: Pokemon;  
    isDisabled?: boolean;
}

const Card = ({pokemon, isDisabled}: CardProps) => {

    type Stat = 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed'

    const [clicked, setClicked] = useState<Stat[]>([])

    const handleClick = (e: any) => {
        let stat: Stat = e.currentTarget.id;
        let newClicked = [...clicked]
        newClicked.push(stat)
        setClicked(newClicked)
    }

    const classes = classNames('card', {
        'bug-pokemon' : pokemon.element === 'bug',
        'dragon-pokemon' : pokemon.element === 'dragon',
        'electric-pokemon' : pokemon.element === 'electric',
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
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.element}</h2>
            <img className="sprite" src={`../images/${pokemon.id}.png`}></img>
            <div className = "cardButtonGroup">
                <button id = 'hp' disabled={isDisabled ? true : clicked.includes('hp')} className = {clicked.includes('hp') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>HP: {pokemon.hp}</button>
                <button id = 'attack' disabled={isDisabled ? true : clicked.includes('attack')} className = {clicked.includes('attack') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Attack: {pokemon.attack}</button>
                <button id = 'defense' disabled={isDisabled ? true : clicked.includes('defense')} className = {clicked.includes('defense') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Defense: {pokemon.defense}</button>
                <button id = 'specialAttack' disabled={isDisabled ? true : clicked.includes('specialAttack')} className = {clicked.includes('specialAttack') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Special Attack: {pokemon.specialAttack}</button>
                <button id = 'specialDefense' disabled={isDisabled ? true : clicked.includes('specialDefense')} className = {clicked.includes('specialDefense') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Special Defense: {pokemon.specialDefense}</button>
                <button id = 'speed' disabled={isDisabled ? true : clicked.includes('speed')} className = {clicked.includes('speed') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Speed: {pokemon.speed}</button>
            </div>
        </div>
     );
}
 
export default Card;