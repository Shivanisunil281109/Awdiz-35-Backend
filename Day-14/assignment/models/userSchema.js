import {Schema,model} from "mongoose";


// Schema
const userSchema = new Schema ({
    name:String,
    email:String,

    address:{
        city:String,
        state:String,
        pincode:Number
    }

})



// model
const UserModel =model("user",userSchema);

export default UserModel;