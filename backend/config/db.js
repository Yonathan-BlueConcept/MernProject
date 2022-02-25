const mongoose = require('mongoose');


const connect = async ()=>{
    try{
     const dbconnection=   await mongoose.connect(process.env.MONGO_URI);
     console.log('database connection worked');
    }catch(err){
        console.log(err);
    }
}

module.exports = connect;