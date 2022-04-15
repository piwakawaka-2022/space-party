import React, { useState, useEffect } from 'react'
import { getFaces } from '../api/dbFacesApi'
import utils from '../utils'


function Face (){
  const [faceImage, setFaceImage] = useState(null)
  const [positionTop, setPositionTop] = useState(0)
  const [positionLeft, setPositionLeft] = useState(0);
  const [angle,setAngle] = useState(0)

  useEffect(() => {
    setRandomPos();
  },[faceImage]) //faceImage changing re-triggers useEffect call which calls setRandomPos

  const setRandomPos = () => {
    const top = utils.getRandomInt(20,80);
    const left = utils.getRandomInt(10,90);
    const angle = utils.getRandomInt(-20,20);
    setPositionTop(top)
    setPositionLeft(left);
    setAngle(angle);
  }

  useEffect(() => {
    getFaces()
      .then((arr) => {
      const singleFace = arr[Math.floor(Math.random() * arr.length)]
     setFaceImage(singleFace)
    })
    .catch((err) => {
        return err.message
      })
  },[])

  const getFaceImage = () => {
    getFaces()
      .then((arr) => {
        const singleFace = arr[Math.floor(Math.random() * arr.length)]
        console.log(singleFace)
        setFaceImage(singleFace)
      })
      .catch((err) => {
        return err.message
      })
  }

  return (
    <>
      {faceImage && <img className="face-container" src={`Images/${faceImage?.image}`}   
      style = {{
        top: `${positionTop}%`,
        left: `${positionLeft}%`,
        transform: `rotate(${angle}deg)`
      }}
      />}
     <button className="face-button" onClick={getFaceImage}>Switch {faceImage?.name}!</button>
    </>
  )

}

export default Face