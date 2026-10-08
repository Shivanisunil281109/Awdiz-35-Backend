import orderModel from "../models/orderSchema.js";

export const createOrder = async (req,res)=>{

const {product,amount,customer} =req.body;

const newOrder = new orderModel({
    product:product,
    amount:amount,
    customer:customer,
    
});




await newOrder.save();


return res.status(201).json({
    message:"order created Successfully"
});


}



export const getAllOrders = async(req,res)=>{

    
}