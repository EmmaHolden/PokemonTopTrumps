import { useState } from "react";
import { Pokemon } from "./pokemonList";

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
        console.log(pokemon[stat])
    }

    return ( 
        <div className = "card">
            <p>{pokemon.name}</p>
            <img style = {{width: 150}} src={`../images/${pokemon.id}.png`}></img>
            <div className = "cardButtonGroup">
                <button id = 'hp' disabled={isDisabled ? true : clicked.includes('hp')} className = 'button-stat' onClick={(e) => handleClick(e)}>HP: {pokemon.hp}</button>
                <button id = 'attack' disabled={isDisabled ? true : clicked.includes('attack')} className = 'button-stat' onClick={(e) => handleClick(e)}>Attack: {pokemon.attack}</button>
                <button id = 'defense' disabled={isDisabled ? true : clicked.includes('defense')} className = 'button-stat' onClick={(e) => handleClick(e)}>Defense: {pokemon.defense}</button>
                <button id = 'specialAttack' disabled={isDisabled ? true : clicked.includes('specialAttack')} className = 'button-stat' onClick={(e) => handleClick(e)}>Special Attack: {pokemon.specialAttack}</button>
                <button id = 'specialDefense' disabled={isDisabled ? true : clicked.includes('specialDefense')} className = 'button-stat' onClick={(e) => handleClick(e)}>Special Defense: {pokemon.specialDefense}</button>
                <button id = 'speed' disabled={isDisabled ? true : clicked.includes('speed')} className = 'button-stat' onClick={(e) => handleClick(e)}>Speed: {pokemon.speed}</button>
            </div>
        </div>
     );
}
 
export default Card;