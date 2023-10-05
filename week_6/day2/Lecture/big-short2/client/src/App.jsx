import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import Form from './components/Form'
import SingleHouse from './components/SingleHouse'
import Update from './components/Update'

function App() {
  
// essentials 
// components check
// import BrowserRouter Routes, Route from react-router-dom check


  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={ <DisplayAll/> } />
          <Route path="/sellHouse" element={ <Form/> } />
          <Route path="/oneHouse/:id" element={ <SingleHouse/> } />
          <Route path="/update/:id" element={ <Update/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
