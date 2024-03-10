import { ReactNode } from "react";
import { Pokemon } from "../pokemonList";
import { findElementClass } from "../utils/findElementClass";

interface CardContainerProps {
    pokemon: Pokemon;
    size: 'small' | 'medium' | 'large'
    children?: ReactNode | ReactNode[]
}


const CardContainer = ({pokemon, size, children}: CardContainerProps) => {
    return (
        <div className = {findElementClass(pokemon, size)}>
            {children}
        </div>
    ) 
}

export default CardContainer;