import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Space from './Space.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <>
    {/* <Nav /> */}
    <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/SpaceParty' element={<Space />}></Route>
    </Routes>
    
    </>
  )
}

export default App
