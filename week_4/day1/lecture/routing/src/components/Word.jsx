import React from 'react'
import { useParams } from 'react-router-dom'

function Word() {
    const {thisWord, color} = useParams()
    // const params = useParams()
    // console.log(params)

  return (
    <div>
        <h1 style={{background:color}}>This is the Word .. {thisWord}</h1>
    </div>
  )
}

export default Word