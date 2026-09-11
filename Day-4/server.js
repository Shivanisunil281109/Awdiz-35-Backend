import express from 'express';

const app = express ();



app.get("/get-all-users",(req,res)=>{

   res.json({message :"All  Users",  userCity : req.query.city, userAge:req.query.age})
    
});



app.get("/get-single-user/:id", (req,res)=>{

res.json({message: `User with ID ${req.params.id} not found`})

});




app.post("/create-users",(req,res)=>{

res.json({message:"User created Successfully"})

})



app.patch ("/users/:id",(req,res)=>{
    res.json({message:`user with ID ${req.params.id} updated successfully`})
})



app.put("/user/:id",(req,res)=>{
res.json({ message:`User with ID ${req.params.id} replaced successfully`})
});



app.delete("/users/:id",(req,res)=>{
    res.json({message:`User with ID ${req.params.id} deleted successfully`})
})








app.listen(3000,()=>{
    console.log('server is running on port 3000')
});