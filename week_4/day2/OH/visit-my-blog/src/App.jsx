import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bart from './components/Bart'
import Nav from './components/Nav'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <h1>The Simpsons</h1>
        <Nav/>
        <Routes>
          <Route path='/bart' element={ <Bart/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
