import React, { useState } from 'react'

function Form(props) {
    const { blogPost, setBlogPost} = props


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(blogPost)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Blog Entry</label>    
                </div>
                <textarea cols={40} rows={10} type="text" onChange={(e) => setBlogPost(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form