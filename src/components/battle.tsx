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
    playerPokemon: Pokemon[];
}

const Battle = ({enemyPokemon, playerPokemon}: BattleProps) => {
    const [arrayStats, setArrayStats] = useState({"hp": "unselected", "attack": "unselected", "defense": "unselected", "specialAttack": "unselected", "specialDefense": "unselected", "speed": "unselected"})
    const [playerTurn, setPlayerTurn] = useState(true)
    const [playerTurnString, setPlayerTurnString] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    const [wonRound, setWonRound] = useState("none")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    let currentPlayerPokemon = playerPokemon[0];

    const getRanNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const switchTurn = () => {
        let newPlayerTurn = !playerTurn
        let playerTurnString = `${newPlayerTurn}`
        setPlayerTurnString(playerTurnString)
        setPlayerTurn(newPlayerTurn)
    }

    function endGame() {
        if (playerTurn === false){
            const immediateGameOver = setTimeout(() => {
                setGameOver(true)
            }, 1000);
            return () => clearTimeout(immediateGameOver);
        } else {
            setIsDisabled(true)
            const gameOver = setTimeout(() => {
                setGameOver(true)
            }, 1000);
            return () => clearTimeout(gameOver);
        }

    }

    const checkStats = (stat: string) => {
        let newRemainingStats = arrayStats
        let playerStat = currentPlayerPokemon[stat as keyof Pokemon]
        let computerStat = enemyPokemon[stat as keyof Pokemon]
        if (playerStat > computerStat){
            setWonRound("player")
            newRemainingStats[stat as keyof statObj] = "player"
            let newPlayerScore = playerScore;
            newPlayerScore += 1;
            setPlayerScore(newPlayerScore)
        } else if (computerStat > playerStat){
            setWonRound("computer")
            newRemainingStats[stat as keyof statObj] = "computer"
            let newComputerScore = computerScore;
            newComputerScore += 1;
            setComputerScore(newComputerScore);
        } else if (computerStat === playerStat){
            setWonRound("draw")
            newRemainingStats[stat as keyof statObj] = "draw"
        }
        setArrayStats(newRemainingStats) 
        switchTurn()
    }

    const computerTurn = () => {
        const turnTimeOut = setTimeout(() => {
            const entries = Object.entries(arrayStats);
            let availableStats = entries.filter(([key, value]) => value === "unselected");
            console.log(availableStats.length)
            let index = getRanNum(0, availableStats.length - 1)
            checkStats(availableStats[index][0])
        }, 3000);
        return () => clearTimeout(turnTimeOut);
    }


    useEffect(() => {
        const entries = Object.entries(arrayStats);
        let availableStats = entries.filter(([key, value]) => value === "unselected");
        if (playerScore > 2){
           endGame()
        } else if (computerScore > 2 || availableStats.length < 1){
            if (playerPokemon.length > 1){
                    setPlayerTurn(true)
                    setPlayerTurnString("true")
                    const drawNewPokemon = setTimeout(() => {
                        playerPokemon.shift();
                        setComputerScore(0)
                        setPlayerScore(0)
                        currentPlayerPokemon = playerPokemon[0];
                        let newArrayStats = {"hp": "unselected", "attack": "unselected", "defense": "unselected", "specialAttack": "unselected", "specialDefense": "unselected", "speed": "unselected"};
                        setArrayStats(newArrayStats);
                    }, 1000);                    
                    return () => clearTimeout(drawNewPokemon);
            } else {endGame()}
        } else if (playerTurn === false){
            computerTurn()
        }
        
    }, [playerTurn])

    const checkVSAnimation = () => {
        if (wonRound === "player"){
            return "vs-player-success"
        } else if (wonRound === 'draw'){
            return "vs-draw"
        } else if (wonRound === "computer"){
            return "vs-computer-success"
        } else {
            return "no-attack"
        }
    }

    
    const checkCardAnimation = (card: string) => {
        if (card === "player"){
            if (wonRound === "player"){
                return "player-card-attack-success"
            } else if (wonRound === "computer"){
                return "card-hit-by-enemy"
            } else {
                return ""
            }
        } else if (card === "computer"){
            if (wonRound === "player"){
                return "card-hit-by-enemy"
            } else if (wonRound === "computer"){
                return "computer-card-attack-success"
            } else {
                return ""
            }  
        }
        }



    return (
        <div>
            <div className = "horizontal-container">

                <Button variant = 'card' className = {checkCardAnimation("player")}>
                    <CardContainer pokemon = {currentPlayerPokemon} size = "medium">
                        <Name pokemon = {currentPlayerPokemon}/>
                        <Sprite pokemon = {currentPlayerPokemon}/>
                        <InteractiveStats gameOver = {gameOver} pokemon = {currentPlayerPokemon} handleClick = {checkStats} arrayStats = {arrayStats} isDisabled = {isDisabled} playerTurn = {playerTurn} variant = "player"/>
                    </CardContainer>
                </Button>

                        <div key = {playerTurnString} className = "vertical-container">
                            {!gameOver && <img className = {checkVSAnimation()} src = "../images/vs.png"></img>}
                            {gameOver && <img src = {playerScore > computerScore ? '../images/win.png' : '../images/lose.png'} className = "winning-result"></img>}
                        </div>
                        
                <Button variant = 'card' className = {checkCardAnimation("computer")} >
                    <CardContainer pokemon = {enemyPokemon} size = "medium">
                        <Name pokemon = {enemyPokemon}/>
                        <Sprite pokemon = {enemyPokemon}/>
                        <InteractiveStats isDisabled = {isDisabled} gameOver = {gameOver} pokemon = {enemyPokemon} handleClick = {checkStats} arrayStats = {arrayStats} playerTurn = {playerTurn} variant = "enemy"/>
                    </CardContainer>
                </Button>
            </div>
            <div className = "horizontal-container margin-top-ten">
                {!gameOver && <div className = "third-horizontal-container"><img className = {!playerTurn ? "rotating-pokeball paused" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img><p className = {!playerTurn ? "turn-invisible" : "turn-visible"}>{`${currentPlayerPokemon.name}'s turn`}</p></div>}
                <div className = "second-horizontal-container"><img style = {{height: 100}} src = {`../images/number${playerScore}.png`}></img><img style = {{height: 100}} src = "../images/dash.png"></img><img style = {{height: 100}} src = {`../images/number${computerScore}.png`}></img></div>
                {!gameOver && <div className = "third-horizontal-container"><p className = {playerTurn ? "turn-invisible" : "turn-visible"}>{`${enemyPokemon.name}'s turn`}</p><img className = {playerTurn ? "rotating-pokeball paused" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img></div>}
            </div>
        </div>
    )

}

export default Battle;