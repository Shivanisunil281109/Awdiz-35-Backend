import UserModel from "../models/userSchema.js";


export const createUser = async(req,res)=>{

    try {

const {name,email,password,contact} = req.body;

if(!name  || !email || !password  || !contact){

    return res
    .status(400)
    .json ({success: false, message:"All field are required."})

}

// const newUser = await UserModel.create({
//     name: name,
//     email: email,
//     password: password,
//     contact: contact,
// });

// console.log(newUser, "newUser");



const newUser= new UserModel({
      name: name,
      email: email,
      password: password,
      contact: contact,
 
})

await newUser.save();


return res.status(201).json({success: true, message:"User created Successfully"})
    }catch(error){
    console.log(error,"err")

    return res.status(500).json({success:false, message :"Internal Server Error"})
    }
}



export const getAllUsers=async(req,res)=>{
    try{

const allUsers= await UserModel.find()

  return res
  .status(200)
  .json({
    success:true,
    allUsers:allUsers,
    message:"All Users retrieved Successfully"})

    }catch(error){
   return res
   .status(500)
   .json({
    success:false,
    message:"Internal Server Error"
  });
 }
};