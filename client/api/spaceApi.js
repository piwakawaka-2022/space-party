import request from 'superagent'

//TODOs
//1: Add utils folder -> random day 2010-2021, 01-12, 0-28
//add &date=RANDOMDATE  to nasa api picture of day to make it a random pic
// ask seb to link me the miro board, lol

//2: Add second nasa API -> mars rover camera -> find good mars sol with nice images
// Images are mostly gray scale (from mars rover api), maybe a 'grayscale class' to images pulled from this?

export function getSpacePictureOfTheDay() {
  return request
    .get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_KEY) //for tomorrow we can pick some different bits from the nasa api
    .then((response) => {
      console.log(response.body)
      console.log(process.env.NASA_KEY)
      return response.body
    })
}
