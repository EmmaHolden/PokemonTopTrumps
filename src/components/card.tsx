import { useContext, useState } from "react";
import { Pokemon } from "../pokemonList";
import Button from "./button";
import { StarterContext } from "../context/starterProvider";
import { DeckContext } from "../context/deckProvider";
import { addToActiveDeck } from "../utils/addToActiveDeck";
import { findElementClass } from "../utils/findElementClass";
import Name from "./cardName";
import Sprite from "./cardSprite";
import Stats from "./cardStats";
import CardContainer from "./cardContainer";

interface CardProps {
    pokemon: Pokemon;  
    size: 'small' | 'medium' | 'large';
}

const Card = ({pokemon, size}: CardProps) => {
    const {starterChosen, setStarterChosen} = useContext(StarterContext)
    const {activeDeck, setActiveDeck} = useContext(DeckContext)

    const handleClick = () => {
        if (!starterChosen){
            setStarterChosen(true)
            addToActiveDeck(pokemon, activeDeck, setActiveDeck)
        }
    }

    return ( 
        <div onClick = {handleClick}>
        <CardContainer pokemon = {pokemon} size = {size}>
            <Name pokemon = {pokemon}/>
            <Sprite pokemon = {pokemon}/>
            {size !== 'small' &&
            <Stats pokemon = {pokemon}/>
            }
        </CardContainer>   
        </div>  
     );
}
 
export default Card;