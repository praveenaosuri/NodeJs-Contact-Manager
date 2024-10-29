const mongoose =require("mongoose");

const userSchema=mongoose.Schema({
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },
    username:{
        type:String,
        required:[true,"Please add name"]},
    email:{
        type:String,
        unique:[true,"Already Exists"],
        required:[true,"Please add email"],
    },
    password:{
        type:String,
        required:[true,"Please add password"],
        },
    },{
    timestamps:true
})
module.exports=mongoose.model("User",userSchema);