import {Schema,model} from "mongoose";

// Product Schema

const productSchema = new Schema({ 

    name: String,
    price:Number,
    stock:Number,
    category:String,
    img:String,
    sellerID :{type:Schema.Types.ObjectId,ref:"Users"},
}
);



// product Model

const ProductModel = model("products",productSchema);

export default ProductModel;
