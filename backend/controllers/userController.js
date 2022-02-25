const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModle');


const registerUser = asyncHandler(async (req,res)=>{
const {name,email,password} = req.body;
if(!name || !email || !password){
    res.status(400);
    throw new Error("please add all fields");
}

const userExists = await User.findOne({email});

if(userExists){
    res.status(400);
    throw new Error('user already exists');
}

//Hash password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);

const user = await User.create({
    name,
    email,
    password:hash
});
if(user){
    res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email
    });
}else{
    res.status(400);
    throw new Error('Invalid user data');
}
res.json({message: 'Register user'});

})

const loginUser = asyncHandler(async (req,res)=>{
    res.json({name:"login user"});
   })

const getMe = asyncHandler(async(req,res)=>{
    res.json({name:"get me"});
})

module.exports = {registerUser,loginUser,getMe}