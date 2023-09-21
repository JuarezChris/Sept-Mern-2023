import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate = useNavigate()
    const [thisWord, setThisWord] = useState('')
    const [color, setColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/word/${thisWord}/${color}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Word:</label>
                <input type="text" onChange={(e) => setThisWord(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Color:</label>
                <input type="text" onChange={(e) => setColor(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form