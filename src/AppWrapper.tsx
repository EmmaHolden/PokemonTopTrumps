import React from 'react'
import App from './App'
import StarterProvider from './context/starter'
import DeckProvider from './context/deckProvider'

const AppWrapper = () => {
  return (
    <StarterProvider>
      <DeckProvider>
        <App />
      </DeckProvider>
    </StarterProvider>
  )
}

export default AppWrapper