const mongoose=require('mongoose')

const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        image:{
            type:String,
            require:true
        },
        description:{
            type:String
        },
        quantity:{
            type:Number
        },
        createdAt:{
            type:String
        },
        updatedAt:{
            type:String
        },
        categoryId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'category'

        },

    }
)
module.exports=mongoose.model('product',productSchema)