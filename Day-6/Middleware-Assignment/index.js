import  express from "express";

const app =express();

app.use(express.json());

const students = [];

const logger =(req,res,next)=>{

    console.log("Request Method:",req.method);

    console.log("request URL:", req.url);

    next();
}



app.use(logger);

const validateStudent = (req, res, next) => {

    if(!req.body.name){
        return res.status(400).json({
            message: "Name is required"
        });
    }

    next();
}







app.get("/students",(req,res)=>{

    res.json({
        students:students
    })
});

app.post("/students", validateStudent, (req, res) => {

    res.status(201).json({
        message: "Student created"
    });

});


app.listen(3000,()=>{
    console.log("server running on port 3000");
});