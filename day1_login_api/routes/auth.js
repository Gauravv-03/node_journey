const express=require('express');
// const mongoose=require('mongoose');
// const dotenv=require('dotenv');

const router= express.Router();
const bcrypt=require('bcryptjs');
const User=require('../models/user.js');
const user = require('../models/user');

router.post('/register',async(req,res)=>{
const {email, password}=req.body;
try{
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({message:"user already exist , registerr with new id"});
    }
    const hashPassword= await bcrypt.hash(password,10);
     
     let user1= new User({email,password:hashPassword});
     await user1.save();
     res.status(201).json({message:'user register ho gya'});
}
catch(err){
    console.error("❌ Error in /register route:", err);

    res.status(500).json({message:'server Error during registeration'});
}
});

router.post('/login',async(req,res)=>{
    const {email,password}=req.body;

    try{
        let user1 =await User.findOne({email});
        if(!user1)
        {
          return  res.status(404).json({message:'user not found, register first'});
        }
        const match= await bcrypt.compare(password,user1.password);
        if(!match)
        {
            return res.status(401).json({message:'invalid credentials'});
        }
        return res.status(200).json({message:'login successfully'});
    }
    catch(err)
    {
        return res.status(500).json({message: 'server error - login'});
    }
})

module.exports=router;
