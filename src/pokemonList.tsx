export interface Pokemon {
    id: number
    name: string
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
}

export const allPokemon: Pokemon[] = [
    {id: 1, name: 'Bulbasaur', hp: 45, attack: 65, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45},
    {id: 2, name: 'Ivysaur', hp: 60, attack: 80, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60},
    {id: 3, name: 'Venusaur', hp: 80, attack: 100, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80},
    {id: 4, name: 'Charmander', hp: 65, attack: 50, defense: 60, specialAttack: 43, specialDefense: 60, speed: 39},
    {id: 5, name: 'Charmeleon', hp: 80, attack: 65, defense: 80, specialAttack: 58, specialDefense: 80, speed: 58},
    {id: 6, name: 'Charizard', hp: 100, attack: 85, defense: 109, specialAttack: 78, specialDefense: 109, speed: 78},
    {id: 7, name: 'Squirtle', hp: 43, attack: 64, defense: 50, specialAttack: 65, specialDefense: 50, speed: 44},
    {id: 8, name: 'Wartortle', hp: 58, attack: 80, defense: 65, specialAttack: 80, specialDefense: 65, speed: 59},
    {id: 9, name: 'Blastoise', hp: 78, attack: 105, defense: 85, specialAttack: 100, specialDefense: 85, speed: 79},
    {id: 10, name: 'Caterpie', hp: 45, attack: 20, defense: 20, specialAttack: 35, specialDefense: 20, speed: 45},
    {id: 11, name: 'Metapod', hp: 30, attack: 25, defense: 25, specialAttack: 55, specialDefense: 25, speed: 50},
    {id: 12, name: 'Butterfree', hp: 70, attack: 80, defense: 90, specialAttack: 50, specialDefense: 90, speed: 60},
    {id: 13, name: 'Weedle', hp: 50, attack: 20, defense: 20, specialAttack: 30, specialDefense: 20, speed: 40},
    {id: 14, name: 'Kakuna', hp: 35, attack: 25, defense: 25, specialAttack: 50, specialDefense: 25, speed: 45},
    {id: 15, name: 'Beedrill', hp: 75, attack: 80, defense: 45, specialAttack: 40, specialDefense: 45, speed: 65},
    {id: 16, name: 'Pidgey', hp: 56, attack: 35, defense: 35, specialAttack: 40, specialDefense: 35, speed: 40},
    {id: 17, name: 'Pidgeotto', hp: 71, attack: 50, defense: 50, specialAttack: 55, specialDefense: 50, speed: 63},
    {id: 18, name: 'Pidgeot', hp: 101, attack: 70, defense: 70, specialAttack: 75, specialDefense: 70, speed: 83},
    {id: 19, name: 'Rattata', hp: 72, attack: 35, defense: 25, specialAttack: 35, specialDefense: 25, speed: 30},
    {id: 20, name: 'Raticate', hp: 97, attack: 70, defense: 50, specialAttack: 60, specialDefense: 50, speed: 55},
    {id: 21, name: 'Spearow', hp: 70, attack: 31, defense: 31, specialAttack: 30, specialDefense: 31, speed: 40},
    {id: 22, name: 'Fearow', hp: 100, attack: 61, defense: 61, specialAttack: 65, specialDefense: 61, speed: 65},
    {id: 23, name: 'Ekans', hp: 55, attack: 54, defense: 40, specialAttack: 44, specialDefense: 40, speed: 35},
    {id: 24, name: 'Arbok', hp: 80, attack: 79, defense: 65, specialAttack: 69, specialDefense: 65, speed: 60},
    {id: 25, name: 'Pikachu', hp: 90, attack: 50, defense: 50, specialAttack: 40, specialDefense: 50, speed: 35},
    {id: 26, name: 'Raichu', hp: 110, attack: 80, defense: 90, specialAttack: 55, specialDefense: 90, speed: 60},
    {id: 27, name: 'Sandshrew', hp: 40, attack: 30, defense: 20, specialAttack: 85, specialDefense: 20, speed: 50},
    {id: 28, name: 'Sandslash', hp: 65, attack: 55, defense: 45, specialAttack: 110, specialDefense: 45, speed: 75},
    {id: 29, name: 'Nidoran-F', hp: 41, attack: 40, defense: 40, specialAttack: 52, specialDefense: 40, speed: 55},
    {id: 30, name: 'Nidorina', hp: 56, attack: 55, defense: 55, specialAttack: 67, specialDefense: 55, speed: 70},
    {id: 31, name: 'Nidoqueen', hp: 76, attack: 85, defense: 75, specialAttack: 87, specialDefense: 75, speed: 90},
    {id: 32, name: 'Nidoran-M', hp: 50, attack: 40, defense: 40, specialAttack: 40, specialDefense: 40, speed: 46},
    {id: 33, name: 'Nidorino', hp: 65, attack: 55, defense: 55, specialAttack: 57, specialDefense: 55, speed: 61},
    {id: 34, name: 'Nidoking', hp: 85, attack: 75, defense: 85, specialAttack: 77, specialDefense: 85, speed: 81},
    {id: 35, name: 'Clefairy', hp: 35, attack: 65, defense: 60, specialAttack: 48, specialDefense: 60, speed: 70},
    {id: 36, name: 'Clefable', hp: 60, attack: 90, defense: 95, specialAttack: 73, specialDefense: 95, speed: 95},
    {id: 37, name: 'Vulpix', hp: 65, attack: 65, defense: 50, specialAttack: 40, specialDefense: 50, speed: 38},
    {id: 38, name: 'Ninetales', hp: 100, attack: 100, defense: 81, specialAttack: 75, specialDefense: 81, speed: 73},
    {id: 39, name: 'Jigglypuff', hp: 20, attack: 25, defense: 45, specialAttack: 20, specialDefense: 45, speed: 115},
    {id: 40, name: 'Wigglytuff', hp: 45, attack: 50, defense: 85, specialAttack: 45, specialDefense: 85, speed: 140},
    {id: 41, name: 'Zubat', hp: 55, attack: 40, defense: 30, specialAttack: 35, specialDefense: 30, speed: 40},
    {id: 42, name: 'Golbat', hp: 90, attack: 75, defense: 65, specialAttack: 70, specialDefense: 65, speed: 75},
    {id: 43, name: 'Oddish', hp: 30, attack: 65, defense: 75, specialAttack: 55, specialDefense: 75, speed: 45},
    {id: 44, name: 'Gloom', hp: 40, attack: 75, defense: 85, specialAttack: 70, specialDefense: 85, speed: 60},
    {id: 45, name: 'Vileplume', hp: 50, attack: 90, defense: 110, specialAttack: 85, specialDefense: 110, speed: 75},
    {id: 46, name: 'Paras', hp: 25, attack: 55, defense: 45, specialAttack: 55, specialDefense: 45, speed: 35},
    {id: 47, name: 'Parasect', hp: 30, attack: 80, defense: 60, specialAttack: 80, specialDefense: 60, speed: 60},
    {id: 48, name: 'Venonat', hp: 45, attack: 55, defense: 40, specialAttack: 50, specialDefense: 40, speed: 60},
    {id: 49, name: 'Venomoth', hp: 90, attack: 75, defense: 90, specialAttack: 60, specialDefense: 90, speed: 70},
    {id: 50, name: 'Diglett', hp: 95, attack: 45, defense: 35, specialAttack: 25, specialDefense: 35, speed: 10},
    {id: 51, name: 'Dugtrio', hp: 120, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 35},
    {id: 52, name: 'Meowth', hp: 90, attack: 40, defense: 40, specialAttack: 35, specialDefense: 40, speed: 40},
    {id: 53, name: 'Persian', hp: 115, attack: 65, defense: 65, specialAttack: 60, specialDefense: 65, speed: 65},
    {id: 54, name: 'Psyduck', hp: 55, attack: 50, defense: 65, specialAttack: 48, specialDefense: 65, speed: 50},
    {id: 55, name: 'Golduck', hp: 85, attack: 80, defense: 95, specialAttack: 78, specialDefense: 95, speed: 80},
    {id: 56, name: 'Mankey', hp: 70, attack: 45, defense: 35, specialAttack: 35, specialDefense: 35, speed: 40},
    {id: 57, name: 'Primeape', hp: 95, attack: 70, defense: 60, specialAttack: 60, specialDefense: 60, speed: 65},
    {id: 58, name: 'Growlithe', hp: 60, attack: 50, defense: 70, specialAttack: 45, specialDefense: 70, speed: 55},
    {id: 59, name: 'Arcanine', hp: 95, attack: 80, defense: 100, specialAttack: 80, specialDefense: 100, speed: 90},
    {id: 60, name: 'Poliwag', hp: 90, attack: 40, defense: 40, specialAttack: 40, specialDefense: 40, speed: 40},
    {id: 61, name: 'Poliwhirl', hp: 90, attack: 50, defense: 50, specialAttack: 65, specialDefense: 50, speed: 65},
    {id: 62, name: 'Poliwrath', hp: 70, attack: 90, defense: 70, specialAttack: 95, specialDefense: 70, speed: 90},
    {id: 63, name: 'Abra', hp: 90, attack: 55, defense: 105, specialAttack: 15, specialDefense: 105, speed: 25},
    {id: 64, name: 'Kadabra', hp: 105, attack: 70, defense: 120, specialAttack: 30, specialDefense: 120, speed: 40},
    {id: 65, name: 'Alakazam', hp: 120, attack: 95, defense: 135, specialAttack: 45, specialDefense: 135, speed: 55},
    {id: 66, name: 'Machop', hp: 35, attack: 35, defense: 35, specialAttack: 50, specialDefense: 35, speed: 70},
    {id: 67, name: 'Machoke', hp: 45, attack: 60, defense: 50, specialAttack: 70, specialDefense: 50, speed: 80},
    {id: 68, name: 'Machamp', hp: 55, attack: 85, defense: 65, specialAttack: 80, specialDefense: 65, speed: 90},
    {id: 69, name: 'Bellsprout', hp: 40, attack: 30, defense: 70, specialAttack: 35, specialDefense: 70, speed: 50},
    {id: 70, name: 'Weepinbell', hp: 55, attack: 45, defense: 85, specialAttack: 50, specialDefense: 85, speed: 65},
    {id: 71, name: 'Victreebel', hp: 70, attack: 70, defense: 100, specialAttack: 65, specialDefense: 100, speed: 80},
    {id: 72, name: 'Tentacool', hp: 70, attack: 100, defense: 50, specialAttack: 35, specialDefense: 50, speed: 40},
    {id: 73, name: 'Tentacruel', hp: 100, attack: 120, defense: 80, specialAttack: 65, specialDefense: 80, speed: 80},
    {id: 74, name: 'Geodude', hp: 20, attack: 30, defense: 30, specialAttack: 100, specialDefense: 30, speed: 40},
    {id: 75, name: 'Graveler', hp: 35, attack: 45, defense: 45, specialAttack: 115, specialDefense: 45, speed: 55},
    {id: 76, name: 'Golem', hp: 45, attack: 65, defense: 55, specialAttack: 130, specialDefense: 55, speed: 80},
    {id: 77, name: 'Ponyta', hp: 90, attack: 65, defense: 65, specialAttack: 55, specialDefense: 65, speed: 50},
    {id: 78, name: 'Rapidash', hp: 105, attack: 80, defense: 80, specialAttack: 70, specialDefense: 80, speed: 65},
    {id: 79, name: 'Slowpoke', hp: 15, attack: 40, defense: 40, specialAttack: 65, specialDefense: 40, speed: 90},
    {id: 80, name: 'Slowbro', hp: 30, attack: 80, defense: 100, specialAttack: 110, specialDefense: 100, speed: 95},
    {id: 81, name: 'Magnemite', hp: 45, attack: 55, defense: 95, specialAttack: 70, specialDefense: 95, speed: 25},
    {id: 82, name: 'Magneton', hp: 70, attack: 70, defense: 120, specialAttack: 95, specialDefense: 120, speed: 50},
    {id: 83, name: 'Farfetchd', hp: 60, attack: 62, defense: 58, specialAttack: 55, specialDefense: 58, speed: 52},
    {id: 84, name: 'Doduo', hp: 75, attack: 35, defense: 35, specialAttack: 45, specialDefense: 35, speed: 35},
    {id: 85, name: 'Dodrio', hp: 110, attack: 60, defense: 60, specialAttack: 70, specialDefense: 60, speed: 60},
    {id: 86, name: 'Seel', hp: 45, attack: 70, defense: 45, specialAttack: 55, specialDefense: 45, speed: 65},
    {id: 87, name: 'Dewgong', hp: 70, attack: 95, defense: 70, specialAttack: 80, specialDefense: 70, speed: 90},
    {id: 88, name: 'Grimer', hp: 25, attack: 50, defense: 40, specialAttack: 50, specialDefense: 40, speed: 80},
    {id: 89, name: 'Muk', hp: 50, attack: 100, defense: 65, specialAttack: 75, specialDefense: 65, speed: 105},
    {id: 90, name: 'Shellder', hp: 40, attack: 25, defense: 45, specialAttack: 100, specialDefense: 45, speed: 30},
    {id: 91, name: 'Cloyster', hp: 70, attack: 45, defense: 85, specialAttack: 180, specialDefense: 85, speed: 50},
    {id: 92, name: 'Gastly', hp: 80, attack: 35, defense: 100, specialAttack: 30, specialDefense: 100, speed: 30},
    {id: 93, name: 'Haunter', hp: 95, attack: 55, defense: 115, specialAttack: 45, specialDefense: 115, speed: 45},
    {id: 94, name: 'Gengar', hp: 110, attack: 75, defense: 130, specialAttack: 60, specialDefense: 130, speed: 60},
    {id: 95, name: 'Onix', hp: 70, attack: 45, defense: 30, specialAttack: 160, specialDefense: 30, speed: 35},
    {id: 96, name: 'Drowzee', hp: 42, attack: 90, defense: 43, specialAttack: 45, specialDefense: 43, speed: 60},
    {id: 97, name: 'Hypno', hp: 67, attack: 115, defense: 73, specialAttack: 70, specialDefense: 73, speed: 85},
    {id: 98, name: 'Krabby', hp: 50, attack: 25, defense: 25, specialAttack: 90, specialDefense: 25, speed: 30},
    {id: 99, name: 'Kingler', hp: 75, attack: 50, defense: 50, specialAttack: 115, specialDefense: 50, speed: 55},
    {id: 100, name: 'Voltorb', hp: 100, attack: 55, defense: 55, specialAttack: 50, specialDefense: 55, speed: 40},
    {id: 101, name: 'Electrode', hp: 150, attack: 80, defense: 80, specialAttack: 70, specialDefense: 80, speed: 60},
    {id: 102, name: 'Exeggcute', hp: 40, attack: 45, defense: 60, specialAttack: 80, specialDefense: 60, speed: 60},
    {id: 103, name: 'Exeggutor', hp: 55, attack: 75, defense: 125, specialAttack: 85, specialDefense: 125, speed: 95},
    {id: 104, name: 'Cubone', hp: 35, attack: 50, defense: 40, specialAttack: 95, specialDefense: 40, speed: 50},
    {id: 105, name: 'Marowak', hp: 45, attack: 80, defense: 50, specialAttack: 110, specialDefense: 50, speed: 60},
    {id: 106, name: 'Hitmonlee', hp: 87, attack: 110, defense: 35, specialAttack: 53, specialDefense: 35, speed: 50},
    {id: 107, name: 'Hitmonchan', hp: 76, attack: 110, defense: 35, specialAttack: 79, specialDefense: 35, speed: 50},
    {id: 108, name: 'Lickitung', hp: 30, attack: 75, defense: 60, specialAttack: 75, specialDefense: 60, speed: 90},
    {id: 109, name: 'Koffing', hp: 35, attack: 45, defense: 60, specialAttack: 95, specialDefense: 60, speed: 40},
    {id: 110, name: 'Weezing', hp: 60, attack: 70, defense: 85, specialAttack: 120, specialDefense: 85, speed: 65},
    {id: 111, name: 'Rhyhorn', hp: 25, attack: 30, defense: 30, specialAttack: 95, specialDefense: 30, speed: 80},
    {id: 112, name: 'Rhydon', hp: 40, attack: 45, defense: 45, specialAttack: 120, specialDefense: 45, speed: 105},
    {id: 113, name: 'Chansey', hp: 50, attack: 105, defense: 35, specialAttack: 5, specialDefense: 35, speed: 250},
    {id: 114, name: 'Tangela', hp: 60, attack: 40, defense: 100, specialAttack: 115, specialDefense: 100, speed: 65},
    {id: 115, name: 'Kangaskhan', hp: 90, attack: 80, defense: 40, specialAttack: 80, specialDefense: 40, speed: 105},
    {id: 116, name: 'Horsea', hp: 60, attack: 25, defense: 70, specialAttack: 70, specialDefense: 70, speed: 30},
    {id: 117, name: 'Seadra', hp: 85, attack: 45, defense: 95, specialAttack: 95, specialDefense: 95, speed: 55},
    {id: 118, name: 'Goldeen', hp: 63, attack: 50, defense: 35, specialAttack: 60, specialDefense: 35, speed: 45},
    {id: 119, name: 'Seaking', hp: 68, attack: 80, defense: 65, specialAttack: 65, specialDefense: 65, speed: 80},
    {id: 120, name: 'Staryu', hp: 85, attack: 55, defense: 70, specialAttack: 55, specialDefense: 70, speed: 30},
    {id: 121, name: 'Starmie', hp: 115, attack: 85, defense: 100, specialAttack: 85, specialDefense: 100, speed: 60},
    {id: 122, name: 'Mr-Mime', hp: 90, attack: 120, defense: 100, specialAttack: 65, specialDefense: 100, speed: 40},
    {id: 123, name: 'Scyther', hp: 105, attack: 80, defense: 55, specialAttack: 80, specialDefense: 55, speed: 70},
    {id: 124, name: 'Jynx', hp: 95, attack: 95, defense: 115, specialAttack: 35, specialDefense: 115, speed: 65},
    {id: 125, name: 'Electabuzz', hp: 105, attack: 85, defense: 95, specialAttack: 57, specialDefense: 95, speed: 65},
    {id: 126, name: 'Magmar', hp: 93, attack: 85, defense: 100, specialAttack: 57, specialDefense: 100, speed: 65},
    {id: 127, name: 'Pinsir', hp: 85, attack: 70, defense: 55, specialAttack: 100, specialDefense: 55, speed: 65},
    {id: 128, name: 'Tauros', hp: 110, attack: 70, defense: 40, specialAttack: 95, specialDefense: 40, speed: 75},
    {id: 129, name: 'Magikarp', hp: 80, attack: 20, defense: 15, specialAttack: 55, specialDefense: 15, speed: 20},
    {id: 130, name: 'Gyarados', hp: 81, attack: 100, defense: 60, specialAttack: 79, specialDefense: 60, speed: 95},
    {id: 131, name: 'Lapras', hp: 60, attack: 95, defense: 85, specialAttack: 80, specialDefense: 85, speed: 130},
    {id: 132, name: 'Ditto', hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48},
    {id: 133, name: 'Eevee', hp: 55, attack: 65, defense: 45, specialAttack: 50, specialDefense: 45, speed: 55},
    {id: 134, name: 'Vaporeon', hp: 65, attack: 95, defense: 110, specialAttack: 60, specialDefense: 110, speed: 130},
    {id: 135, name: 'Jolteon', hp: 130, attack: 95, defense: 110, specialAttack: 60, specialDefense: 110, speed: 65},
    {id: 136, name: 'Flareon', hp: 65, attack: 110, defense: 95, specialAttack: 60, specialDefense: 95, speed: 65},
    {id: 137, name: 'Porygon', hp: 40, attack: 75, defense: 85, specialAttack: 70, specialDefense: 85, speed: 65},
    {id: 138, name: 'Omanyte', hp: 35, attack: 55, defense: 90, specialAttack: 100, specialDefense: 90, speed: 35},
    {id: 139, name: 'Omastar', hp: 55, attack: 70, defense: 115, specialAttack: 125, specialDefense: 115, speed: 70},
    {id: 140, name: 'Kabuto', hp: 55, attack: 45, defense: 55, specialAttack: 90, specialDefense: 55, speed: 30},
    {id: 141, name: 'Kabutops', hp: 80, attack: 70, defense: 65, specialAttack: 105, specialDefense: 65, speed: 60},
    {id: 142, name: 'Aerodactyl', hp: 130, attack: 75, defense: 60, specialAttack: 65, specialDefense: 60, speed: 80},
    {id: 143, name: 'Snorlax', hp: 30, attack: 110, defense: 65, specialAttack: 65, specialDefense: 65, speed: 160},
    {id: 144, name: 'Articuno', hp: 85, attack: 125, defense: 95, specialAttack: 100, specialDefense: 95, speed: 90},
    {id: 145, name: 'Zapdos', hp: 100, attack: 90, defense: 125, specialAttack: 85, specialDefense: 125, speed: 90},
    {id: 146, name: 'Moltres', hp: 90, attack: 85, defense: 125, specialAttack: 90, specialDefense: 125, speed: 90},
    {id: 147, name: 'Dratini', hp: 50, attack: 50, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41},
    {id: 148, name: 'Dragonair', hp: 70, attack: 70, defense: 70, specialAttack: 65, specialDefense: 70, speed: 61},
    {id: 149, name: 'Dragonite', hp: 80, attack: 100, defense: 100, specialAttack: 95, specialDefense: 100, speed: 91},
    {id: 150, name: 'Mewtwo', hp: 130, attack: 90, defense: 154, specialAttack: 90, specialDefense: 154, speed: 106},
    {id: 151, name: 'Mew', hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100},
    
]

export const starterPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 1 || pokemon.id === 4 || pokemon.id === 7 || pokemon.id === 25 || pokemon.id === 133)

export const palletPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 16 || pokemon.id === 19 || pokemon.id === 56 || pokemon.id === 29 || pokemon.id === 32)

export const viridianPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 10 || pokemon.id === 11 || pokemon.id === 13 || pokemon.id === 14 || pokemon.id === 25)