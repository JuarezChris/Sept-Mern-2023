import React from 'react'
import { useState } from 'react'

function Doggie(props) {
  const [doggie, setDoggie] = useState('doggie')

  return (
    <div>
        <h1>Santas little helper</h1>
        <Form doggie={doggie} setDoggie={setDoggie} blogPost={blogPost} setBlogPost={setBlogPost}/>
    </div>
  )
}

export default Doggie