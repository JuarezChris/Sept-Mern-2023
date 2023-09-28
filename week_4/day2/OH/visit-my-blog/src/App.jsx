import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bart from './components/Bart'
import Nav from './components/Nav'
import Doggie from './components/Doggie'

function App() {
  const [blogPost, setBlogPost] = useState('')
  // create a state set to and object to save all posts for bart and santas little helper
  return (
    <>
      <BrowserRouter>
        <h1>The Simpsons</h1>
        <Nav/>
        <Routes>
          <Route path='/bart' element={ <Bart blogPost={blogPost} setBlogPost={setBlogPost}/> }/>
          <Route path='/santalittlehelper' 
                element={ <Doggie blogPost={blogPost} setBlogPost={setBlogPost}/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
