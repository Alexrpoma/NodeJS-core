//provide us information and control of current executions
 console.log(process.argv)

//Exit process control: 
//0 -> successfully
//1 -> something went wrong!
process.exit(0)

//Process events control:
process.on('exit', () => {
  //clean resources
})

//Current working directory:
process.cwd()

//Platform:
process.env.EXAMPLE