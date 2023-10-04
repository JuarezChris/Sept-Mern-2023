import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// essentials 
// lifting state
// Forms
// needs states check
// need useEffect
// need axios

const DisplayAll = () => {
    const [allHouses, setAllHouses] = useState([])

    useEffect(() => {
        // EXECUTE ROUTES
        axios.get('http://localhost:8000/api/allHouses')
            .then(res => {
                console.log(res)
                setAllHouses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])


  return (
    <div>
        <h1>Houses for Sale!!</h1>
        {
            allHouses.map((house) => (
                <div key={house._id}>
                    <h2>{house.name}</h2>
                    <p>Price: {house.price}</p>
                    {
                        house.sold ? <p>Sold!!</p> : <p>For sale!!</p>
                    }
                    <Link to={`/oneHouse/${house._id}`}>Details</Link>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAll