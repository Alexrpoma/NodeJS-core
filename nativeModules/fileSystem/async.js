//Asynchronous
//Not guarantee the order of results.
const fs = require('node:fs')

function doSomething(something) {
  return 'Do ' + something;
}

console.log('Reading the first file:')
fs.readFile('nativeModules\\fileSystem\\firstText.txt', 'utf-8', (error, read) => { // -> CallBack
  console.log(read)
})

//Do other functions
console.log(doSomething('some work..'));

console.log('Reading the second file:')
fs.readFile('nativeModules\\fileSystem\\secondText.txt', 'utf-8', (error, read) => {
  console.log(read)
})