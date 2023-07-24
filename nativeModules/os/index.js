const os = require('node:os')

console.log('Operating System')
console.log(('---------------'))
console.log(`name ${os.platform}`)
console.log(`version ${os.release}`)
console.log(`architecture ${os.arch}`)
console.log(`CPUs ${os.cpus().length}`) // --> For scaling processes in NodeJs.
os.cpus().forEach(c => console.log(c))
console.log(`Free memory ${os.freemem / 1024 / 1024}mb`)
console.log(`Total memory ${os.totalmem / 1024 / 1024}mb`)
console.log(`uptime ${os.uptime() / 60 / 60} hrs.` )