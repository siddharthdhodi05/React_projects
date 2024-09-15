import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(0)

  const increase = () =>{
    setCounter(counter+1)
  }

  const decrease = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>counter is {counter}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
