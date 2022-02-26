const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

const getGoals = asyncHandler(async (req,res)=>{
 
    const goals = await Goal.find();

    res.status(200).json(goals);
   
})


const setGoals = asyncHandler(async(req,res)=>{
   if(!req.body.text){
       res.status(400);
       throw new Error('please add text field');
    }
     const result =  await Goal.create({
         text:req.body.text
     })


    res.status(200).json(result)
})


const updateGoals = asyncHandler(async(req,res)=>{
   
 const goalExist = await Goal.findById(req.params.id);
 if(!goalExist){
    res.status(400);
    throw new Error('goal unavailable');
 }

const goal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.status(200).json(goal);

})

const deleteGoals =asyncHandler( async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error('not found');
    }
    await goal.remove();
    res.status(200).json({id:req.params.id})
})



module.exports = {getGoals,setGoals,updateGoals,deleteGoals}