const fs=require('fs');
// fs.readFile('b.txt','utf-8',(err,data)=>{
// console.log(err,data)
// })
// console.log("FINISHED READING FILE") //COME FIRST BECAUSE READ FILE TAKES TIME TO GIVE OUTPUT
const a=fs.readFileSync('b.txt')
console.log(a)//don't want to see the number so run toString to see the content
console.log(a.toString())
console.log("finished reading file")