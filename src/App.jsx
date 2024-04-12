import { useState } from 'react'
import './App.css'
import Weatherapp from './assets/Weatherapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weatherapp />
    </>
  )
}

export default App
