import React from 'react'
import { useState } from 'react'

function FormObject(props) {
    const {housePurchases, setHousePurchases} = props

    const [application, setApplication] = useState({
        homeName: '',
        offer: 0
    })

    const handleVals = (e) => {
        console.log(e.target.name, e.target.value)
        setApplication({...application, [e.target.name]: e.target.value})
    }

    const buyHome = (e) =>{
        e.preventDefault()
        console.log(application)
        setHousePurchases([...housePurchases, application])
    }

  return (
    <div>
        <h1>Buy a home!</h1>
        <form className="bg-primary d-flex flex-column" onSubmit={buyHome}>
            <label>Home:</label>
            <input type="text" value={application.homeName} name="homeName" onChange={handleVals}/>
            <label>offer:</label>
            <input type="number" value={application.offer} name="offer" onChange={handleVals}/>
            <button>Submit</button>
        </form>
        {/* line 36 was added at the very end of lecture after our end of class stuf */}
        {/* <p>HomeName: {application.homeName}</p> */}
        {/* This show real time updates  */}

    </div>
  )
}

export default FormObject