import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/SpaceParty'>Space party</Link>
    </div>
  )
}

export default Nav