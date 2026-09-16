import express from "express";

 const app = express();


 app.use(express.json());

const students =[];


app.get("/",(req,res)=>{

res.send ("Welcome to the Student API");

});



//    5 tasks

// create students

app.post("/students",(req,res)=>{
console.log(req.body,"req.body");

const{name,age} =req.body

const newStudent ={
    studentName:name, 
    studentAge:age,  
    studentId:students.length + 1
};


console.log(newStudent,"newStudent")
students.push(newStudent)


res.send({message:"students created Successfully", students:students});
});






// get all students


app.get("/students",(req,res)=>{
  res.json({students:students}); 
});




// get single students by id

app.get("/students/:id",(req,res)=>{

const studentId = parseInt(req.params.id);
 

const student = students.find((student)=>
    student.studentId === studentId
    
);

if (!student) {
    res.status(404).json({message:"student not found"})
}



   res.json({
        message: "Student found",
        student: student
    });

});

// update students  by id 

app.put("/students/:id",(req,res)=>{ 

const studentId= parseInt(req.params.id)

  const { name, age } = req.body;

const studentIndex = students.findIndex(
    (student)=> student.studentId === studentId,
);

students[studentIndex] = { 
    ...students[studentIndex] ,
     studentName:name,studentAge:age,
     };

res.json({  
    message : "student updated successfully",
    student:students[studentIndex],

});

})


// delete students by id 
app.delete("/students/:id",(req,res)=>{
   
 const studentId= parseInt(req.params.id)   

const studentIndex = students.findIndex(
    (student)=> student.studentId === studentId,
)

students.splice(studentIndex,1);
res.json({message:"student deleted successfully",students});

});





 app.listen(3000,()=>{

console.log("Server is running on port 3000");

 });