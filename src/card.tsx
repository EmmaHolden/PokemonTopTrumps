import { useState } from "react";
import { Pokemon } from "./pokemonList";

interface CardProps {
    pokemon: Pokemon;  
    isDisabled?: boolean;
    starterChosen?: boolean;
    setStarterChosen?: any;
}
const Card = ({pokemon, isDisabled, starterChosen, setStarterChosen}: CardProps) => {

    type Stat = 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed'

    const [clicked, setClicked] = useState<Stat[]>([])

    const handleSubmit = () => {
        setStarterChosen(true)
    }

    const handleClick = (e: any) => {
        let stat: Stat = e.currentTarget.id;
        let newClicked = [...clicked]
        newClicked.push(stat)
        setClicked(newClicked)
    }

    return ( 
        <div className = "card">
            <h2>{pokemon.name}</h2>
            <img className="sprite" src={`../images/${pokemon.id}.png`}></img>
            <div className = "cardButtonGroup">
                <button id = 'hp' disabled={isDisabled ? true : clicked.includes('hp')} className = {clicked.includes('hp') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>HP: {pokemon.hp}</button>
                <button id = 'attack' disabled={isDisabled ? true : clicked.includes('attack')} className = {clicked.includes('attack') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Attack: {pokemon.attack}</button>
                <button id = 'defense' disabled={isDisabled ? true : clicked.includes('defense')} className = {clicked.includes('defense') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Defense: {pokemon.defense}</button>
                <button id = 'specialAttack' disabled={isDisabled ? true : clicked.includes('specialAttack')} className = {clicked.includes('specialAttack') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Special Attack: {pokemon.specialAttack}</button>
                <button id = 'specialDefense' disabled={isDisabled ? true : clicked.includes('specialDefense')} className = {clicked.includes('specialDefense') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Special Defense: {pokemon.specialDefense}</button>
                <button id = 'speed' disabled={isDisabled ? true : clicked.includes('speed')} className = {clicked.includes('speed') ? "clicked" : "button-stat"} onClick={(e) => handleClick(e)}>Speed: {pokemon.speed}</button>
            </div>
            {isDisabled && <button onClick = {handleSubmit}>Choose me</button>}
        </div>
     );
}
 
export default Card;