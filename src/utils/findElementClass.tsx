import classNames from "classnames"
import React from 'react'
import { Pokemon } from "../pokemonList"



export const findElementClass = (pokemon: Pokemon, size: 'small' | 'medium' | 'large') => {
    const classes = classNames('card', 'card-medium', {
        'bug-pokemon' : pokemon.element === 'bug',
        'dragon-pokemon' : pokemon.element === 'dragon',
        'electric-pokemon' : pokemon.element === 'electric',
        'fairy-pokemon' : pokemon.element === 'fairy',
        'fighting-pokemon' : pokemon.element === 'fighting',
        'fire-pokemon' : pokemon.element === 'fire',
        'ghost-pokemon' : pokemon.element === 'ghost',
        'grass-pokemon' : pokemon.element === 'grass',
        'ground-pokemon' : pokemon.element === 'ground',
        'ice-pokemon' : pokemon.element === 'ice',
        'normal-pokemon' : pokemon.element === 'normal',
        'poison-pokemon' : pokemon.element === 'poison',
        'psychic-pokemon' : pokemon.element === 'psychic',
        'rock-pokemon' : pokemon.element === 'rock',
        'water-pokemon' : pokemon.element === 'water',
        'card-large' : size === 'large',
        'card-medium' : size === 'medium',
        'card-small' : size === 'small',
    })
    return classes;
}