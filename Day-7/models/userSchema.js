import { model, Schema } from "mongoose";

    // schema

const userSchema = new Schema({
name: String,
email:String,
password: String,
contact:Number,
role:{type: String,enum: ["user","admin","seller"] , default: "user"}


});




// Model

const UserModel = model("Users", userSchema);

export default UserModel;