import { useState, useEffect } from 'react'
import './App.css'
import StarshipCard from './components/StarshipCard'

function App() {
  const [starships, setStarships] = useState([])

  const getAllStarships = async () => {
    try{const response = await fetch(
      `https://swapi.dev/api/starships`)
    const data = await response.json()
    setStarships(data.results)
    } catch(e){
      console.error(e)
    }
  }

  useEffect(() => {
    getAllStarships(starships)
  }, [])

  const audio = new Audio('/public/images/StarWarsOpening.mp3')
  audio.play()

  return (
    <div className='App'>
      {/* <audio autoPlay src='/public/images/StarWarsOpening.mp3'></audio> */}
      <nav>
        <h1>Star Wars</h1>
      </nav>
      <StarshipCard ships={starships}/>
    </div>
  )
}

export default App
