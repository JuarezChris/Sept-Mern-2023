import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const navigate = useNavigate()
    const [house, setHouse] = useState({
        name: '',
        price: 0,
        offer: 0,
        sold: false
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setHouse({...house, [e.target.name]: e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/newHouse", house)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setError(err.response.data.error.errors)
            })
    }

  return (
    <div>
        <h2>Sell your Home today!</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={handleChange} />
                {
                    error.name ? <p>{error.name.message}</p> : null
                }
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="text" name="price" onChange={handleChange}/>
                {
                    error.price ? <p>{error.price.message}</p> : null
                }
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form