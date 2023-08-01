const http = require('node:http')

const server = http.createServer((require, response) => {
  console.log('request received')
  response.end('Hello world!')
})

server.listen(3000, () => {
  console.log('server listening on port 3000')
})