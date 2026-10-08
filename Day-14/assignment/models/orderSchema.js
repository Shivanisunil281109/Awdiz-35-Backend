
import {Schema,model} from "mongoose";

// Schema

const orderSchema = new Schema({
    product:String,
    amount:Number,

    customer:{
     type:Schema.Types.ObjectId,
     ref:"customers"   
    }

})



// model

const orderModel = model("orders",orderSchema)


export default orderModel;