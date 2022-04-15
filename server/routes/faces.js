const express = require('express')
const router = express.Router()

const db = require('../db/db')

//localhost3000/api/v1/faces
router.get('/', (req, res) => {
  db.getFaces()
    .then((faces) => {
      res.json(faces)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
