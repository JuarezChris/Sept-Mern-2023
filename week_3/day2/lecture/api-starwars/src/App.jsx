import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    console.log("Mounted")
    axios.get('https://swapi.dev/api/planets')
      .then(res => {
        // console.log(res.data.results)
        setPlanets(res.data.results)
      })
      .catch(err => console.log(err))
    },[])
    
    // console.log(planets)

    const getStarwarsChar = () => {
      axios.get('https://swapi.dev/api/people')
      .then(res => {
        // console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
    }

    console.log(characters)

  return (
    <>
      <button onClick={getStarwarsChar}>Click me</button>
      <h1>Starwars API!!</h1>
      {
        planets.map((planet,idx) => (
          <div key={idx} >
            <p>{planet.name}</p>
          </div>
        ))
      }
      {
        characters.map((char,idx) => (
          <div key={idx} >
            <p>{char.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
