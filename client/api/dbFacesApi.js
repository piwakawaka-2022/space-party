import request from 'superagent'

const facesUrl = '/api/v1/faces/'

export function getFaces() {
  return request.get(facesUrl).then((response) => {
    console.log(response.body)
    return response.body
  })
}
