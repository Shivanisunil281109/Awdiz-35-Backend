import {Schema,model} from "mongoose";

const salesSchema = new Schema({ 

product :String,
category:String,
amount:Number,
city:String,
quantity:Number


});


const SalesModel = model("Sales",salesSchema);


export default SalesModel;
