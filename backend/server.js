const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require("./middleware/errorMiddleWare");
const port = process.env.PORT || 5000
const dbConnection= require('./config/db');

const app = express();
dbConnection();


app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'));
app.use('/api/users',require('./routes/userRoutes'));


//overrides the default nodeJs errorhanlder
app.use(errorHandler)

app.listen(port , ()=>console.log(`Server started at ${port}`))

