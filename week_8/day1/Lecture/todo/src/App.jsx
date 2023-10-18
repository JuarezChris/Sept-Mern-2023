import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import DisplayContext from './components/DisplayContext';


function App() {
  

  return (
    <div className="App">
        <DisplayContext />
        <Todo/>

    </div>
  )
}

export default App
