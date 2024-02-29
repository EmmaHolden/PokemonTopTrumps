import { useState } from "react";
import Card from "./card";
import { Pokemon } from "../pokemonList";
import Button from "./button";

interface CarouselProps {
    pokemonArray: Pokemon[];  
    isDisabled?: boolean;
    onClick?: any;
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
            <div className = "carousel-container">
                        <Button variant = "arrow" onClick = {handlePrevious}><img style = {{width: 100}} src = "../images/back.png" alt="A backward arrow"></img></Button>
                        <div className = "horizontal-container">
                            <Card pokemon = {pokemonArray[currentIndex % lengthOfArray]} isDisabled={isDisabled}/>
                            <Card pokemon = {pokemonArray[(currentIndex + 1) % lengthOfArray]} isDisabled={isDisabled}/>
                            <Card pokemon = {pokemonArray[(currentIndex + 2) % lengthOfArray]} isDisabled={isDisabled}/>
                        </div>
                        <Button variant = "arrow" onClick = {handleNext}><img style = {{width: 100}} src = "../images/forward.png" alt="A forward arrow"></img></Button>
            </div>
     );
}
 
export default Carousel;