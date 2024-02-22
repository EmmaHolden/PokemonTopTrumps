import { useState } from "react";
import Card from "./card";
import { Pokemon } from "../pokemonList";

interface CarouselProps {
    pokemonArray: Pokemon[];  
    isDisabled?: boolean;
    onClick: any;
}

const Carousel = ({pokemonArray, isDisabled, onClick}: CarouselProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const lengthOfArray = pokemonArray.length;

    const handlePrevious = () => {
        if (currentIndex === 0){
              setCurrentIndex(lengthOfArray - 1)
          } else {
              let newIndex = currentIndex
              newIndex -= 1
              setCurrentIndex(newIndex)
          }
      }
      const handleNext = () => {
          if (currentIndex === lengthOfArray){
              setCurrentIndex(0)
          } else {
              let newIndex = currentIndex
              newIndex += 1;
              setCurrentIndex(newIndex);
          }
      }

    return ( 
            <div className = "cardsContainer">
                        <button className = "arrowButtons" onClick = {handlePrevious}><img style = {{width: 100}} src = "../images/back.png"></img></button>
                        <div className = "topCards" onClick = {onClick}>
                            <Card pokemon = {pokemonArray[currentIndex % lengthOfArray]} isDisabled={isDisabled}/>
                            <Card pokemon = {pokemonArray[(currentIndex + 1) % lengthOfArray]} isDisabled={isDisabled}/>
                            <Card pokemon = {pokemonArray[(currentIndex + 2) % lengthOfArray]} isDisabled={isDisabled}/>
                        </div>
                        <button className = "arrowButtons" onClick = {handleNext}><img style = {{width: 100}} src = "../images/forward.png"></img></button>
            </div>
     );
}
 
export default Carousel;