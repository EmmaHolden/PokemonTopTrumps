import { useState } from "react";
import { Pokemon } from "../pokemonList";
import Button from "./button";
import CardContainer from "./cardContainer";
import Name from "./cardName";
import Sprite from "./cardSprite";

interface BattleProps {
    enemyPokemon: Pokemon;
    playerPokemon: Pokemon;
}

const Battle = ({enemyPokemon, playerPokemon}: BattleProps) => {
    const [remainingStats, setRemainingStats] = useState(['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'])
    const [playerTurn, setPlayerTurn] = useState(true)
    const [playerWon, setPlayerWon] = useState([''])
    const [computerWon, setComputerWon] = useState([''])

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
    

    const checkStats = (stat: string) => {
        if (remainingStats.includes(stat)){
            let newRemainingStats = [...remainingStats]
            let index = remainingStats.indexOf(stat)
            newRemainingStats.splice(index, 1)
            setRemainingStats(newRemainingStats)
            let playerScore = playerPokemon[stat as keyof Pokemon]
            let computerScore = enemyPokemon[stat as keyof Pokemon]
            if (playerScore > computerScore){
                let newPlayerWon = [...playerWon]
                newPlayerWon.push(stat)
                setPlayerWon(newPlayerWon)
            } else if (computerScore > playerScore){
                let newComputerWon = [...computerWon]
                newComputerWon.push(stat)
                setComputerWon(newComputerWon)
            } 
        }


    }

    return (
        <div>
            <div className = "horizontal-container">
                <Button variant = 'card'>
                    <CardContainer pokemon = {playerPokemon} size = "medium">
                        <Name pokemon = {playerPokemon}/>
                        <Sprite pokemon = {playerPokemon}/>
                        <div>
                        {remainingStats.includes("hp") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("hp")}variant = "stat" id = "hp">HP: {playerPokemon.hp}</Button> 
                        :
                        <Button disabled variant = "stat" id = {statId("hp", "player")}>HP: {playerPokemon.hp}</Button>
                        }

                        {remainingStats.includes("attack") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("attack")}variant = "stat" id = "attack">Attack: {playerPokemon.attack}</Button> 
                        :
                        <Button disabled variant = "stat" id = {statId("attack", "player")}>Attack: {playerPokemon.attack}</Button>
                        }

                        {remainingStats.includes("defense") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("defense")}variant = "stat" id = "defense">Defense: {playerPokemon.defense}</Button> 
                        :
                        <Button disabled variant = "stat" id = {statId("defense", "player")}>Defense: {playerPokemon.defense}</Button>
                        }

                        {remainingStats.includes("specialAttack") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("specialAttack")}variant = "stat" id = "special-attack">Special Attack: {playerPokemon.specialAttack}</Button> 
                        :
                        <Button disabled variant = "stat" id = {statId("specialAttack", "player")}>Special Attack: {playerPokemon.specialAttack}</Button>
                        }

                        {remainingStats.includes("specialDefense") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("specialDefense")}variant = "stat" id = "special-defense">Special Defense: {playerPokemon.specialDefense}</Button> 
                        :
                        <Button disabled variant = "stat" id = {statId("specialDefense", "player")}>Special Defense: {playerPokemon.specialDefense}</Button>
                        }

                        {remainingStats.includes("speed") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("speed")}variant = "stat" id = "speed">Speed: {playerPokemon.speed}</Button> 
                        :
                        <Button disabled variant = "stat" id = {statId("speed", "player")}>Speed: {playerPokemon.speed}</Button>
                        }
                        </div>
                    </CardContainer>
                </Button>

                <Button variant = 'card'>
                    <CardContainer pokemon = {enemyPokemon} size = "medium">
                        <Name pokemon = {enemyPokemon}/>
                        <Sprite pokemon = {enemyPokemon}/>
                        <div>
                            <p className = "enemy-stat" id = {statId("hp", "enemy")}>{remainingStats?.includes('hp') ? `HP: ?` :  `HP: ${enemyPokemon.hp}` }</p>
                            <p className = "enemy-stat" id = {statId("attack", "enemy")}>{remainingStats?.includes('attack') ? `Attack: ?` : `Attack: ${enemyPokemon.attack}`}</p>
                            <p className = "enemy-stat" id = {statId("defense", "enemy")}>{remainingStats?.includes('defense') ? `Defense: ?` : `Defense: ${enemyPokemon.defense}`}</p>
                            <p className = "enemy-stat" id = {statId("specialAttack", "enemy")}>{remainingStats?.includes('specialAttack') ? `Special Attack: ?` : `Special Attack: ${enemyPokemon.specialAttack}`}</p>
                            <p className = "enemy-stat" id = {statId("specialDefense", "enemy")}>{remainingStats?.includes('specialDefense') ? `Special Defense: ?` : `Special Defense: ${enemyPokemon.specialDefense}`}</p>
                            <p className = "enemy-stat" id = {statId("speed", "enemy")}>{remainingStats?.includes('speed') ? `Speed: ?` : `Speed: ${enemyPokemon.speed}`}</p>
                        </div>
                    </CardContainer>
                </Button>
            </div>
        </div>
    )

}

export default Battle;