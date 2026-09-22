import express from "express"
import mainRouter from "./routes/mainRouter.js";
import { errorHandler } from "./middlewares/errorMiddlewares.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns";



const app = express();

app.use(express.json())

dotenv.config();


dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Connected to MongoDB");
})

.catch((error)=>{
    console.log(error.reason?.servers);
});


app.get("/",(req,res)=>{
res.send("Welcome to The API")
})

app.use("/api",mainRouter );


app.use(errorHandler);

app.listen (3000,()=>{
    console.log("server is running on port 3000");
});