import { useState, useEffect } from 'react'
import './App.css'
import StarshipCard from './components/StarshipCard'

function App() {
  const [starships, setStarships] = useState([])
  const [page, setPage] = useState(1)

  const getAllStarships = async (page) => {
    try{
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${page}`)
      const data = await response.json()
      setStarships(data.results)
    } catch(e){
      console.error(e)
    }
  }
  
  
  useEffect(() => {
    getAllStarships(page)
  }, [])

  
  const nextPage = (evt) => {
    evt.preventDefault()
    setPage(page + 1)
    getAllStarships(page + 1)
  }

  const backPage = (evt) => {
    evt.preventDefault()
    setPage(page - 1)
    getAllStarships(page - 1)
  }

  let nextButton = document.querySelector('#next-button')
  let backButton = document.querySelector('#prev-button')
  if(page === 1){
    backButton?.setAttribute('disabled', '')
  }else{
    backButton?.removeAttribute('disabled', '')
  }
  
  if(page === 4){
    nextButton?.setAttribute('disabled', '')
  }else{
    nextButton?.removeAttribute('disabled', '')
  }
  const audio = new Audio('/images/StarWarsOpening.mp3')
  let playButton = document.querySelector('#play')
  let pauseButton = document.querySelector('#pause')
  playButton?.addEventListener('click', () => {
    audio.play()
  })
  pauseButton?.addEventListener('click', () => {
    audio.pause()
  })


  return (
    <div className='App'>
      <nav>
        <h1>Star Wars</h1>
        <div>
          <img id='play' src='/images/play.png' width='20px'/>
          <img id='pause' src='/images/pause.png' width='30px'/>
        </div>
      </nav>
      <main>
        <div id='buttons'>
          <button id='prev-button' onClick={backPage}>Previous Page</button>
          <button id='next-button' onClick={nextPage}>Next Page</button>
        </div>
        <StarshipCard ships={starships} />
      </main>
    </div>
  )
}

export default App
