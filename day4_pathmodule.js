const path=require("path")
const a=path.basename('C:\\temp\\myfile.html');
const a1=path.dirname('C:\\temp\\myfile.html');
console.log("base name of file=",a)
console.log("directory name of file",a1)
const b=path.extname(__filename);
console.log("extension of file=",b)