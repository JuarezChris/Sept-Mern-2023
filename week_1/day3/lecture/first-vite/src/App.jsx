import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import DinoScreech from './assets/images/dinoScreech.jpeg'
import Yoshi from './assets/images/rex.jpg'
import Earl from './assets/images/rex_fam.jpg'

function App() {

  return (
    <div className='row'>
      <Card image={DinoScreech} name={"Screech"} trait={"Loves pets"} diet={"Potatoes"} />
      <Card image={Yoshi} name={"Yoshi"} trait={"Loves to Jump"} diet={"Turtle shells"}/>
      <Card image={Earl} name={"Earl"} trait={"Tree pusher"} diet={"Vegan"}/>
    </div>
  )
}

export default App