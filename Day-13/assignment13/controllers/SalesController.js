import SalesModel from "../models/salesSchema.js";


export const createSale= async(req,res)=>{


const {product, category, amount, city, quantity } = req.body;

 

const newSale = new SalesModel({ 
 
product:product, 
category:category, 
amount:amount, 
city:city, 
quantity:quantity 
 
}); 


await newSale.save(); 
 
 
return res.status(201).json({ 
message:"Sale created successfully" 
}); 

};




export const getAllSales =async (req,res)=>{

    const sales = await SalesModel.find();


    return res.status(200).json({
        sales:sales
    })

}



export const aggregationPipeline = async (req,res)=>{


    const result = await SalesModel.aggregate([


// {
//     $match: {
//         category: "Electronics"
//     }
// },


// {
//     $group: {
//         _id:"$category",
//         totalSales: {
//             $sum: "$amount"
//         }
//     }
// },



// {
//     $sort:{
//         amount:-1
//     }
// }


{
    $match: {
        city: "Pune"
    }
},


{
    $group: {
        _id: "$city",
        totalSales: {
            $sum: "$amount"
        }
    }
}




// {$group:{

//     _id:null,

    // totalSales:{
    //     $sum:"$amount"
    // },


// averageSale:{
//     $avg:"$amount"
// },


//  highestSale:{
//     $max:"$amount"
// },


// lowestSale:{
//     $min:"$amount"
// },


// }}





    ])




    return res.json(result);
}




    

