import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

function Home () {


  return (
    <div className='home-container'>
    <Nav />
      <h1>Space Party!</h1>
      <div className='home-images'>
        <img src='Images/Muer.png' />
        <img src='Images/Seb.png' />
        <img src='Images/Jesse.png' />
        <img src='Images/Lawrence.png' />
      </div>
      {/* <Link to='/SpaceParty'><button>Space party</button></Link> */} 
    </div>
  )
}


export default Home