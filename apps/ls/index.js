const fs = require('node:fs')

// '.' -> current directory.
fs.readdir('.', (err, files) => {
  if(err) {
    console.log('Error while read file ', err)
    return;
  }
  files.forEach(file => console.log(file))
})