export interface Pokemon {
    id: number
    name: string
    element: string
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
}

export const allPokemon: Pokemon[] = [
    {id: 1, name: 'Bulbasaur', element: 'grass', hp: 45, attack: 65, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45},
    {id: 2, name: 'Ivysaur', element: 'grass', hp: 60, attack: 80, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60},
    {id: 3, name: 'Venusaur', element: 'grass', hp: 80, attack: 100, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80},
    {id: 4, name: 'Charmander', element: 'fire', hp: 65, attack: 50, defense: 60, specialAttack: 43, specialDefense: 60, speed: 39},
    {id: 5, name: 'Charmeleon', element: 'fire', hp: 80, attack: 65, defense: 80, specialAttack: 58, specialDefense: 80, speed: 58},
    {id: 6, name: 'Charizard', element: 'fire', hp: 100, attack: 85, defense: 109, specialAttack: 78, specialDefense: 109, speed: 78},
    {id: 7, name: 'Squirtle', element: 'water', hp: 43, attack: 64, defense: 50, specialAttack: 65, specialDefense: 50, speed: 44},
    {id: 8, name: 'Wartortle', element: 'water', hp: 58, attack: 80, defense: 65, specialAttack: 80, specialDefense: 65, speed: 59},
    {id: 9, name: 'Blastoise', element: 'water', hp: 78, attack: 105, defense: 85, specialAttack: 100, specialDefense: 85, speed: 79},
    {id: 10, name: 'Caterpie', element: 'bug', hp: 45, attack: 20, defense: 20, specialAttack: 35, specialDefense: 20, speed: 45},
    {id: 11, name: 'Metapod', element: 'bug', hp: 30, attack: 25, defense: 25, specialAttack: 55, specialDefense: 25, speed: 50},
    {id: 12, name: 'Butterfree', element: 'bug', hp: 70, attack: 80, defense: 90, specialAttack: 50, specialDefense: 90, speed: 60},
    {id: 13, name: 'Weedle', element: 'bug', hp: 50, attack: 20, defense: 20, specialAttack: 30, specialDefense: 20, speed: 40},
    {id: 14, name: 'Kakuna', element: 'bug', hp: 35, attack: 25, defense: 25, specialAttack: 50, specialDefense: 25, speed: 45},
    {id: 15, name: 'Beedrill', element: 'bug', hp: 75, attack: 80, defense: 45, specialAttack: 40, specialDefense: 45, speed: 65},
    {id: 16, name: 'Pidgey', element: 'normal', hp: 56, attack: 35, defense: 35, specialAttack: 40, specialDefense: 35, speed: 40},
    {id: 17, name: 'Pidgeotto', element: 'normal', hp: 71, attack: 50, defense: 50, specialAttack: 55, specialDefense: 50, speed: 63},
    {id: 18, name: 'Pidgeot', element: 'normal', hp: 101, attack: 70, defense: 70, specialAttack: 75, specialDefense: 70, speed: 83},
    {id: 19, name: 'Rattata', element: 'normal', hp: 72, attack: 35, defense: 25, specialAttack: 35, specialDefense: 25, speed: 30},
    {id: 20, name: 'Raticate', element: 'normal', hp: 97, attack: 70, defense: 50, specialAttack: 60, specialDefense: 50, speed: 55},
    {id: 21, name: 'Spearow', element: 'normal', hp: 70, attack: 31, defense: 31, specialAttack: 30, specialDefense: 31, speed: 40},
    {id: 22, name: 'Fearow', element: 'normal', hp: 100, attack: 61, defense: 61, specialAttack: 65, specialDefense: 61, speed: 65},
    {id: 23, name: 'Ekans', element: 'poison', hp: 55, attack: 54, defense: 40, specialAttack: 44, specialDefense: 40, speed: 35},
    {id: 24, name: 'Arbok', element: 'poison', hp: 80, attack: 79, defense: 65, specialAttack: 69, specialDefense: 65, speed: 60},
    {id: 25, name: 'Pikachu', element: 'electric', hp: 90, attack: 50, defense: 50, specialAttack: 40, specialDefense: 50, speed: 35},
    {id: 26, name: 'Raichu', element: 'electric', hp: 110, attack: 80, defense: 90, specialAttack: 55, specialDefense: 90, speed: 60},
    {id: 27, name: 'Sandshrew', element: 'ground', hp: 40, attack: 30, defense: 20, specialAttack: 85, specialDefense: 20, speed: 50},
    {id: 28, name: 'Sandslash', element: 'ground', hp: 65, attack: 55, defense: 45, specialAttack: 110, specialDefense: 45, speed: 75},
    {id: 29, name: 'Nidoran-F', element: 'poison', hp: 41, attack: 40, defense: 40, specialAttack: 52, specialDefense: 40, speed: 55},
    {id: 30, name: 'Nidorina', element: 'poison', hp: 56, attack: 55, defense: 55, specialAttack: 67, specialDefense: 55, speed: 70},
    {id: 31, name: 'Nidoqueen', element: 'poison', hp: 76, attack: 85, defense: 75, specialAttack: 87, specialDefense: 75, speed: 90},
    {id: 32, name: 'Nidoran-M', element: 'poison', hp: 50, attack: 40, defense: 40, specialAttack: 40, specialDefense: 40, speed: 46},
    {id: 33, name: 'Nidorino', element: 'poison', hp: 65, attack: 55, defense: 55, specialAttack: 57, specialDefense: 55, speed: 61},
    {id: 34, name: 'Nidoking', element: 'poison', hp: 85, attack: 75, defense: 85, specialAttack: 77, specialDefense: 85, speed: 81},
    {id: 35, name: 'Clefairy', element: 'fairy', hp: 35, attack: 65, defense: 60, specialAttack: 48, specialDefense: 60, speed: 70},
    {id: 36, name: 'Clefable', element: 'fairy', hp: 60, attack: 90, defense: 95, specialAttack: 73, specialDefense: 95, speed: 95},
    {id: 37, name: 'Vulpix', element: 'fire', hp: 65, attack: 65, defense: 50, specialAttack: 40, specialDefense: 50, speed: 38},
    {id: 38, name: 'Ninetales', element: 'fire', hp: 100, attack: 100, defense: 81, specialAttack: 75, specialDefense: 81, speed: 73},
    {id: 39, name: 'Jigglypuff', element: 'normal', hp: 20, attack: 25, defense: 45, specialAttack: 20, specialDefense: 45, speed: 115},
    {id: 40, name: 'Wigglytuff', element: 'normal', hp: 45, attack: 50, defense: 85, specialAttack: 45, specialDefense: 85, speed: 140},
    {id: 41, name: 'Zubat', element: 'poison', hp: 55, attack: 40, defense: 30, specialAttack: 35, specialDefense: 30, speed: 40},
    {id: 42, name: 'Golbat', element: 'poison', hp: 90, attack: 75, defense: 65, specialAttack: 70, specialDefense: 65, speed: 75},
    {id: 43, name: 'Oddish', element: 'grass', hp: 30, attack: 65, defense: 75, specialAttack: 55, specialDefense: 75, speed: 45},
    {id: 44, name: 'Gloom', element: 'grass', hp: 40, attack: 75, defense: 85, specialAttack: 70, specialDefense: 85, speed: 60},
    {id: 45, name: 'Vileplume', element: 'grass', hp: 50, attack: 90, defense: 110, specialAttack: 85, specialDefense: 110, speed: 75},
    {id: 46, name: 'Paras', element: 'bug', hp: 25, attack: 55, defense: 45, specialAttack: 55, specialDefense: 45, speed: 35},
    {id: 47, name: 'Parasect', element: 'bug', hp: 30, attack: 80, defense: 60, specialAttack: 80, specialDefense: 60, speed: 60},
    {id: 48, name: 'Venonat', element: 'bug', hp: 45, attack: 55, defense: 40, specialAttack: 50, specialDefense: 40, speed: 60},
    {id: 49, name: 'Venomoth', element: 'bug', hp: 90, attack: 75, defense: 90, specialAttack: 60, specialDefense: 90, speed: 70},
    {id: 50, name: 'Diglett', element: 'ground', hp: 95, attack: 45, defense: 35, specialAttack: 25, specialDefense: 35, speed: 10},
    {id: 51, name: 'Dugtrio', element: 'ground', hp: 120, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 35},
    {id: 52, name: 'Meowth', element: 'normal', hp: 90, attack: 40, defense: 40, specialAttack: 35, specialDefense: 40, speed: 40},
    {id: 53, name: 'Persian', element: 'normal', hp: 115, attack: 65, defense: 65, specialAttack: 60, specialDefense: 65, speed: 65},
    {id: 54, name: 'Psyduck', element: 'water', hp: 55, attack: 50, defense: 65, specialAttack: 48, specialDefense: 65, speed: 50},
    {id: 55, name: 'Golduck', element: 'water', hp: 85, attack: 80, defense: 95, specialAttack: 78, specialDefense: 95, speed: 80},
    {id: 56, name: 'Mankey', element: 'fighting', hp: 70, attack: 45, defense: 35, specialAttack: 35, specialDefense: 35, speed: 40},
    {id: 57, name: 'Primeape', element: 'fighting', hp: 95, attack: 70, defense: 60, specialAttack: 60, specialDefense: 60, speed: 65},
    {id: 58, name: 'Growlithe', element: 'fire', hp: 60, attack: 50, defense: 70, specialAttack: 45, specialDefense: 70, speed: 55},
    {id: 59, name: 'Arcanine', element: 'fire', hp: 95, attack: 80, defense: 100, specialAttack: 80, specialDefense: 100, speed: 90},
    {id: 60, name: 'Poliwag', element: 'water', hp: 90, attack: 40, defense: 40, specialAttack: 40, specialDefense: 40, speed: 40},
    {id: 61, name: 'Poliwhirl', element: 'water', hp: 90, attack: 50, defense: 50, specialAttack: 65, specialDefense: 50, speed: 65},
    {id: 62, name: 'Poliwrath', element: 'water', hp: 70, attack: 90, defense: 70, specialAttack: 95, specialDefense: 70, speed: 90},
    {id: 63, name: 'Abra', element: 'psychic', hp: 90, attack: 55, defense: 105, specialAttack: 15, specialDefense: 105, speed: 25},
    {id: 64, name: 'Kadabra', element: 'psychic', hp: 105, attack: 70, defense: 120, specialAttack: 30, specialDefense: 120, speed: 40},
    {id: 65, name: 'Alakazam', element: 'psychic', hp: 120, attack: 95, defense: 135, specialAttack: 45, specialDefense: 135, speed: 55},
    {id: 66, name: 'Machop', element: 'fighting', hp: 35, attack: 35, defense: 35, specialAttack: 50, specialDefense: 35, speed: 70},
    {id: 67, name: 'Machoke', element: 'fighting', hp: 45, attack: 60, defense: 50, specialAttack: 70, specialDefense: 50, speed: 80},
    {id: 68, name: 'Machamp', element: 'fighting', hp: 55, attack: 85, defense: 65, specialAttack: 80, specialDefense: 65, speed: 90},
    {id: 69, name: 'Bellsprout', element: 'grass', hp: 40, attack: 30, defense: 70, specialAttack: 35, specialDefense: 70, speed: 50},
    {id: 70, name: 'Weepinbell', element: 'grass', hp: 55, attack: 45, defense: 85, specialAttack: 50, specialDefense: 85, speed: 65},
    {id: 71, name: 'Victreebel', element: 'grass', hp: 70, attack: 70, defense: 100, specialAttack: 65, specialDefense: 100, speed: 80},
    {id: 72, name: 'Tentacool', element: 'water', hp: 70, attack: 100, defense: 50, specialAttack: 35, specialDefense: 50, speed: 40},
    {id: 73, name: 'Tentacruel', element: 'water', hp: 100, attack: 120, defense: 80, specialAttack: 65, specialDefense: 80, speed: 80},
    {id: 74, name: 'Geodude', element: 'rock', hp: 20, attack: 30, defense: 30, specialAttack: 100, specialDefense: 30, speed: 40},
    {id: 75, name: 'Graveler', element: 'rock', hp: 35, attack: 45, defense: 45, specialAttack: 115, specialDefense: 45, speed: 55},
    {id: 76, name: 'Golem', element: 'rock', hp: 45, attack: 65, defense: 55, specialAttack: 130, specialDefense: 55, speed: 80},
    {id: 77, name: 'Ponyta', element: 'fire', hp: 90, attack: 65, defense: 65, specialAttack: 55, specialDefense: 65, speed: 50},
    {id: 78, name: 'Rapidash', element: 'fire', hp: 105, attack: 80, defense: 80, specialAttack: 70, specialDefense: 80, speed: 65},
    {id: 79, name: 'Slowpoke', element: 'water', hp: 15, attack: 40, defense: 40, specialAttack: 65, specialDefense: 40, speed: 90},
    {id: 80, name: 'Slowbro', element: 'water', hp: 30, attack: 80, defense: 100, specialAttack: 110, specialDefense: 100, speed: 95},
    {id: 81, name: 'Magnemite', element: 'electric', hp: 45, attack: 55, defense: 95, specialAttack: 70, specialDefense: 95, speed: 25},
    {id: 82, name: 'Magneton', element: 'electric', hp: 70, attack: 70, defense: 120, specialAttack: 95, specialDefense: 120, speed: 50},
    {id: 83, name: 'Farfetchd', element: 'normal', hp: 60, attack: 62, defense: 58, specialAttack: 55, specialDefense: 58, speed: 52},
    {id: 84, name: 'Doduo', element: 'normal', hp: 75, attack: 35, defense: 35, specialAttack: 45, specialDefense: 35, speed: 35},
    {id: 85, name: 'Dodrio', element: 'normal', hp: 110, attack: 60, defense: 60, specialAttack: 70, specialDefense: 60, speed: 60},
    {id: 86, name: 'Seel', element: 'water', hp: 45, attack: 70, defense: 45, specialAttack: 55, specialDefense: 45, speed: 65},
    {id: 87, name: 'Dewgong', element: 'water', hp: 70, attack: 95, defense: 70, specialAttack: 80, specialDefense: 70, speed: 90},
    {id: 88, name: 'Grimer', element: 'poison', hp: 25, attack: 50, defense: 40, specialAttack: 50, specialDefense: 40, speed: 80},
    {id: 89, name: 'Muk', element: 'poison', hp: 50, attack: 100, defense: 65, specialAttack: 75, specialDefense: 65, speed: 105},
    {id: 90, name: 'Shellder', element: 'water', hp: 40, attack: 25, defense: 45, specialAttack: 100, specialDefense: 45, speed: 30},
    {id: 91, name: 'Cloyster', element: 'water', hp: 70, attack: 45, defense: 85, specialAttack: 180, specialDefense: 85, speed: 50},
    {id: 92, name: 'Gastly', element: 'ghost', hp: 80, attack: 35, defense: 100, specialAttack: 30, specialDefense: 100, speed: 30},
    {id: 93, name: 'Haunter', element: 'ghost', hp: 95, attack: 55, defense: 115, specialAttack: 45, specialDefense: 115, speed: 45},
    {id: 94, name: 'Gengar', element: 'ghost', hp: 110, attack: 75, defense: 130, specialAttack: 60, specialDefense: 130, speed: 60},
    {id: 95, name: 'Onix', element: 'rock', hp: 70, attack: 45, defense: 30, specialAttack: 160, specialDefense: 30, speed: 35},
    {id: 96, name: 'Drowzee', element: 'psychic', hp: 42, attack: 90, defense: 43, specialAttack: 45, specialDefense: 43, speed: 60},
    {id: 97, name: 'Hypno', element: 'psychic', hp: 67, attack: 115, defense: 73, specialAttack: 70, specialDefense: 73, speed: 85},
    {id: 98, name: 'Krabby', element: 'water', hp: 50, attack: 25, defense: 25, specialAttack: 90, specialDefense: 25, speed: 30},
    {id: 99, name: 'Kingler', element: 'water', hp: 75, attack: 50, defense: 50, specialAttack: 115, specialDefense: 50, speed: 55},
    {id: 100, name: 'Voltorb', element: 'electric', hp: 100, attack: 55, defense: 55, specialAttack: 50, specialDefense: 55, speed: 40},
    {id: 101, name: 'Electrode', element: 'electric', hp: 150, attack: 80, defense: 80, specialAttack: 70, specialDefense: 80, speed: 60},
    {id: 102, name: 'Exeggcute', element: 'grass', hp: 40, attack: 45, defense: 60, specialAttack: 80, specialDefense: 60, speed: 60},
    {id: 103, name: 'Exeggutor', element: 'grass', hp: 55, attack: 75, defense: 125, specialAttack: 85, specialDefense: 125, speed: 95},
    {id: 104, name: 'Cubone', element: 'ground', hp: 35, attack: 50, defense: 40, specialAttack: 95, specialDefense: 40, speed: 50},
    {id: 105, name: 'Marowak', element: 'ground', hp: 45, attack: 80, defense: 50, specialAttack: 110, specialDefense: 50, speed: 60},
    {id: 106, name: 'Hitmonlee', element: 'fighting', hp: 87, attack: 110, defense: 35, specialAttack: 53, specialDefense: 35, speed: 50},
    {id: 107, name: 'Hitmonchan', element: 'fighting', hp: 76, attack: 110, defense: 35, specialAttack: 79, specialDefense: 35, speed: 50},
    {id: 108, name: 'Lickitung', element: 'normal', hp: 30, attack: 75, defense: 60, specialAttack: 75, specialDefense: 60, speed: 90},
    {id: 109, name: 'Koffing', element: 'poison', hp: 35, attack: 45, defense: 60, specialAttack: 95, specialDefense: 60, speed: 40},
    {id: 110, name: 'Weezing', element: 'poison', hp: 60, attack: 70, defense: 85, specialAttack: 120, specialDefense: 85, speed: 65},
    {id: 111, name: 'Rhyhorn', element: 'ground', hp: 25, attack: 30, defense: 30, specialAttack: 95, specialDefense: 30, speed: 80},
    {id: 112, name: 'Rhydon', element: 'ground', hp: 40, attack: 45, defense: 45, specialAttack: 120, specialDefense: 45, speed: 105},
    {id: 113, name: 'Chansey', element: 'normal', hp: 50, attack: 105, defense: 35, specialAttack: 5, specialDefense: 35, speed: 250},
    {id: 114, name: 'Tangela', element: 'grass', hp: 60, attack: 40, defense: 100, specialAttack: 115, specialDefense: 100, speed: 65},
    {id: 115, name: 'Kangaskhan', element: 'normal', hp: 90, attack: 80, defense: 40, specialAttack: 80, specialDefense: 40, speed: 105},
    {id: 116, name: 'Horsea', element: 'water', hp: 60, attack: 25, defense: 70, specialAttack: 70, specialDefense: 70, speed: 30},
    {id: 117, name: 'Seadra', element: 'water', hp: 85, attack: 45, defense: 95, specialAttack: 95, specialDefense: 95, speed: 55},
    {id: 118, name: 'Goldeen', element: 'water', hp: 63, attack: 50, defense: 35, specialAttack: 60, specialDefense: 35, speed: 45},
    {id: 119, name: 'Seaking', element: 'water', hp: 68, attack: 80, defense: 65, specialAttack: 65, specialDefense: 65, speed: 80},
    {id: 120, name: 'Staryu', element: 'water', hp: 85, attack: 55, defense: 70, specialAttack: 55, specialDefense: 70, speed: 30},
    {id: 121, name: 'Starmie', element: 'water', hp: 115, attack: 85, defense: 100, specialAttack: 85, specialDefense: 100, speed: 60},
    {id: 122, name: 'Mr-Mime', element: 'psychic', hp: 90, attack: 120, defense: 100, specialAttack: 65, specialDefense: 100, speed: 40},
    {id: 123, name: 'Scyther', element: 'bug', hp: 105, attack: 80, defense: 55, specialAttack: 80, specialDefense: 55, speed: 70},
    {id: 124, name: 'Jynx', element: 'ice', hp: 95, attack: 95, defense: 115, specialAttack: 35, specialDefense: 115, speed: 65},
    {id: 125, name: 'Electabuzz', element: 'electric', hp: 105, attack: 85, defense: 95, specialAttack: 57, specialDefense: 95, speed: 65},
    {id: 126, name: 'Magmar', element: 'fire', hp: 93, attack: 85, defense: 100, specialAttack: 57, specialDefense: 100, speed: 65},
    {id: 127, name: 'Pinsir', element: 'bug', hp: 85, attack: 70, defense: 55, specialAttack: 100, specialDefense: 55, speed: 65},
    {id: 128, name: 'Tauros', element: 'normal', hp: 110, attack: 70, defense: 40, specialAttack: 95, specialDefense: 40, speed: 75},
    {id: 129, name: 'Magikarp', element: 'water', hp: 80, attack: 20, defense: 15, specialAttack: 55, specialDefense: 15, speed: 20},
    {id: 130, name: 'Gyarados', element: 'water', hp: 81, attack: 100, defense: 60, specialAttack: 79, specialDefense: 60, speed: 95},
    {id: 131, name: 'Lapras', element: 'water', hp: 60, attack: 95, defense: 85, specialAttack: 80, specialDefense: 85, speed: 130},
    {id: 132, name: 'Ditto', element: 'normal', hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48},
    {id: 133, name: 'Eevee', element: 'normal', hp: 55, attack: 65, defense: 45, specialAttack: 50, specialDefense: 45, speed: 55},
    {id: 134, name: 'Vaporeon', element: 'water', hp: 65, attack: 95, defense: 110, specialAttack: 60, specialDefense: 110, speed: 130},
    {id: 135, name: 'Jolteon', element: 'electric', hp: 130, attack: 95, defense: 110, specialAttack: 60, specialDefense: 110, speed: 65},
    {id: 136, name: 'Flareon', element: 'fire', hp: 65, attack: 110, defense: 95, specialAttack: 60, specialDefense: 95, speed: 65},
    {id: 137, name: 'Porygon', element: 'normal', hp: 40, attack: 75, defense: 85, specialAttack: 70, specialDefense: 85, speed: 65},
    {id: 138, name: 'Omanyte', element: 'rock', hp: 35, attack: 55, defense: 90, specialAttack: 100, specialDefense: 90, speed: 35},
    {id: 139, name: 'Omastar', element: 'rock', hp: 55, attack: 70, defense: 115, specialAttack: 125, specialDefense: 115, speed: 70},
    {id: 140, name: 'Kabuto', element: 'rock', hp: 55, attack: 45, defense: 55, specialAttack: 90, specialDefense: 55, speed: 30},
    {id: 141, name: 'Kabutops', element: 'rock', hp: 80, attack: 70, defense: 65, specialAttack: 105, specialDefense: 65, speed: 60},
    {id: 142, name: 'Aerodactyl', element: 'rock', hp: 130, attack: 75, defense: 60, specialAttack: 65, specialDefense: 60, speed: 80},
    {id: 143, name: 'Snorlax', element: 'normal', hp: 30, attack: 110, defense: 65, specialAttack: 65, specialDefense: 65, speed: 160},
    {id: 144, name: 'Articuno', element: 'ice', hp: 85, attack: 125, defense: 95, specialAttack: 100, specialDefense: 95, speed: 90},
    {id: 145, name: 'Zapdos', element: 'electric', hp: 100, attack: 90, defense: 125, specialAttack: 85, specialDefense: 125, speed: 90},
    {id: 146, name: 'Moltres', element: 'fire', hp: 90, attack: 85, defense: 125, specialAttack: 90, specialDefense: 125, speed: 90},
    {id: 147, name: 'Dratini', element: 'dragon', hp: 50, attack: 50, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41},
    {id: 148, name: 'Dragonair', element: 'dragon', hp: 70, attack: 70, defense: 70, specialAttack: 65, specialDefense: 70, speed: 61},
    {id: 149, name: 'Dragonite', element: 'dragon', hp: 80, attack: 100, defense: 100, specialAttack: 95, specialDefense: 100, speed: 91},
    {id: 150, name: 'Mewtwo', element: 'psychic', hp: 130, attack: 90, defense: 154, specialAttack: 90, specialDefense: 154, speed: 106},
    {id: 151, name: 'Mew', element: 'psychic', hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100},
    
]

export const poisonPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.element === 'poison')

// Bulbasaur, Squirtle, Charmander, Pikachu, Eevee, Meowth
export const starterPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 1 || pokemon.id === 4 || pokemon.id === 7 || pokemon.id === 133 || pokemon.id === 25 || pokemon.id === 52)

// Mankey, Rattata, Pidgey, Nidoran-M, Nidoran-F
export const routeOnePokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 16 || pokemon.id === 19 || pokemon.id === 56 || pokemon.id === 29 || pokemon.id === 32)

// Butterfree, Beedrill, Ekans
export const routeTwoPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 12 || pokemon.id === 15 || pokemon.id === 23)

// Geodude, Onix, Diglett, Sandshrew => Prize 111 Rhyhorn
export const pewterPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 74 || pokemon.id === 95 || pokemon.id === 27 || pokemon.id === 50)

// Spearow, Rattata, Sandshrew, Mankey 
export const routeThreeFourPokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 19 || pokemon.id === 21 || pokemon.id === 27 || pokemon.id === 56)

// Pokemon Centre - If got five pokemon, gift Magikarp (129)

// Pokemon Centre - If got ten pokemon, gift Bulbasaur/Charmander/Squirtle

// Oddish, pidgey, bellsprout, venonat, pidgeotto
export const routeTwentyFivePokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 43 || pokemon.id === 16 || pokemon.id === 17 || pokemon.id === 69 || pokemon.id === 48)

// Pidgey, rattata, abra, jigglypuff, pidgeotto
export const routeFivePokemon: Pokemon[] = allPokemon.filter(pokemon => pokemon.id === 16 || pokemon.id === 19 || pokemon.id === 63 || pokemon.id === 39 || pokemon.id === 17)

// Pokemon centre - If got 30 pokemon gift Machoke