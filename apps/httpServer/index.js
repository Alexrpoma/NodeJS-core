const http = require('node:http')
const { findAvailablePort } = require('./requestPortHttpServer')

const server = http.createServer((require, response) => {
  console.log('request received')
  response.end('Hello world!')
})

//Random port:
/* server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
}) */

//Request number port:
findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
  })
})