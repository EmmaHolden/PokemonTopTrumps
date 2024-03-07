import { Pokemon } from "../pokemonList";

interface SpriteProps {
    pokemon: Pokemon;
}


const Sprite = ({pokemon}: SpriteProps) => {
    return (
        <div className = "sprite-container"><img className="sprite" src={`../images/${pokemon.id}.png`} alt={`${pokemon.name}`}></img></div>
    ) 
}

export default Sprite;




