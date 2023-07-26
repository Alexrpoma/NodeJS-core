//The path is different depending of operating systems
//unix -> /
//windows -> \

const path = require('node:path')

console.log(`Path of the operating system: ${path.sep}`)

//Join ruts 
console.log("\nJoin ruts")
const filePath = path.join('directory', 'subfolder', 'folder', 'file');
console.log(filePath)

//File name:
console.log('\nFile name:')
const base = path.basename("directory/subfolder/folder/file.txt")
console.log(base)
console.log('Without extension:')
const base1 = path.basename("directory/subfolder/folder/file.txt", ".txt")
console.log(base1)

//Extension:
console.log('\nExtension:')
const ext = path.extname('image.jpg')
console.log(ext)