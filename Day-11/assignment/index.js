import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "node:dns";
import studentRouter from "./routes/studentRouter.js";

dotenv.config();

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);




mongoose.connect(process.env.MONGODBURL)


.then(()=>{
    console.log("Connected to MongoDB")
})

.catch((error)=>{
    console.log("MongoDB connection error:",error);
});



const app = express();

app.use(express.json());


app.use("/api/students", studentRouter);

app.get("/",(req,res)=>{
    res.send("Student Assignment API");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});


