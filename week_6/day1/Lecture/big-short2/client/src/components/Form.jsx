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

    const handleChange = (e) => {
        setHouse({...house, [e.target.name]: e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/newHouse", house)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        navigate("/")
    }

  return (
    <div>
        <h2>Sell your Home today!</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="text" name="price" onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form