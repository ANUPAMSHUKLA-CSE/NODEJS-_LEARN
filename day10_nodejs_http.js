const http=require("http")
const port=8000;
const server=http.createServer((req,res)=>{
    // request print
    console.log(req)
res.statusCode=200;

res.setHeader('Content-Type','text/html')

res.end('<h1 >CODE WITH ANUPAM SHUKLA</h1> <p >hey this is the way to rock the world|</p>');
})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
