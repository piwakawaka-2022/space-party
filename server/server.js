const path = require('path')
const express = require('express')

const faces = require('./routes/faces')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/faces', faces)

module.exports = server
