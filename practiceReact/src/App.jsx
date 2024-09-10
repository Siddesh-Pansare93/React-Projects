import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const countries = [
    {
      name: 'India',
      value: 'IN',
      cities: [
        'mumbai',
        'delhi'
      ]
    },
    {
      name: 'Pakistan',
      value: 'PK',
      cities: [
        'lahore',
        'karachi'
      ]
    },
    {
      name: 'bangladesh',
      value: 'BN',
      cities: [
        'Dhaka',
        'Tanjavur'
      ]
    }
  ]
  const [country, setCountry] = useState(0)
  console.log(country);
  
 
  return (
    <>
    <select
     value={country}
   onChange={( (e) => setCountry(e.target.value))} 
    >
      {
        countries.map(( country , index) => {
          return <option key={index} value={index}> {country.name} </option>
          
        }
        )
      }

      {console.log(countries[country])
      }
    </select>
      {/* 2nd Dropdown */}
    <select value={country}>
      {
        countries[country]?.cities.map(( country , index) => {
          return <option key={index} >{country} </option>
        }
        )
      }
    </select>
    </>


  )

}

export default App

