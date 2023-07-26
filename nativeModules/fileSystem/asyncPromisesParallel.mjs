//Asynchronous - Parallel
import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('nativeModules\\fileSystem\\firstText.txt', 'utf-8'),
  readFile('nativeModules\\fileSystem\\secondText.txt', 'utf-8')
])
  .then(([text, secondText]) => {
    console.log(text)
    console.log(secondText)
  })

