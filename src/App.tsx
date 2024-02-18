import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./home";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />   
            </Routes>
        </BrowserRouter>

    </div>

)
}

export default App;
