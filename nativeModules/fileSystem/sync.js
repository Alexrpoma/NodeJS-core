const fs = require('node:fs')

//Synchronous 
const stats = fs.statSync('nativeModules\\fileSystem\\hello.txt')

console.log(
  stats.isFile(), //is an archive?
  stats.isDirectory(), //is a directory?
  stats.isSymbolicLink(), //is a symbol link?
  stats.size + ' bytes'
)

console.log('\nReading the first file:')
const read = fs.readFileSync('nativeModules\\fileSystem\\hello.txt', 'utf-8')
console.log(read)


console.log('\nReading the second file')
const read1 = fs.readFileSync('nativeModules\\fileSystem\\info.txt', 'utf-8')
console.log(read1)
