import { useState } from "react";
import { Pokemon } from "../pokemonList";
import Button from "./button";
import CardContainer from "./cardContainer";
import Name from "./cardName";
import Sprite from "./cardSprite";

type statObj = {
    "hp": "unselected" | "player" | "computer" | "draw",
    "attack": "unselected" | "player" | "computer" | "draw",
    "defense": "unselected" | "player" | "computer" | "draw",
    "specialAttack": "unselected" | "player" | "computer" | "draw",
    "specialDefense": "unselected" | "player" | "computer" | "draw",
    "speed": "unselected" | "player" | "computer" | "draw",
}

interface BattleProps {
    enemyPokemon: Pokemon;
    playerPokemon: Pokemon;
}

const Battle = ({enemyPokemon, playerPokemon}: BattleProps) => {
    const [arrayStats, setArrayStats] = useState({"hp": "unselected", "attack": "unselected", "defense": "unselected", "specialAttack": "unselected", "specialDefense": "unselected", "speed": "unselected"})
    const [playerTurn, setPlayerTurn] = useState(true)

    const getRanNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const switchTurn = () => {
        let newPlayerTurn = !playerTurn
        setPlayerTurn(newPlayerTurn)
    }

    const checkStats = (stat: string) => {
        let newRemainingStats = arrayStats
        console.log(newRemainingStats)
        let statCondition = newRemainingStats[stat as keyof statObj]
        console.log(statCondition)
        let playerScore = playerPokemon[stat as keyof Pokemon]
        let computerScore = enemyPokemon[stat as keyof Pokemon]
        if (playerScore > computerScore){
            newRemainingStats[stat as keyof statObj] = "player"
        } else if (computerScore > playerScore){
            newRemainingStats[stat as keyof statObj] = "computer"
        } else if (computerScore === playerScore){
            newRemainingStats[stat as keyof statObj] = "draw"
        }
        setArrayStats(newRemainingStats) 
        switchTurn()
    }

    const computerTurn = () => {
        const entries = Object.entries(arrayStats);
        let availableStats = entries.filter(([key, value]) => value === "unselected");
        console.log(availableStats.length)
        let index = getRanNum(0, availableStats.length - 1)
        console.log("THE ITEM IS:")
        console.log(availableStats[index][0])
        checkStats(availableStats[index][0])
    }


    if (playerTurn === false){
        setTimeout(() => {
            computerTurn()
        }, 3000);
    }

    const checkImage = (role: string, stat: string) => {
        if (role === "player"){
            if (arrayStats[stat as keyof statObj] === "player"){
                return "../images/check.png"
            } else if (arrayStats[stat as keyof statObj] === "computer"){
                return "../images/cross.png"
            } else if (arrayStats[stat as keyof statObj] === "draw"){
                return "../images/equal.png"
            }
        } else {
            if (arrayStats[stat as keyof statObj] === "computer"){
                return "../images/check.png"
            } else if (arrayStats[stat as keyof statObj] === "player"){
                return "../images/cross.png"
            } else if (arrayStats[stat as keyof statObj] === "draw"){
                return "../images/equal.png"
            }

        }

    }

    return (
        <div>
            <div className = "horizontal-container">
                <Button variant = 'card' className = 'move'>
                    <CardContainer pokemon = {playerPokemon} size = "medium">
                        <Name pokemon = {playerPokemon}/>
                        <Sprite pokemon = {playerPokemon}/>
                        <div className = "player-stat-button-group">
                        {arrayStats.hp === "unselected" ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("hp")}variant = "stat" id = "hp"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> HP: {playerPokemon.hp}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "hp")}></img> HP: {playerPokemon.hp}</div></Button>
                        }

                        {arrayStats.attack === "unselected" ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("attack")}variant = "stat" id = "attack"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> Attack: {playerPokemon.attack}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "attack")}></img> Attack: {playerPokemon.attack}</div></Button>
                        }

                        {arrayStats.defense === "unselected" ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("defense")}variant = "stat" id = "defense"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> Defense: {playerPokemon.defense}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "defense")}></img> Defense: {playerPokemon.defense}</div></Button>
                        }

                        {arrayStats.specialAttack === "unselected" ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("specialAttack")}variant = "stat" id = "special-attack"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img> Sp. Attack: {playerPokemon.specialAttack}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "specialAttack")}></img> Sp. Attack: {playerPokemon.specialAttack}</div></Button>
                        }

                        {arrayStats.specialDefense === "unselected" ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("specialDefense")}variant = "stat" id = "special-defense"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img>Sp. Defense: {playerPokemon.specialDefense}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "specialDefense")}></img>Sp. Defense: {playerPokemon.specialDefense}</div></Button>
                        }

                        {arrayStats.speed === "unselected" ?
                        <Button disabled = {!playerTurn} onClick = {() => checkStats("speed")}variant = "stat" id = "speed"><div className = "separate"><img style = {{width: 30}} src = "../images/pokeballball.png"></img>Speed: {playerPokemon.speed}</div></Button> 
                        :
                        <Button disabled variant = "stat" id = "stat-revealed"><div className = "separate"><img style = {{width: 30}} src = {checkImage("player", "speed")}></img>Speed: {playerPokemon.speed}</div></Button>
                        }
                        </div>
                    </CardContainer>
                </Button>
                        <div className = "vertical-container">
                            <img style = {{width: 300}} src = "../images/vs.png"></img>
                        </div>
                <Button variant = 'card'>
                    <CardContainer pokemon = {enemyPokemon} size = "medium">
                        <Name pokemon = {enemyPokemon}/>
                        <Sprite pokemon = {enemyPokemon}/>
                        <div>
                            {arrayStats.hp === "unselected" ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">HP: ? <img style = {{width: 30}} src = "../images/pokeballball.png"></img> </div></Button>      
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">HP: {enemyPokemon.hp}<img style = {{width: 30}} src = {checkImage("enemy", "hp")}></img> </div></Button>

                            }

                            {arrayStats.attack === "unselected" ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Attack: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Attack: {enemyPokemon.attack}<img style = {{width: 30}} src = {checkImage("enemy", "attack")}></img> </div></Button>
                            }

                            {arrayStats.defense === "unselected" ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Defense: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Defense: {enemyPokemon.defense}<img style = {{width: 30}} src = {checkImage("enemy", "defense")}></img> </div></Button>
                            }

                            {arrayStats.specialAttack === "unselected" ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Sp. Attack: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Sp. Attack: {enemyPokemon.specialAttack}<img style = {{width: 30}} src = {checkImage("enemy", "specialAttack")}></img> </div></Button>
                            }

                            {arrayStats.specialDefense === "unselected" ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Sp. Defense: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Sp. Defense: {enemyPokemon.specialDefense}<img style = {{width: 30}} src = {checkImage("enemy", "specialDefense")}></img> </div></Button>
                            }

                            
                            {arrayStats.speed === "unselected" ?
                            <Button disabled={true} className = "enemy-stat" variant = "stat"><div className = "separate">Speed: ?<img style = {{width: 30}} src = "../images/pokeballball.png"></img></div></Button>
                            :
                            <Button disabled={true} className = "enemy-stat" variant = "stat" id = 'stat-revealed'><div className = "separate">Speed: {enemyPokemon.speed}<img style = {{width: 30}} src = {checkImage("enemy", "speed")}></img> </div></Button>
                            }

                            
                            
                        </div>
                    </CardContainer>
                </Button>
            </div>
            <div className = "horizontal-container margin-top-ten">
                <div className = "third-horizontal-container"><img className = {!playerTurn ? "rotating-pokeball paused" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img><p className = {!playerTurn ? "turn-invisible" : "turn-visible"}>{`${playerPokemon.name}'s turn`}</p></div>
                <div className = "second-horizontal-container"><img style = {{height: 100}} src = {`../images/number${1}.png`}></img><img style = {{height: 100}} src = "../images/dash.png"></img><img style = {{height: 100}} src = {`../images/number${2}.png`}></img></div>
                <div className = "third-horizontal-container"><p className = {playerTurn ? "turn-invisible" : "turn-visible"}>{`${enemyPokemon.name}'s turn`}</p><img className = {playerTurn ? "rotating-pokeball paused" : "rotating-pokeball"} style = {{width: 100}} src = "../images/pokeballball.png"></img></div>
            </div>
        </div>
    )

}

export default Battle;