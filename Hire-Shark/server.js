const express = require('express');
const app = express();
require('dotenv').config();
const userroute = require('./Main/routes/RegisterandLogin');
const dashboard = require("./Main/routes/Dashboard")
const router = express.Router();
const cors =require('cors');
app.use(cors());
app.use(express.json());




app.use('/',userroute);
app.use('/',dashboard);

app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${port}`);
    
})




