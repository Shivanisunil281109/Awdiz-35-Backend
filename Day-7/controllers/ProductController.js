import { errorHandler } from "../middlewares/errorMiddlewares.js";
import ProductModel from "../models/productSchema.js";


export const createProduct = async(req,res,next)=>{

    try {

const {name,price,stock,img,category} =req.body

// if(!name){

//     return res.status(400).json({message:"Product name is required"});

// }


if(!name || !price  || !stock || !img || !category){

    return res.status(400).json({message:"All fields are required"});

}



const newProduct = new ProductModel({
    name:name,
    price:price,
    stock:stock,
    category:category,
    img:img,
})


await newProduct.save();

return res.status(201).json({message:"Product created Successfully"})
    }catch(error){
    next(error);
    }
}



//   controller2  for retrive product

export const getAllProduct =async(req,res,next)=>{

    try{
// throw new Error("Database connection failed");


const allProducts = await ProductModel.find();




return res
.status(200)
.json({allProducts:allProducts,message:"All Products retrieved Successfully"})

    }catch(error){
        // console.log(error,"error")
   next(error);
    }
};