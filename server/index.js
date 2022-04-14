const path = require('path')
const server = require('./server')
const dotenv = require('dotenv')
const envPath = path.join(__dirname, '..', '.env') //Environment path
dotenv.config({ path: envPath }) //this config

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
