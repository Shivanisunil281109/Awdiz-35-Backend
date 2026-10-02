import express from "express";
import mainRouter from "./routes/mainRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();


dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);


mongoose.connect(process.env.MONGODBURL)


.then( ()=>{
   console.log("connected to MongoDB")
})

.catch((error)=>{
    console.log("MongoDB connection error:",error);
});




const app = express();


app.use(express.json());


app.get("/",(req,res)=>{
   res.send("Welcome to the Sales API"); 
});



app.use("/api",mainRouter);


app.listen(3000,()=>{
   console.log("Server is running on port 3000");
})