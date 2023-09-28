import React from 'react'
import BarImg from "../assets/bart.jpg"
import Form from '../components/Form'


function Bart(props) {
  const { blogPost, setBlogPost} = props
  
  return (
    <div>
        <h1>I am Bart... This is my story.</h1>
        <div>
            <img src={BarImg} ></img>
        </div>
        <Form blogPost={blogPost} setBlogPost={setBlogPost}/>
    </div>
  )
}

export default Bart