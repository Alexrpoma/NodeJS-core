const fs = require('node:fs')


//The process.argv[2] is the second position (arguments)
// if is null (??) set default '.'
/*
  With the command: 
    	node ls-advanced.js ./example/folder
  we can specify the directory.
*/
const folder = process.argv[2] ?? '.'

fs.readdir(folder, (err, files) => {
  if(err) {
    console.log('Error while read file ', err)
    return;
  }
  files.forEach(file => console.log(file))
})