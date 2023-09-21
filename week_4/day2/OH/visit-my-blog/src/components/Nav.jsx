import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <h1>Navigate to different Blogs</h1>
        <div>
            <Link to={"/"}>Home</Link>
        </div>
        <div>
            <Link to={"/bart"}>Bart</Link>
        </div>
    </div>
  )
}

export default Nav