import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import ChooseStarter from "./pages/choose-starter";
import { useContext, useState } from "react";

function App() {

    const [starterChosen, setStarterChosen] = useState(false)

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={starterChosen ? <Home/> : <ChooseStarter starterChosen= {starterChosen} setStarterChosen={setStarterChosen}/>}/>  
            </Routes>
        </BrowserRouter>

    </div>

)
}

export default App;
