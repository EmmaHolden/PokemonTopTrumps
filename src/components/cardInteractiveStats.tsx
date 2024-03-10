import { Pokemon } from "../pokemonList";
import { statObj } from "./battle";
import Button from "./button";

interface InteractiveStatsProps {
    pokemon: Pokemon;
    arrayStats: statObj;
    playerTurn: boolean;
    variant: "enemy" | "player"
    handleClick?: any;
    gameOver: boolean;
}



const InteractiveStats = ({pokemon, arrayStats, playerTurn, variant, handleClick, gameOver}: InteractiveStatsProps) => {

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

    const camelNameOfStats = ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"]
    const displayNameOfStats = {"hp": "HP", "attack": "Attack", "defense": "Defense", "specialAttack": "Sp. Attack", "specialDefense": "Sp. Defense", "speed": "Speed"}
    

    return (
        <div className = "player-stat-button-group">
                    {camelNameOfStats.map((statName) =>
                        <div>
                            {arrayStats[statName as keyof statObj] === "unselected" && !gameOver ?
                                <Button disabled = {variant === "player" ? !playerTurn : true} onClick = {() => handleClick(statName)} className = {variant === "enemy" ? "enemy-stat" : "player-stat"} variant = "stat" id = {statName}>
                                    <div className = {variant === "player" ? "stat-and-icon" : "stat-and-icon reverse"}>
                                        <img style = {{width: 30}} src = "../images/pokeballball.png"></img> 
                                        {variant === "player" ? `${displayNameOfStats[statName as keyof statObj]}: ${pokemon[statName as keyof Pokemon]}` : `${displayNameOfStats[statName as keyof statObj]}: ?` }
                                    </div>
                                </Button>
                            :
                                <Button disabled variant = "stat" id = "stat-revealed" className = {variant === "enemy" ? "enemy-stat" : "player-stat"}>
                                    <div className = {variant === "player" ? "stat-and-icon" : "stat-and-icon reverse"}>
                                        <img style = {{width: 30}} src = {checkImage(variant, statName)}>
                                        </img>{`${displayNameOfStats[statName as keyof statObj]}: ${pokemon[statName as keyof Pokemon]}`}
                                    </div>
                                </Button>
                            }
                        </div>
                    )}
        </div>
    ) 
}

export default InteractiveStats;