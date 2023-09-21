import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Word from './components/Word'
import Form from './components/Form'
import Nav from './components/Nav'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <h1>Routing</h1>
      <Nav/>
      <Routes>
        {/* <Route index element={ <Form/> } /> */}
        <Route index element={ <Home/> } />
        <Route path="/blog" element={ <Blog/> }/>
        <Route path="/word/:thisWord/:color" element={ <Word/> }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
