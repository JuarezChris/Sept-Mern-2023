import { useState } from 'react'
import List from './components/List'
import './App.css'

function App() {
  const list = ['Hello', 'Hi', 'Hola', 'Sup']
  return (
    <>
      <h1>Hello Class component!!</h1>
      <List list={list}/>
    </>
  )
}

export default App
