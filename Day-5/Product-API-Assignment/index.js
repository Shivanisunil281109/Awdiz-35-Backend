import express from "express" ;

const app = express();

app.use(express.json());

const products =[];



app.get("/",(req,res)=>{

res.send("welcome to the Product API");

});






// tasks

// 1.Create Product

app.post("/products",(req,res)=>{

    const {name,price,category} = req.body;

const newProduct = {
   productName:name,
   productPrice:price,
   productCategory:category,
   productId:products.length+1

};

products.push(newProduct);


res.json(
    {
       "message" :"Product created successfully ",
        "products": products
    }
);

})



// 2. Get All Products.

app.get ("/products",(req,res)=>{

res.json({
    products:products
})
o
})




// 3.Get Single Product by ID

app.get("/products/:id",(req,res)=>
{

const productId = parseInt(req.params.id);


const product = products.find(
(product)=>product.productId === productId

);

if (!product){
    res.status(404).json({

      message:"Product not found"
        
    });
}


res.json({
    message:"Product Found",
    Product:product
});

})




// 4. Product Update


app.put("/products/:id",(req,res)=>{

    const productId =  parseInt(req.params.id);

    const{name,price,category}= req.body;

    const productIndex = products.findIndex(
        (product)=> product.productId === productId );


products[productIndex] ={
    ...products[productIndex],
    productName:name,
    productPrice:price,
    productCategory:category
};


res.json({
    message:"Product updated Successfully",
    product:products[productIndex]
});

});




// Delete products

app.delete("/products/:id",(req,res)=>{


const productId = parseInt(req.params.id);

const productIndex = products.findIndex(
    (product) => product.productId === productId
);

products.splice(productIndex,1);

res.json({
    message:"Product deleted Successfully",
    products : products
});



})



app.listen(3000,()=>{

    console.log("server is running on port 3000");
});