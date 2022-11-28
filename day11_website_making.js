const http=require("http")
const fs=require("fs")
const port=8000;
const server=http.createServer((req,res)=>{
res.setHeader('Content-Type','text/html')
if(req.url=="/about")
{res.statusCode=200;
    res.end('<h1 >CODE WITH ANUPAM SHUKLA</h1> <p >hey this is the way to rock the world|</p>');
}
else if(req.url=="/hello")
{res.statusCode=200;
    res.end('<h1 >CODE WITH AMRIT SINGH</h1> <p >hey this is the way to rock the world|</p>')
}
else if(req.url=="/")
{res.statusCode=200;
    const data=fs.readFileSync('day_11_index.html')

    res.end(data.toString())
}
else 
{res.statusCode=404;
    // res.a();
    res.end('<h1 >Page not found</h1> <p >doesnt exist what u want in this server</p>')
}

})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
