import { useState } from "react";
import Card from "../components/card";
import { Pokemon, allPokemon } from "../pokemonList";
import { Link } from "react-router-dom";


const Home = () => {
    return (
            <div>

                <img style = {{padding: 20}}className = "title-image" src = "../images/homeTitle.png" alt="A title stating 'Pokemon Battle Top Trumps'"></img>
                <div className = "horizontal-container">
                    <div className="image-overlay-container">
                        <Link to='/choose-pokemon-team'>
                            <img className = "home-button-image" src = "../images/choosePokemonTeam.jpg" alt="A pokemon trainer with pokemon"></img>
                            <div className="overlay"><p className="text">View your deck and choose your team.</p></div>
                            <div className="button-title"><h3>Build Your Team</h3></div>
                        </Link>
                    </div>

                    <div className="image-overlay-container">
                        <Link to='/explore-wild'>
                            <img className = "home-button-image" src = "../images/exploreWild.jpg" alt ="Path through a grassy field"></img>
                            <div className="overlay"><p className="text">Battle and catch pokemon to expand your deck.</p></div>
                            <div className="button-title"><h3>Explore the Wild</h3></div>
                        </Link>
                    </div>

                    <div className="image-overlay-container">
                        <Link to='/battle-gym-leader'>
                            <img className = "home-button-image" src = "../images/battleGymLeaders.jpg" alt="A castle on a hill"></img>
                            <div className="overlay"><p className="text">Test your skills as a trainer to gain rewards.</p></div>
                            <div className="button-title"><h3>Battle Gym Leaders</h3></div>
                        </Link>
                    </div>
                    
                </div>              
                    
                    

            </div> 

     );
}
 
export default Home;