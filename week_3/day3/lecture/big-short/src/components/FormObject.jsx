import React from 'react'
import { useState } from 'react'

function FormObject(props) {
    const {housePurchases, setHousePurchases} = props

    const [application, setApplication] = useState({
        homeName: '',
        offer: 0
    })
    const [error, setError] = useState('')

    const handleVals = (e) => {
        console.log(e.target.name, e.target.value)
        setApplication({...application, [e.target.name]: e.target.value})
    }

    const buyHome = (e) =>{
        e.preventDefault()
        if(application.homeName.length < 3 || application.offer < 3){
            setError("Invalid submission please try again")
        }
        else{
            setError('')
            console.log(application)
            setHousePurchases([...housePurchases, application])
    
             setApplication({
                homeName: '',
                offer: 0
            })
        }
    }

  return (
    <div>
        <h1>Buy a home!</h1>
        <form onSubmit={buyHome}>
            {
                error ? <p>{error}</p> : null
            }
            <label>Home:</label>
            <input type="text" value={application.homeName} name="homeName" onChange={handleVals}/>
            {
                application.homeName.length < 3 && application.homeName.length > 0
                ? <p>Home name needs to be longer than 3 characters</p> : null
            }
            <label>offer:</label>
            <input type="number" value={application.offer} name="offer" onChange={handleVals}/>
            {
                application.offer < 3 && application.offer > 0
                ? <p>Offer needs to be greater than 3</p> : null
            }
            <button>Submit</button>
        </form>
        {/* line 36 was added at the very end of lecture after our end of class stuf */}
        {/* <p>HomeName: {application.homeName}</p> */}
        {/* This show real time updates  */}

    </div>
  )
}

export default FormObject