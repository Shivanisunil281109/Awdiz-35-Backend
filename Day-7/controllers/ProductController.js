import { errorHandler } from "../middlewares/errorMiddlewares.js";
import ProductModel from "../models/productSchema.js";


export const createProduct = async(req,res,next)=>{

    try {

const {name,price,stock,img,category,userId} =req.body

// if(!name){

//     return res.status(400).json({message:"Product name is required"});

// }


if(!name || !price  || !stock || !img || !category  ||!userID){

    return res.status(400).json({message:"All fields are required"});

}



const newProduct = new ProductModel({
    name:name,
    price:price,
    stock:stock,
    category:category,
    img:img,
    sellerID: userId
})


await newProduct.save();

return res.status(201).json({message:"Product created Successfully"})
    }catch(error){
    next(error);
    }
}



//   controller2  for retrive product

export const getAllProduct =async(req,res,next)=>{

    try{
// throw new Error("Database connection failed");

console.log("Product model readyState:", ProductModel.db.readyState);

const allProducts = await ProductModel.find();




return res
.status(200)
.json({allProducts:allProducts,message:"All Products retrieved Successfully"})

    }catch(error){
        // console.log(error,"error")
   next(error);
    }
};


export const operators = async (req, res, next) => {
    try {
 //const products = await ProductModel.find({price:{$gt:10000}});
 //const products = await ProductModel.find({price:{$gte:10000}});
 // //const products = await ProductModel.find({price:{$lt:10000}});
//const products = await ProductModel.find({price:{$lte:2000}});
//const products = await ProductModel.find({category:{$in:["Electronics","clothing","Footwear"]}});
// const products = await ProductModel.find({category:{$nin:["Electronics","clothing",]}});


// and operators

// const products = await ProductModel.find({
//      $and: [
//      {price:{$gt:1000} },

//      {category:{$in:["clothing","Footwear"]} } ,

//      {stock:{$lt: 100 }}

//     ],

//     });


// const products =  await ProductModel.find({

//     price: {$not:{$gt:1000 }},
// });
   


//  not operators

// const products =  await ProductModel.find({
//     price: {$not:{$gt:1000 }},   
// },
// { name:1,price:1},
// );
   


// projection
// const products =  await ProductModel.find({

//     price: {$not:{$gt:1000 }},   
// },

// { name: 1, price: 1, _id: 0},

// );



// page =1
// document=10
// skip=(page-1)*document
//     = 1-1*10
//     =0



// sorting
const products =  await ProductModel.find({

    price: {$not:{$gt:2000 }},   
},

{ name: 1, price: 1, _id: 0 ,stock:1},

) .sort({stock: 1 }).limit(10).skip(skip)




        return res.status(200).json({ products });

    } catch (error) {
        next(error);
    }
};



export const aggregationPipeline = async(rq,res,next)=>{

try{

    const result = await ProductModel.aggregate([

//    {$match:{category:"clothing"} },

    //   {$match:{"category": {$in:["Footwear","clothing","Electronics"]} } },

    {$match:{price:{$gt:100} } },



//     {$group:{
//         _id:'$name',
//         totalPrice:{$sum :{ $multiply: ["$price", "$stock"] }

//         }
//     }
//    }





      {$group:{

        _id:"$category",
        totalProduct:  {
        $sum:1,
        },

       totalStock:{$sum:"$stock"},

       totalPrice:{$sum:{$multiply:["$price","$stock"] },

      },

      CategoryWiseAvgPrice:{$avg:"$price"},


      minimumPrice:{$min:"$price"},


    maximumPrice:{$max:"$price"},

    extra:{ $sum:"$price"},

    },

},

{$sort:{totalPrice: 1}},

{$project: {extra: 0 }} ,

    ]);

return res.json(result)


}catch(error){

  next(error)  
}


}
