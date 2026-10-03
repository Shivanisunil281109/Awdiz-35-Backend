import UserModel from "../models/userSchema.js";

export const createUser = async(req,res)=>{

const {name, email,address} = req.body;


const newUser = new UserModel({

    name:name,
    email:email,
    address:address

})


await newUser.save();

return res.status(201).json({
    message: "User created successfully",
})

};


//  get
export const  getAllUsers = async(req,res)=>{

const users = await UserModel.find();


return res.status(200).json({
    users:users
}

);


}