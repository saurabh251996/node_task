const categoryModel=require('../models/categories')

exports.addCategory=async function(req,res){
    try{
        let data=req.body
        let productData=await categoryModel.insertMany(data)
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



exports.getData=async function(req,res){
    try{
     let getProductData=await categoryModel.aggregate([{
      $lookup:{
        from:"products",
        localField:"_id",
        foreignField:"categoryId",
        as:"product_details"

      }


     }])
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
