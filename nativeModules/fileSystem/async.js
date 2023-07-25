//Asynchronous
const fs = require('node:fs')

function hello(user) {
  return 'Hello ' + user;
}

console.log('Reading the first file:')
fs.readFile('nativeModules\\fileSystem\\hello.txt', 'utf-8', (error, read) => { // -> CallBack
  console.log('First file: ' + read)
})

//Do other functions
console.log(hello('alex'));

console.log('Reading the second file:')
fs.readFile('nativeModules\\fileSystem\\info.txt', 'utf-8', (error, read) => {
  console.log('Second file:' + read)
})