import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState  } from 'react'
import {useNavigate} from 'react-router-dom'

const SingleHouse = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [house, setHouse] = useState({})

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

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/deleteHouse/${id}`)
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
        <h2>House: {house.name}</h2>
        <p>Price: {house.price}</p>
        <p>Price: {house.offer}</p>
        {
            house.sold ? <p>Sold!!</p> : <p>For sale!!</p>
        }
        <button onClick={handleDelete}  style={{backgroundColor: 'red'}}>Delete</button>
    </div>
  )
}

export default SingleHouse