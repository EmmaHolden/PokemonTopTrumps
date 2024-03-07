import { Pokemon } from "../pokemonList";

interface NameProps {
    pokemon: Pokemon;
}


const Name = ({pokemon}: NameProps) => {
    return <h2 className = "name">{pokemon.name.toUpperCase()}</h2>
}

export default Name;