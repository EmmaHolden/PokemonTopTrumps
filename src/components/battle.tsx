import { useState } from "react";
import { Pokemon } from "../pokemonList";

import Button from "./button";
import BattleCard from "./battleCard";

interface BattleProps {
    enemyPokemon: Pokemon;
    playerPokemon: Pokemon;
}

const Battle = ({enemyPokemon, playerPokemon}: BattleProps) => {
    const [remainingStats, setRemainingStats] = useState(['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'])
    const [playerTurn, setPlayerTurn] = useState(true)
    const [playerWon, setPlayerWon] = useState([''])
    const [computerWon, setComputerWon] = useState([''])

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
                <Button variant = 'card'><BattleCard pokemon = {playerPokemon} enemy = {false} remainingStats={remainingStats} playerWon = {playerWon} computerWon = {computerWon}/></Button>
                <Button variant = 'card'><BattleCard pokemon = {enemyPokemon} enemy remainingStats={remainingStats} playerWon = {playerWon} computerWon = {computerWon}/></Button>
            </div>
            <div className = "stat-select-button-group">
                <Button disabled = {!remainingStats.includes("hp")} onClick = {() => checkStats("hp")}variant = "stat" id = "hp">HP</Button>
                <Button disabled = {!remainingStats.includes("attack")} onClick = {() => checkStats("attack")} variant = "stat" id = "attack">Attack</Button>
                <Button disabled = {!remainingStats.includes("defense")} onClick = {() => checkStats("defense")} variant = "stat" id = "defense">Defense</Button>
                <Button disabled = {!remainingStats.includes("specialAttack")} onClick = {() => checkStats("specialAttack")} variant = "stat" id = "special-attack">Special Attack</Button>
                <Button disabled = {!remainingStats.includes("specialDefense")} onClick = {() => checkStats("specialDefense")} variant = "stat" id = "special-defense">Special Defense</Button>
                <Button disabled = {!remainingStats.includes("speed")} onClick = {() => checkStats("speed")} variant = "stat" id = "speed">Speed</Button>
            </div>
        </div>
    )

}

export default Battle;