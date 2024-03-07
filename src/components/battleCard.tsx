import { MouseEventHandler, useContext, useState } from "react";
import { Pokemon } from "../pokemonList";
import classNames from 'classnames';
import { DeckContext } from "../context/deckProvider";
import { findElementClass } from "../utils/findElementClass";
import CardContainer from "./cardContainer";
import Name from "./cardName";
import Sprite from "./cardSprite";
import Button from "./button";

interface BattleCardProps {
    pokemon: Pokemon;  
    enemy: boolean;
    remainingStats: string[];
    playerWon: string[];
    computerWon: string[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BattleCard = ({pokemon, enemy, remainingStats, playerWon, computerWon}: BattleCardProps) => {

    const {activeDeck, setActiveDeck} = useContext(DeckContext)

    const statId = (stat: string, role: string) => {
        if (role === "player"){
            if (playerWon?.includes(stat)){
                return "stat-won"
            } else if (computerWon?.includes(stat)){
                return "stat-lost"
            } else if (!remainingStats?.includes(stat)) {
                return "stat-draw"
            }

        } else {
            if (playerWon?.includes(stat)){
                return "stat-lost"
            } else if (computerWon?.includes(stat)){
                return "stat-won"
            } else if (!remainingStats?.includes(stat)){
                return "stat-draw"
            }

        }
    }


    return ( 
        <CardContainer pokemon = {pokemon} size = "medium">
            <Name pokemon = {pokemon}/>
            <Sprite pokemon = {pokemon}/>

            <div className = "stat-button-group">
                {enemy ?
                <div>
                <p className = "stat" id = {statId("hp", "enemy")}>{remainingStats?.includes('hp') ? `HP: ?` :  `HP: ${pokemon.hp}` }</p>
                <p className = "stat" id = {statId("attack", "enemy")}>{remainingStats?.includes('attack') ? `Attack: ?` : `Attack: ${pokemon.attack}`}</p>
                <p className = "stat" id = {statId("defense", "enemy")}>{remainingStats?.includes('defense') ? `Defense: ?` : `Defense: ${pokemon.defense}`}</p>
                <p className = "stat" id = {statId("specialAttack", "enemy")}>{remainingStats?.includes('specialAttack') ? `Special Attack: ?` : `Special Attack: ${pokemon.specialAttack}`}</p>
                <p className = "stat" id = {statId("specialDefense", "enemy")}>{remainingStats?.includes('specialDefense') ? `Special Defense: ?` : `Special Defense: ${pokemon.specialDefense}`}</p>
                <p className = "stat" id = {statId("speed", "enemy")}>{remainingStats?.includes('speed') ? `Speed: ?` : `Speed: ${pokemon.speed}`}</p>
                </div>
                :
                <div>
                <p className = "stat" id = {statId("hp", "player")}>HP: {pokemon.hp}</p>
                <p className = "stat" id = {statId("attack", "player")}>Attack: {pokemon.attack}</p>
                <p className = "stat" id = {statId("defense", "player")}>Defense: {pokemon.defense}</p>
                <p className = "stat" id = {statId("specialAttack", "player")}>Special Attack: {pokemon.specialAttack}</p>
                <p className = "stat" id = {statId("specialDefense", "player")}>Special Defense: {pokemon.specialDefense}</p>
                <p className = "stat" id = {statId("speed", "player")}>Speed: {pokemon.speed}</p>
                </div>
                }
            </div>
        </CardContainer>
     );
}
 
export default BattleCard;