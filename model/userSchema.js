const mongoose = require("mongoose")


const userSchema = new mongoose.Schema
({
    Name:{
        type:String,
        required:[true,"Please enter name"]
    },
    Password:{
        type:String,
        required:[true,"please enter password"]
    },
    Email: {
      type: String,
      required: true,
      unique: true,
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

module.exports= mongoose.model('user',userSchema)