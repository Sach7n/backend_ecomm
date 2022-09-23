const mongoose = require("mongoose")


const productSchema = new mongoose.Schema
({
    Name:{
        type:String,
        required:[true,"Please enter name"]
    },
    Price:{
        type:Number,
        required:[true,"Please enter price"]
    },
    Company:{
        type:String,
        required:[true,"Please enter Company name"]
    },
    Information:{
        type:String,
        required:[true,"Please enter Information"]
    },
    Count:{
        type:Number,
        required:[true,"Please enter count"],
        default: 0,
    },
    Total:{
        type:Number,
        required:[true,"Please enter total"],
        default: 0,
    },
    isAdmin:{
        type: Boolean,
        required:true,
        default: false,
    }},
    {
        timestamps: true,
      }

)

module.exports= mongoose.model('Product',productSchema)