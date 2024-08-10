import React, { useState } from "react";

function App() {

  const [color, setColor] = useState('red')

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 h-45 inset-x-8 flex flex-wrap justify-center  px-2 rounded-xl">
        <div className=" flex flex-wrap justify-center gap-3  px-3 py-3 rounded-xl" style={{ backgroundColor: 'White' }}>
          <button
          onClick={()=>{
            setColor('Orange')
          }}
            style={{ backgroundColor: 'Orange' }}
          >ORANGE
          </button>
          <button
          onClick={()=>{
            setColor('red')
          }}
            style={{ backgroundColor: 'red' }}
          >RED
          </button>
          <button
          onClick={()=>{
            setColor('green')
          }}
            style={{ backgroundColor: 'green' }}
          >GREEN
          </button>
          <button
          onClick={()=>{
            setColor('lavender')
          }}
          className="text-black outline-none"
            style={{ backgroundColor: 'lavender' }}
          > LAVENDER
          </button>
          <button
          onClick={()=>{
            setColor('blue')
          }}
            style={{ backgroundColor: 'blue' }}
          > BLUE
          </button>
          <button
          onClick={()=>{
            setColor('yellow')
          }}
            className="text-black"
            style={{ backgroundColor: 'yellow' }}
          > YKOELLOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default App