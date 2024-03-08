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

    const getRanNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const switchTurn = () => {
        let newPlayerTurn = !playerTurn
        setPlayerTurn(newPlayerTurn)
        
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
        switchTurn()
    }

    const computerTurn = () => {
        setTimeout(() => {
        checkStats(remainingStats[0])
    }, getRanNum(1000, 3000));
    }


    if (playerTurn === false){
        computerTurn()
    }

    const checkImage = (role: string, stat: string) => {
        if (role === "player"){
            if (playerWon.includes(stat)){
                return "../images/check.png"
            } else if (computerWon.includes(stat)){
                return "../images/cross.png"
            } else {
                return "../images/equal.png"
            }
        } else {
            if (computerWon.includes(stat)){
                return "../images/check.png"
            } else if (playerWon.includes(stat)){
                return "../images/cross.png"
            } else {
                return "../images/equal.png"
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
                        <div className = "player-stat-button-group">
                        {remainingStats.includes("hp") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("hp")}variant = "stat" id = "hp"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> HP: {playerPokemon.hp}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "hp")}></img> HP: {playerPokemon.hp}</div></Button>
                        }

                        {remainingStats.includes("attack") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("attack")}variant = "stat" id = "attack"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> Attack: {playerPokemon.attack}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "attack")}></img> Attack: {playerPokemon.attack}</div></Button>
                        }

                        {remainingStats.includes("defense") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("defense")}variant = "stat" id = "defense"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> Defense: {playerPokemon.defense}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "defense")}></img> Defense: {playerPokemon.defense}</div></Button>
                        }

                        {remainingStats.includes("specialAttack") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("specialAttack")}variant = "stat" id = "special-attack"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> Sp. Attack: {playerPokemon.specialAttack}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "specialAttack")}></img> Sp. Attack: {playerPokemon.specialAttack}</div></Button>
                        }

                        {remainingStats.includes("specialDefense") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("specialDefense")}variant = "stat" id = "special-defense"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img>Sp. Defense: {playerPokemon.specialDefense}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "specialDefense")}></img>Sp. Defense: {playerPokemon.specialDefense}</div></Button>
                        }

                        {remainingStats.includes("speed") ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("speed")}variant = "stat" id = "speed"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img>Speed: {playerPokemon.speed}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "speed")}></img>Speed: {playerPokemon.speed}</div></Button>
                        }
                        </div>
                    </CardContainer>
                </Button>
                        <div className = "vertical-container">
                            <img style = {{width: 200}} src = "../images/vs.png"></img>
                            <img className = {playerTurn ? "static-pokeball" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img>
                        </div>
                        
                <Button variant = 'card'>
                    <CardContainer pokemon = {enemyPokemon} size = "medium">
                        <Name pokemon = {enemyPokemon}/>
                        <Sprite pokemon = {enemyPokemon}/>
                        <div>
                            {remainingStats.includes('hp') 
                            ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">HP: ? <img style = {{width: 30}} src = "../images/pokeballball.png"></img> </div></Button>      
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">HP: {enemyPokemon.hp}<img style = {{width: 30}} src = {checkImage("enemy", "hp")}></img> </div></Button>

                            }

                            {remainingStats.includes("attack") ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Attack: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Attack: {enemyPokemon.attack}<img style = {{width: 30}} src = {checkImage("enemy", "attack")}></img> </div></Button>
                            }

                            {remainingStats.includes("defense") ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Defense: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Defense: {enemyPokemon.defense}<img style = {{width: 30}} src = {checkImage("enemy", "defense")}></img> </div></Button>
                            }

                            {remainingStats.includes("specialAttack") ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Sp. Attack: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Sp. Attack: {enemyPokemon.specialAttack}<img style = {{width: 30}} src = {checkImage("enemy", "specialAttack")}></img> </div></Button>
                            }

                            {remainingStats.includes("specialDefense") ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Sp. Defense: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Sp. Defense: {enemyPokemon.specialDefense}<img style = {{width: 30}} src = {checkImage("enemy", "specialDefense")}></img> </div></Button>
                            }

                            
                            {remainingStats.includes("speed") ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Speed: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Speed: {enemyPokemon.speed}<img style = {{width: 30}} src = {checkImage("enemy", "speed")}></img> </div></Button>
                            }

                            
                            
                        </div>
                    </CardContainer>
                </Button>
            </div>
            <div className = "horizontal-container">
                <p>{playerWon.length - 1}</p>
                <p>{playerTurn ? `${playerPokemon.name}'s turn` : `${enemyPokemon.name}'s turn`}</p>
                <p>{computerWon.length - 1}</p>
                
            </div>
        </div>
    )

}

export default Battle;