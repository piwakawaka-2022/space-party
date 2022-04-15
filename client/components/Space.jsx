import React, { useState, useEffect } from 'react'
import { getSpacePictureOfTheDay } from '../api/spaceApi'
import Face from './Face.jsx'
import Nav from './Nav'
import Confetti from 'react-confetti'

function Space() {
  const [spaceImage, setSpaceImage] = useState("/Images/SpaceHome.png")
const  [party, setParty] = useState(false)

  useEffect(() => {
    findSpaceImage();
  },[]) 
  
  const findSpaceImage = () => {
    getSpacePictureOfTheDay()
      .then((obj) => {
        console.log(obj)
        setSpaceImage(obj)
      })
      .catch((err) => {
        return err.message
      })
  }

  const startParty = () => {
    setParty(!party)
  }
 
// const style = {
//      backgroundImage: `url("${spaceImage.url}")`
//    }

   return (


    <div className='space-container' style={{backgroundImage: `url("${spaceImage.url}")`}} >
      <Nav />
      <h1>Space Party!</h1>  
      <div className='image-buttons'>
      <Face />
      <Face />
      <Face />
      <Face />
  
  
         <button onClick={findSpaceImage}>Space Warp!</button>
         <button onClick={startParty}>Start the Party!</button>
         {party && <Confetti />}
      </div>
    </div>
  )
}

export default Space