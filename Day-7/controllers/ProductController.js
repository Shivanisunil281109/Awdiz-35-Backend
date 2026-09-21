import { errorHandler } from "../middlewares/errorMiddlewares.js";


export const createProduct = async(req,res,next)=>{

    try {

const {name,price,description,stock,img,category} =req.body

// if(!name){

//     return res.status(400).json({message:"Product name is required"});

// }


if(!name || !price || !description || !stock || !img || !category){

    return res.status(400).json({message:"All fields are required"});

}





return res.status(201).json({message:"Product created Successfully"})
    }catch(error){
    next(error);
    }
}



//   controller2  for retrive product

export const getAllProduct =async(req,res,next)=>{

    try{
throw new Error("Database connection failed");

// return res
// .status(200)
// .json({message:"All Products retrieved Successfully"})

    }catch(error){
        // console.log(error,"error")
   next(error);
    }
};