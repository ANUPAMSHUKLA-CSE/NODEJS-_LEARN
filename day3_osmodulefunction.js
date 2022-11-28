//import os module
//since os is built in module so we dont write ./ before os
const os=require('os');
//os ko use karke unke functions hum use kar sakte hai
console.log("memory=",os.freemem())
//it tells free memory in system
console.log("directory name=",os.homedir())
//gives directory name folder name
console.log("host name of computer=",os.hostname())
//it tells us computer host name
console.log("os version release=",os.release())
console.log("total memory in the system=",os.totalmem())