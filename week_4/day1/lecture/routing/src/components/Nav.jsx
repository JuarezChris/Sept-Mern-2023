import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div>
            <Link to={'/'} >Home</Link>
        </div>
        <div>
            <Link to={'/blog'} >Blog</Link> 
        </div>
    </div>
  )
}

export default Nav