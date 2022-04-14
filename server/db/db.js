const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFaces,
}

function getFaces(db = connection) {
  return db('faces').select()
}
