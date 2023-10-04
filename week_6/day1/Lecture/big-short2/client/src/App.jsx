import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import Form from './components/Form'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
