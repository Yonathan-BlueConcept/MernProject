const asyncHandler = require('express-async-handler');
const Goal = require('../modles/goalModle');

const getGoals = asyncHandler((req,res)=>{
 
    const goals = await Goal.find();

    res.status(200).json(goals);
   
})


const setGoals = asyncHandler((req,res)=>{
   if(!req.body.text){
       res.status(400);
       throw new Error('please add text field');
    }
     const result =  await Goal.create({
         text:req.body.text
     })


    res.status(200).json(result)
})


const updateGoals = asyncHandler((req,res)=>{
   
 const goal = await Goal.findById(req.params.id);
 if(!goal){
    res.status(400);
    throw new Error('goal unavailable');
 }

const goal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.status(200).json(goal);

})

const deleteGoals =asyncHandler( (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error('not found');
    }
    await goal.remove();
    res.status(200).json({id:req.params.id})
})



module.exports = {getGoals,setGoals,updateGoals,deleteGoals}