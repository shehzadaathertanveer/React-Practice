import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  const addValue = () => {
    if (value < 20) {
      setValue(value + 1)
    }
  }

  const subtractValue = () => {
    if(value !== 0) {
      setValue(value - 1)
    }
  }

  return (
    <>
      <h1>counter</h1>
      <h2>current value: {value}</h2>
      <button id="increase-btn" onClick={addValue}>increase value</button>
      <br/>
      <button id="decrease-btn" onClick={subtractValue}>decrease value</button>
    </>
  )
}

export default App
