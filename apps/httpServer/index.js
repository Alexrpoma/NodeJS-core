const http = require('node:http')

const server = http.createServer((require, response) => {
  console.log('request received')
  response.end('Hello world!')
})

server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})