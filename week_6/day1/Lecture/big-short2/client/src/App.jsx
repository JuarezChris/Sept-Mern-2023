import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DisplayAll from './components/DisplayAll'

function App() {
  
// essentials 
// components check
// import BrowserRouter Routes, Route from react-router-dom check


  return (
    <>
      <h1>Buy a house!</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={ <DisplayAll/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
