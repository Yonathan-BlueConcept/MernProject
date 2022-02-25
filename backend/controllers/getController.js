const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler((req,res)=>{
    res.status(200).json({message:"yona"})
})


const setGoals = asyncHandler((req,res)=>{
   if(!req.body.text){
       res.status(400);
       throw new Error('please add text field');
    }

    res.status(200).json({message:"route working"})
})


const updateGoals = asyncHandler((req,res)=>{
    res.status(200).json({message:"updated"})
})

const deleteGoals =asyncHandler( (req,res)=>{
    res.status(200).json({message:"deleted"})
})



module.exports = {getGoals,setGoals,updateGoals,deleteGoals}