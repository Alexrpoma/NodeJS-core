const net = require('node:net')

function findAvailablePort(requestPort) {
  console.log('Request received')
  return new Promise((resolve, reject) => {
    const server = net.createServer()
  
    server.listen(requestPort, () => {
      const { port } = server.address()
      server.close(() => { // Close the port connection, and send the port number.
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`The port ${requestPort} is busy!`)
        findAvailablePort(requestPort + 1).then(port => resolve(port)) // Recursive method, reuse the findAvailablePort function.
        //We can use findAvailablePort(0) for a available random port!!
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }