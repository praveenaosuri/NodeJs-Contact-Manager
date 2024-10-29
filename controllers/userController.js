const asyncHandler=require("express-async-handler");
const User=require("../models/userModel")
const jwt=require("jsonwebtoken")
const  bcrypt=require("bcrypt");
//Register a user  POST  api/user/register
//@access public
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable=await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User Already Exists");
    }
    //hashpassword
    const hashpassword=await bcrypt.hash(password,10);
   const user=await User.create({username,email,password:hashpassword});
   console.log(`User created ${user}`);
   if(user)
   {
    res.status(201).json({_id:user.id,email:user.email});
   }
   else{
    res.status(400);
    throw new Error("User data not valid");
   }
})
//public]
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        res.status(400);
        throw new Error("Invalid Email or Password");
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400);
            throw new Error("Invalid Email or Password");
            }
            //generate token
            const accessToken=jwt.sign({
                user:{
                username:user.username,
                email:user.email,
                id:user.id
                }
            },
                process.env.ACCESS_TOKEN,
                {expiresIn:"15m"}
        );

            res.status(200).json({accessToken});
})
//private
const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user);
})
module.exports={registerUser,loginUser,currentUser};