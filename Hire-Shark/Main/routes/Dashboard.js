const express = require('express');
const router = express.Router();
const { Pool } =  require('pg');

router.post('/dashboard',async (req,res)=>{

    console.log("This is from Front code",req.body);
    
    let { codes }  = req.body;

    try{

        console.log("Now we r inside the dashboard router");

        console.log("This is code",codes);
        
        res.status(200).json({message:"Sent the code"})
    }
    catch(e)
    {

    }
})

module.exports = router;

