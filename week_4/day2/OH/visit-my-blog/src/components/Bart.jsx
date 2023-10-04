import React, { useState } from 'react'
import BarImg from "../assets/bart.jpg"
import Form from '../components/Form'


function Bart(props) {
  const { blogPost, setBlogPost} = props
  const [bart, setBart] = useState('bart')
  return (
    <div>
        <h1>I am Bart... This is my story.</h1>
        <div>
            <img src={BarImg} ></img>
        </div>
        <Form bart={bart} setBart={setBart} blogPost={blogPost} setBlogPost={setBlogPost}/>
        {/* display posts  */}
    </div>
  )
}

export default Bart