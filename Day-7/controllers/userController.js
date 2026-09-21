
export const createUser = (req,res)=>{

    try {
return res.status(201).json({message:"User created Successfully"})
    }catch(error){
    return res.status(500).json({message :"Internal Server Error"})
    }
}



export const getAllUsers=(req,res)=>{
    try{
  return res.status(200).json({message:"All Users retrieved Successfully"})
    }catch(error){
   return res.status(500).json({message:"Internal Server Error"});
    }
};