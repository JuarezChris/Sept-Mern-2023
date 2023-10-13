import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import HomePage from './components/HomePage'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Register/>}/>
          <Route path='/homepage' element={ <HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
