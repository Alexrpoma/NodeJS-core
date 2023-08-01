const fs = require('node:fs/promises')
const path = require('node:path')
const pColors = require('picocolors')


//We can execute this for example with command: node filesDetails.js ../../nativeModules/fileSystem

const folder = process.argv[2] ?? '.';

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.log(pColors.red('Cannot read de folder ', folder));
    process.exit(1);
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(pColors.red('Cannot read de file path: ', filePath))
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();
    return `${pColors.bold(fileType)} ${pColors.blue(file.padEnd(20))} ${pColors.green(fileSize.toString().padStart(10))} ${pColors.yellow(fileModified)}`;
  })

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);