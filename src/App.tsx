import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import StarterProvider, { StarterContext } from "./context/starter"
import packageJson from "../package.json";
import "./index.css"
import Home from "./pages/home";
import ChooseStarter from "./pages/chooseStarter";
import Explore from "./pages/explore";
import Battle from "./pages/battleGymLeader";
import ChooseDeck from "./pages/chooseDeck";

function App() {
    console.log(`VERSION: ${packageJson.version}.${process.env.REACT_APP_BUILD_NUM}`);
    const {starterChosen, setStarterChosen} = useContext(StarterContext)

  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={starterChosen ? <Home/> : <ChooseStarter/>}/> 
                    <Route path='/explore-wild' element={starterChosen ? <Explore/> : <Navigate to="/" replace />}/>
                    <Route path='/choose-pokemon-team' element={starterChosen ? <ChooseDeck/> : <Navigate to="/" replace />}/>
                    <Route path='/battle-gym-leader' element={starterChosen ? <Battle/> : <Navigate to="/" replace />}/>
                    <Route path='*' element={<Navigate to="/" replace />}/>
                </Routes>
        </BrowserRouter>
    </div>

)
}

export default App;
