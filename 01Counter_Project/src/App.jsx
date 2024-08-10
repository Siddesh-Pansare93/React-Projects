import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(10)

  const addValue = () => {
     if (Counter >= 20){
      alert("limit exceedeed")
    } else {
      Counter += 1;
      setCounter(Counter)
    }
  }
  const removeValue = () => {

    if (Counter <= 0) {
      alert('cannot be negative  ');
    } else {
      Counter -= 1;
      setCounter(Counter => Counter-1)
      setCounter(Counter => Counter-1)
      setCounter(Counter => Counter-1)
    }
  }


  return (
    <>
      <h1> Counter : {Counter}  </h1>
      <button onClick={addValue}>Count up </button>
      <br></br><br></br>
      <button onClick={removeValue}>Count down</button>
    </>
  )
}

export default App
