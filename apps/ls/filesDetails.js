const fs = require('node:fs/promises')
const path = require('node:path')


//We can execute this for example with command: node filesDetails.js ../../nativeModules/fileSystem

const folder = process.argv[2] ?? '.';

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.log('Cannot read de folder ', folder);
    process.exit(1);
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error('Cannot read de file path: ', filePath)
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();
    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;
  })

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);