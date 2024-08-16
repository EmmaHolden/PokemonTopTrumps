import { useState } from "react";
import { Pokemon } from "../pokemonList";
import { Link } from "react-router-dom";


const Gym = () => {

    return (
        <div>
            <div className = "explore-horizontal-container">
                <div className="explore-image-container">
                    <Link to='/battle-gym/pewter-gym'>
                        <img className = "home-button-image" src = "../images/pewterCity.png" alt="A pokemon trainer with pokemon"></img>
                        <div className="explore-button-title"><h3>Pewter City Gym</h3></div>
                    </Link>
                </div>
                <div className="explore-image-container">
                    <Link to='/battle-gym/cerulean-gym'>
                        <img className = "home-button-image" src = "../images/ceruleanCity.png" alt ="Path through a grassy field"></img>
                        <div className="explore-button-title"><h3>Cerulean City Gym</h3></div>
                    </Link>
                </div>
                <div className="explore-image-container">
                    <Link to='/battle-gym/mt-moon'>
                        <img className = "home-button-image" src = "../images/vermillionCity.png" alt="A castle on a hill"></img>
                        <div className="explore-button-title"><h3>Vermillion City Gym</h3></div>
                    </Link>
                </div>
            </div>              
            <div className = "explore-horizontal-container">
                <div className="explore-image-container">
                    <Link to='/battle-gym/power-plant'>
                        <img className = "home-button-image" src = "../images/celadonCity.png" alt="A pokemon trainer with pokemon"></img>
                        <div className="explore-button-title"><h3>Celadon City Gym</h3></div>
                    </Link>
                </div>

                <div className="explore-image-container">
                    <Link to='/battle-gym/rock-tunnel'>
                        <img className = "home-button-image" src = "../images/fuschiaCity.png" alt ="Path through a grassy field"></img>
                        <div className="explore-button-title"><h3>Fuschia City Gym</h3></div>
                    </Link>
                </div>
                <div className="explore-image-container">
                    <Link to='/battle-gym/cinnabar-island'>
                        <img className = "home-button-image" src = "../images/saffronCity.png" alt="A castle on a hill"></img>
                        <div className="explore-button-title"><h3>Saffron City Gym</h3></div>
                    </Link>
                </div>
            </div>                          
                

        </div> 

 );
}

export default Gym;