import { useState, useCallback  ,useEffect , useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  console.log(passwordRef.current?.value);
  window.navigator.clipboard.writeText(password) ; 
},[password])

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "~!@#$%^&*(){}"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  },[length, numberAllowed, characterAllowed, setpassword])

  useEffect(() => {
    passwordgenerator()
  } ,[length, numberAllowed, characterAllowed, passwordgenerator] )







  return (
    <>

      <h1 className='text-white text-3xl text-center' > Password generator </h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-3xl text-center mb-4' >
          Password generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly 
            ref={passwordRef}/>
          <button
            className='bg-blue-500 text-white shrink-0 outline-none px-2'
            onClick={copyPasswordToClipboard}
            >COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }
            }
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
