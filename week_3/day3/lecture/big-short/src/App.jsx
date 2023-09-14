import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import FormObject from './components/FormObject'
import Display from './components/Display'

function App() {
  const [housePurchases, setHousePurchases] = useState([])

  return (
    <>
      {/* <Form/> */}
      <FormObject 
        housePurchases={housePurchases}
        setHousePurchases={setHousePurchases}
      />
      <Display
        housePurchases={housePurchases}
      />
    </>
  )
}

export default App
