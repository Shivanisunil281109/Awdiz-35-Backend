const http = require ('http');

const myserver = http.createServer((req,res)=>{

console.log(req.url,req.method,'request object');

if(req.url === '/'){
     
    return res.end("welcome to home page");
}
else if(req.url === "/login"){
    return res.end("Welcome to Login page");
}
 else {
    return res.end("server is running on port 3000")
        
    
 }


return res.end("Server is running on port 3000")

}

);


myserver.listen(3000,()=> {

console.log("Server is running on port 3000");
}
)