import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import ChooseStarter from "./pages/choose-starter";
import { useState } from "react";
import packageJson from "../package.json";

function App() {
    console.log(process.env.REACT_APP_BUILD_NUM)
    console.log(packageJson.version)
   
    console.log(`VERSION: ${packageJson.version}.${process.env.REACT_APP_BUILD_NUM}`);

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
