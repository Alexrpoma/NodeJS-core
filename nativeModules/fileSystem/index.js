const fs = require('node:fs')

//Synchronous 
const stats = fs.statSync('nativeModules\\fileSystem\\hello.txt')

console.log(
  stats.isFile(), //is an archive?
  stats.isDirectory(), //is a directory?
  stats.isSymbolicLink(), //is a symbol link?
  stats.size + ' bytes'
)
