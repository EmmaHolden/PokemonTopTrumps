import { useEffect, useState } from "react";
import { Pokemon } from "../pokemonList";
import Button from "./button";
import CardContainer from "./cardContainer";
import Name from "./cardName";
import Sprite from "./cardSprite";
import InteractiveStats from "./cardInteractiveStats";

export type statObj = {
    "hp": string,
    "attack": string,
    "defense": string,
    "specialAttack": string,
    "specialDefense": string,
    "speed": string,
}

interface BattleProps {
    enemyPokemon: Pokemon;
    playerPokemon: Pokemon;
}

const Battle = ({enemyPokemon, playerPokemon}: BattleProps) => {
    const [arrayStats, setArrayStats] = useState({"hp": "unselected", "attack": "unselected", "defense": "unselected", "specialAttack": "unselected", "specialDefense": "unselected", "speed": "unselected"})
    const [playerTurn, setPlayerTurn] = useState(true)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    const getRanNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const switchTurn = () => {
        let newPlayerTurn = !playerTurn
        setPlayerTurn(newPlayerTurn)
    }

    const checkStats = (stat: string) => {
        let newRemainingStats = arrayStats
        let playerStat = playerPokemon[stat as keyof Pokemon]
        let computerStat = enemyPokemon[stat as keyof Pokemon]
        if (playerStat > computerStat){
            newRemainingStats[stat as keyof statObj] = "player"
            let newPlayerScore = playerScore;
            newPlayerScore += 1;
            setPlayerScore(newPlayerScore)
        } else if (computerStat > playerStat){
            newRemainingStats[stat as keyof statObj] = "computer"
            let newComputerScore = computerScore;
            newComputerScore += 1;
            setComputerScore(newComputerScore);
        } else if (computerStat === playerStat){
            newRemainingStats[stat as keyof statObj] = "draw"
        }
        setArrayStats(newRemainingStats) 
        switchTurn()
    }

    const computerTurn = () => {
        setTimeout(() => {
            const entries = Object.entries(arrayStats);
            let availableStats = entries.filter(([key, value]) => value === "unselected");
            console.log(availableStats.length)
            let index = getRanNum(0, availableStats.length - 1)
            checkStats(availableStats[index][0])
        }, 3000);
    }


    useEffect(() => {
        const entries = Object.entries(arrayStats);
        let availableStats = entries.filter(([key, value]) => value === "unselected");
        if (playerScore > 2 || computerScore > 2 || availableStats.length < 1){
            setGameOver(true)
        } else if (playerTurn === false){
            computerTurn()
        }
    }, [playerTurn])


    return (
        <div>
            <div className = "horizontal-container">

                <Button variant = 'card' className = 'move'>
                    <CardContainer pokemon = {playerPokemon} size = "medium">
                        <Name pokemon = {playerPokemon}/>
                        <Sprite pokemon = {playerPokemon}/>
                        <InteractiveStats gameOver = {gameOver} pokemon = {playerPokemon} handleClick = {checkStats} arrayStats = {arrayStats} playerTurn = {playerTurn} variant = "player"/>
                    </CardContainer>
                </Button>

                        <div className = "vertical-container">
                            <img style = {{width: 300}} src = "../images/vs.png"></img>
                            {gameOver && <p className = "turn-visible">{playerScore > computerScore ? `${playerPokemon.name} wins!` : `${enemyPokemon.name} wins!`}</p>}
                        </div>
                        
                <Button variant = 'card'>
                    <CardContainer pokemon = {enemyPokemon} size = "medium">
                        <Name pokemon = {enemyPokemon}/>
                        <Sprite pokemon = {enemyPokemon}/>
                        <InteractiveStats gameOver = {gameOver} pokemon = {enemyPokemon} handleClick = {checkStats} arrayStats = {arrayStats} playerTurn = {playerTurn} variant = "enemy"/>
                    </CardContainer>
                </Button>
            </div>
            <div className = "horizontal-container margin-top-ten">
                {!gameOver && <div className = "third-horizontal-container"><img className = {!playerTurn ? "rotating-pokeball paused" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img><p className = {!playerTurn ? "turn-invisible" : "turn-visible"}>{`${playerPokemon.name}'s turn`}</p></div>}
                <div className = "second-horizontal-container"><img style = {{height: 100}} src = {`../images/number${playerScore}.png`}></img><img style = {{height: 100}} src = "../images/dash.png"></img><img style = {{height: 100}} src = {`../images/number${computerScore}.png`}></img></div>
                {!gameOver && <div className = "third-horizontal-container"><p className = {playerTurn ? "turn-invisible" : "turn-visible"}>{`${enemyPokemon.name}'s turn`}</p><img className = {playerTurn ? "rotating-pokeball paused" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img></div>}
            </div>
        </div>
    )

}

export default Battle;