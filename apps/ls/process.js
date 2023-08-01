//In Nodejs the process provide us information and control of current executions

//nodeJs execution with enter arguments.
console.log(process.argv)

//Exit process control: 
//0 -> successfully
//1 -> something went wrong!
process.exit(0)

//Process events control:
process.on('exit', () => {
  //some works, example -> clean resources
})

//Current working directory:
console.log(process.cwd())

//Platform:
process.env.EXAMPLE