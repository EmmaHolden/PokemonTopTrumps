import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./home";
import ChooseStarter from "./choose-starter";
import { useState } from "react";

function App() {

    const [starterChosen, setStarterChosen] = useState(false)

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={starterChosen ? <Home/> : <ChooseStarter />}/>  
            </Routes>
        </BrowserRouter>

    </div>

)
}

export default App;
