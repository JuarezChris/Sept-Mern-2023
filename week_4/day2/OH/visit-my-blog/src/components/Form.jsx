import React, { useState } from 'react'

function Form(props) {
    const { blogPost, setBlogPost} = props
    const [char, setChar] = useState('bart')
    const [blog, setBlog] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(blogPost)
        if(char == 'bart'){
            setBlogPost()
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Blog Entry</label>    
                </div>
                <textarea cols={40} rows={10} type="text" onChange={(e) => setBlog(e.target.value)}/>
                <div>
                    <select onChange={(e) => setChar(e.target.value)} name="char">
                        <option value="bart">Bart</option>
                        <option value="doggie">Doggie</option>
                    </select>
                </div>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form