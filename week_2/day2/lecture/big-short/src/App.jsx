import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import FormObject from './components/FormObject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> */}
      <FormObject/>
    </>
  )
}

export default App
