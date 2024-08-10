import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-4 font-bold mb-4'> Siddesh </h1>
      
      < Card name='Hp' btnText = 'Click TO Visit'/>
      < Card name='Lenovo' btnText = 'Click TO Check'/>
    </>
  )
}

export default App
