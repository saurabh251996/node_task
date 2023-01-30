const productModel=require('../models/product')

exports.addProduct=async function(req,res){
    try{
        let data=req.body
        let productData=await productModel.insertMany(data)
        if(!productData){
            throw new console.Error("unable to add product");
        }
        res.status(200).json({
            msg:"data added succesfully"
        })

    }
    catch(error){
        res.status(403).json(error.message)
    }
}

exports.getProduct=async function(req,res){
    try{
     let getProductData=await productModel.find()
     console.log(getProductData)
     if(!getProductData){
        throw new console.Error("unable to add product");
    }
    res.status(200).json({
        msg:"data added succesfully",
        data:getProductData
    })
    

}
catch(error){
    res.status(403).json(error.message)
}
}






