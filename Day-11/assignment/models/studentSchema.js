import{model,Schema} from "mongoose";

// schema
const studentSchema =new Schema({
name:String,
age:Number,
city:String,
course:String,
marks:Number,

})


//model

const StudentModel = model("Students",studentSchema);

export default StudentModel;