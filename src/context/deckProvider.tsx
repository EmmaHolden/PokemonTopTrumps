import { createContext, Dispatch, ReactNode, SetStateAction, useState, useEffect, PropsWithChildren } from 'react'
import ReactDOM from "react-dom/client";
import { Pokemon } from '../pokemonList';

export type SetValue = (deck: Pokemon[]) => void;

type DeckContextInterface = {
  activeDeck: Pokemon[];
  setActiveDeck: SetValue;
}

export const DeckContext = createContext<DeckContextInterface>({
  activeDeck: [],
  setActiveDeck: () => {},
});

const DeckProvider = ({children}: PropsWithChildren<{}> ) => {
    let localActiveDeck = JSON.parse(localStorage.getItem('active-deck') || '[]');
    const [activeDeck, setActiveDeck] = useState<Pokemon[]>(localActiveDeck);
    
    useEffect(() => {
      localStorage.setItem('active-deck', JSON.stringify(activeDeck));
      let localActiveDeck = JSON.parse(localStorage.getItem('active-deck') || '[]');
    }, [activeDeck])

    return (
      <div>
        <DeckContext.Provider value={{activeDeck, setActiveDeck}}>
            {children}
        </DeckContext.Provider>
      </div>
    );
  };

  export default DeckProvider;