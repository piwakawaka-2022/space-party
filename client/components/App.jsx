import React, { useState } from 'react'
import { getSpacePictureOfTheDay } from '../api/spaceApi'

function App() {
  const [spaceImage, setSpaceImage] = useState(null)

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

  return (
    <div>
      <h1>Space Party!</h1>
      <button onClick={findSpaceImage}>Get a space image</button>
      {spaceImage && <img src={spaceImage.url} />}
    </div>
  )
}

export default App
