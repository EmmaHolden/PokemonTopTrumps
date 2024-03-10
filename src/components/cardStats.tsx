import { Pokemon } from "../pokemonList";

interface StatsProps {
    pokemon: Pokemon;
}


const Stats = ({pokemon}: StatsProps) => {
    return (
        <div className = "stat-button-group">
        <p className = "stat">HP: {pokemon.hp}</p>
        <p className = "stat">Attack: {pokemon.attack}</p>
        <p className = "stat">Defense: {pokemon.defense}</p>
        <p className = "stat">Special Attack: {pokemon.specialAttack}</p>
        <p className = "stat">Special Defense: {pokemon.specialDefense}</p>
        <p className = "stat">Speed: {pokemon.speed}</p>
    </div>
    ) 
}

export default Stats;