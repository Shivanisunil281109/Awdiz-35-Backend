 import customerModel from "../models/customerSchema.js";


 export const createCustomer= async(req,res)=>{

const {name,email,phone} =req.body;

const newCustomer =new customerModel({

name:name,
email:email,
phone:phone,

})


await newCustomer.save();

return res.status(200).json({
    message:"Customer created Successfully"
});


 };



 export  const getAllCustomers = async(req,res)=>{

    const customers = await customerModel.find();


    return res.status(200).json({
        customers:customers
    });

 };