import { model, Schema } from "mongoose";

    // schema

const userSchema = new Schema({
name: String,
email:String,
password: String,
contact:Number,

})




// Model

const UserModel = model("Users", userSchema);

export default UserModel;