export const errorHandler =(error,req,res,next)=>{

const statusCode = error.statuscode ||500;
const message = error.message || "Internal Server Error ";
return res.status(statusCode).json({message});



}