
import{Schema,model} from "mongoose";


// Schema
const customerSchema = new Schema({
name:String,
email:String,
phone:String,


});



// Model

const customerModel = model("customers",customerSchema);

export default customerModel;
