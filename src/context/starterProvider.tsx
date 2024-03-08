import { createContext, Dispatch, ReactNode, SetStateAction, useState, useEffect, PropsWithChildren } from 'react'
import ReactDOM from "react-dom/client";

export const StarterContext = createContext({
  starterChosen: false,
  setStarterChosen: (starterChosen: boolean) => {},
});

const StarterProvider = ({children}: PropsWithChildren<{}> ) => {
    let localStarter: string = JSON.parse(localStorage.getItem('starter') as string);
    let starterBool = !!localStarter
    const [starterChosen, setStarterChosen] = useState(starterBool);

    useEffect(() => {
      localStorage.setItem('starter', JSON.stringify(starterChosen));
    }, [starterChosen])
  
    return (
      <div>
        <StarterContext.Provider value={{starterChosen, setStarterChosen}}>
            {children}
        </StarterContext.Provider>
      </div>
    );
  };

  export default StarterProvider;