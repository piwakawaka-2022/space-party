import request from 'superagent'
import utils from '../utils.js'

//TODOs
//1: Add utils folder -> random day 2010-2021, 01-12, 0-28
//add &date=RANDOMDATE  to nasa api picture of day to make it a random pic
// ask seb to link me the miro board, lol

//2: Add second nasa API -> mars rover camera -> find good mars sol with nice images
// Images are mostly gray scale (from mars rover api), maybe a 'grayscale class' to images pulled from this?

export function getSpacePictureOfTheDay() {
  let randomY = utils.getRandomInt(2010, 2022)
  let randomM = utils.getRandomInt(1, 13)
  let randomD = utils.getRandomInt(1, 28)

  console.log(randomY, randomM, randomD)

  return request
    .get(
      'https://api.nasa.gov/planetary/apod?api_key=' +
        process.env.NASA_KEY +
        '&date=' +
        randomY +
        '-' +
        randomM +
        '-' +
        randomD
    ) //for tomorrow we can pick some different bits from the nasa api
    .then((response) => {
      return response.body
    })
}
