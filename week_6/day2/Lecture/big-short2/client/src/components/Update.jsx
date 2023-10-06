import React from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [house, setHouse] = useState({
        name: '',
        price: 0,
        offer: 0,
        sold: false
    })
    const [error, setError] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneHouse/${id}`)
            .then(res => {
                console.log(res)
                setHouse(res.data.house)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const handleChange = (e) => {
        setHouse({...house, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/updateHouse/${id}`, house)
            .then(res => {
                console.log(res)
                navigate(`/oneHouse/${id}`)
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.errors)
            })
    }

  return (
    <div>
        <h1>Edit House</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={house.name} onChange={handleChange} />
                {
                    error.name ? <p>{error.name.message}</p> : null
                }
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="text" name="price" value={house.price} onChange={handleChange}/>
                {
                    error.price ? <p>{error.price.message}</p> : null
                }
            </div>
            <div>
                <label htmlFor="">Offer</label>
                <input type="text" name="offer" value={house.offer} onChange={handleChange}/>
                {
                    error.offer ? <p>{error.offer.message}</p> : null
                }
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Update