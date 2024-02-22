import { useState } from "react";
import Card from "../card";
import { starterPokemon, allPokemon } from "../pokemonList";


interface ChooseStarterProps {
    starterChosen: boolean;
    setStarterChosen: any;
}

const ChooseStarter = ({starterChosen, setStarterChosen}: ChooseStarterProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    let currentPokemon = allPokemon[currentIndex]

    const handlePrevious = () => {
        console.log("PRESSED PREV")
        console.log(`${currentIndex} - ${currentIndex + 1} - ${currentIndex + 2}`)
        console.log(`${currentIndex % 151} - ${(currentIndex + 1) % 151} - ${(currentIndex + 2) % 151}`)
        console.log("BREAK")
        if (currentIndex === 0){
            setCurrentIndex(allPokemon.length - 1)
        } else {
            let newIndex = currentIndex
            newIndex -= 1
            setCurrentIndex(newIndex)
        }
    }
    const handleNext = () => {
        console.log("PRESSED NEXT")
        console.log(`${currentIndex} - ${currentIndex + 1} - ${currentIndex + 2}`)
        console.log(`${currentIndex % 151} - ${(currentIndex + 1) % 151} - ${(currentIndex + 2) % 151}`)
        console.log("BREAK")
        if (currentIndex === allPokemon.length){
            setCurrentIndex(0)
        } else {
            let newIndex = currentIndex
            newIndex += 1;
            setCurrentIndex(newIndex);
        }
    }

    const handleSubmit = () => {
        setStarterChosen(true)
    }
    
    return ( 
        <div className = "cardsContainer">
                    <button onClick = {handlePrevious}>{"<"}</button>
                    <div className = "topCards" onClick = {handleSubmit}>
                        <Card pokemon = {allPokemon[currentIndex % 151]} isDisabled/>
                        <Card pokemon = {allPokemon[(currentIndex + 1) % 151]} isDisabled/>
                        <Card pokemon = {allPokemon[(currentIndex + 2) % 151]} isDisabled/>

                    </div>
                    <button onClick = {handleNext}>{">"}</button>
        </div>
     );
}
 
export default ChooseStarter;