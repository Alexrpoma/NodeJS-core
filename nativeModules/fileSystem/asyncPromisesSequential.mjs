//Asynchronous - Sequential
import { readFile } from 'node:fs/promises';

function doSomething(something) {
  return '\nDo ' + something;
}

async function readFiles() {

  console.log('\nReading the first file:')
  const text = await readFile('nativeModules\\fileSystem\\firstText.txt', 'utf-8')
  console.log(text)

  //Do other functions
  console.log(doSomething('some work..'));

  console.log('\nReading the second file:')
  const secondText = await readFile('nativeModules\\fileSystem\\secondText.txt', 'utf-8')
  console.log(secondText)
}

readFiles();

/* readFile('nativeModules\\fileSystem\\firstText.txt', 'utf-8')
  .then(result => console.log('First file: ' + result))

readFile('nativeModules\\fileSystem\\secondText.txt', 'utf-8')
  .then(result => console.log('Second file:' + result)) */

//Also we can use a util of node for promises where modules don't have native promises:
//const fs = require('node:fs') //--> without promises
//const { promisify } = require('node:util');
//const readFilePromise = promisify(fs.readFile)

