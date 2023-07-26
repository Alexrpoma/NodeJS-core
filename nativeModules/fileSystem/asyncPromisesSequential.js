//Asynchronous - Sequential
//Not guarantee the order of results.
const fs = require('node:fs/promises')

function hello(user) {
  return 'Hello ' + user;
}

console.log('Reading the first file:')
fs.readFile('nativeModules\\fileSystem\\firstText.txt', 'utf-8')
  .then(result => console.log('First file: ' + result))

//Do other functions
console.log(hello('alex'));

console.log('Reading the second file:')
fs.readFile('nativeModules\\fileSystem\\secondText.txt', 'utf-8')
  .then(result => console.log('Second file:' + result))

//Also we can use a util of node for promises where modules don't have native promises:
//const fs = require('node:fs') //--> without promises
//const { promisify } = require('node:util');
//const readFilePromise = promisify(fs.readFile)

