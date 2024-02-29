import { createContext, Dispatch, ReactNode, SetStateAction, useState, useEffect, PropsWithChildren } from 'react'
import ReactDOM from "react-dom/client";
import { Pokemon } from '../pokemonList';

export type SetValue = (deck: Pokemon[]) => void;

type DeckContextInterface = {
  deck: Pokemon[];
  setDeck: SetValue;
}

export const DeckContext = createContext<DeckContextInterface>({
  deck: [],
  setDeck: () => {},
});

const DeckProvider = ({children}: PropsWithChildren<{}> ) => {
    const [deck, setDeck] = useState<Pokemon[]>([]);
    let localDeck = JSON.parse(localStorage.getItem('deck') || '{}');

    useEffect(() => {
      if (localDeck.length > 0){
        setDeck(localDeck)
      }
    }, []) 

    useEffect(() => {
      localStorage.setItem('deck', JSON.stringify(deck));
    }, [deck])
  
    return (
      <div>
        <DeckContext.Provider value={{deck, setDeck}}>
            {children}
        </DeckContext.Provider>
      </div>
    );
  };

  export default DeckProvider;