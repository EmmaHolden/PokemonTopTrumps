import { useState } from "react";
import Card from "../components/card";
import { Pokemon, allPokemon } from "../pokemonList";
import { Link } from "react-router-dom";


const Explore = () => {
    return (
            <div>
                <div className = "explore-horizontal-container">
                    <div className="explore-image-container">
                        <Link to='/battle-arena/viridian-forest'>
                            <img className = "home-button-image" src = "../images/viridianForest.png" alt="A pokemon trainer with pokemon"></img>
                            <div className="explore-button-title"><h3>Viridian Forest</h3></div>
                        </Link>
                    </div>
                    <div className="explore-image-container">
                        <Link to='/battle-arena/lavender-town'>
                            <img className = "home-button-image" src = "../images/lavenderTown.png" alt ="Path through a grassy field"></img>
                            <div className="explore-button-title"><h3>Lavender Tower</h3></div>
                        </Link>
                    </div>
                    <div className="explore-image-container">
                        <Link to='/battle-arena/mt-moon'>
                            <img className = "home-button-image" src = "../images/mtMoon.png" alt="A castle on a hill"></img>
                            <div className="explore-button-title"><h3>Mt. Moon</h3></div>
                        </Link>
                    </div>
                </div>              
                <div className = "explore-horizontal-container">
                    <div className="explore-image-container">
                        <Link to='/battle-arena/power-plant'>
                            <img className = "home-button-image" src = "../images/powerPlant.png" alt="A pokemon trainer with pokemon"></img>
                            <div className="explore-button-title"><h3>Power Plant</h3></div>
                        </Link>
                    </div>

                    <div className="explore-image-container">
                        <Link to='/battle-arena/rock-tunnel'>
                            <img className = "home-button-image" src = "../images/rockTunnel.png" alt ="Path through a grassy field"></img>
                            <div className="explore-button-title"><h3>Rock Tunnel</h3></div>
                        </Link>
                    </div>
                    <div className="explore-image-container">
                        <Link to='/battle-arena/cinnabar-island'>
                            <img className = "home-button-image" src = "../images/cinnabarIsland.png" alt="A castle on a hill"></img>
                            <div className="explore-button-title"><h3>Cinnabar Island</h3></div>
                        </Link>
                    </div>
                </div>                          
                    

            </div> 

     );
}
 
export default Explore;