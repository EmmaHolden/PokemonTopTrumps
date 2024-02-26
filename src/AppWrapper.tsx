import React from 'react'
import App from './App'
import StarterProvider from './context/StarterProvider'

const AppWrapper = () => {
  return (
    <StarterProvider>
      <App />
    </StarterProvider>
  )
}

export default AppWrapper