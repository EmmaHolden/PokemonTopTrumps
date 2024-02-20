import { useState } from "react";
import Card from "../card";
import { starterPokemon, allPokemon } from "../pokemonList";


interface ChooseStarterProps {
    starterChosen: boolean;
    setStarterChosen: any;
}

const ChooseStarter = ({starterChosen, setStarterChosen}: ChooseStarterProps) => {

    const [topItems, setTopItems] = useState([allPokemon[0], allPokemon[1], allPokemon[2]])
    const [currentIndex, setCurrentIndex] = useState(3)
    let currentPokemon = allPokemon[currentIndex]

    const increaseIndex = () => {
        if (currentIndex + 1 === allPokemon.length){
            setCurrentIndex(0)
        } else {
            let newIndex = currentIndex
            newIndex += 1;
            setCurrentIndex(newIndex);
        }
    }

    const handleNext = () => {
        increaseIndex();
        let newItems = [...topItems]
        newItems.push(allPokemon[currentIndex])
        newItems.shift()
        setTopItems(newItems)
    }

    const handleSubmit = () => {
        setStarterChosen(true)
    }
    
    return ( 
        <div className = "cardsContainer">
                    <div className = "topCards" onClick = {handleSubmit}>
                        <Card pokemon = {topItems[0]} isDisabled/>
                        <Card pokemon = {topItems[1]} isDisabled/>
                        <Card pokemon = {topItems[2]} isDisabled/>

                    </div>
                    <button onClick = {handleNext}>{">"}</button>
        </div>
     );
}
 
export default ChooseStarter;