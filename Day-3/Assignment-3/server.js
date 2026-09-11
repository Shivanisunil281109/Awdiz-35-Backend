import express from "express";

const app = express();


app.get("/", (req,res)=>{
    res.status(200).json({
     message:"Welcome to my website",  
    });
});


app.listen (3000,( )=>{
    console.log("Server is running on port 3000");
});