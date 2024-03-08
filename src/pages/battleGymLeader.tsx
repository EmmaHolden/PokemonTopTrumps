import { useState } from "react";
import { Pokemon } from "../pokemonList";

interface BattleProps {

}

const Gym= ({}: BattleProps) => {


    return ( 
        <div>
            <div className="wrapper">
                <div className="moving-van"><img src="../images/pokeballball.png"></img></div>
            </div>
        </div>
     );
}
 
export default Gym;