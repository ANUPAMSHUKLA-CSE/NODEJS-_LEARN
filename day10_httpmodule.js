const http=require("http")
const port=3000;
//it takes port of environment of process

//createServer takes call back function in which it has req and res
//req means request and res means response
const server=http.createServer((req,res)=>{
    
res.statusCode=200;
//we set response status code 200 means success.and for not found 404 is used
//500 for network error
res.setHeader('Content-Type','text/html')
//res.setheader tells which type of content does the server has send
res.end('<h1 >CODE WITH ANUPAM SHUKLA</h1> <p >hey this is the way to rock the world|</p>');
//response end tell what we want to send
})
//NOW OUR SERVER GET CREATED BUT WHEN WE RUN THEN IT DOESN'T WORK BECAUSE ISKO HUMHE KISI PORT
// MEI LISTEN BHI KARNA PADTA HAI SO,WRITE the code for listening
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
    //tab ke upar vali button mei yei ` use karte hai ki dynamillcally print hoa jaye string mei
})
