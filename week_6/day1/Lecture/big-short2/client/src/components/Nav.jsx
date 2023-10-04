import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <h1>Navbar</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/sellHouse"}>Sell House</Link>
    </div>
  )
}

export default Nav