import {Schema,model} from "mongoose";

// Product Schema

const productSchema = new Schema({ 

    name: String,
    price:Number,
    stock:Number,
    category:String,
    img:String,
}
);



// product Model

const ProductModel = model("products",productSchema);

export default ProductModel;
