const express = require('express');             
const router = express.Router();
const bcrypt = require('bcrypt');
require('dotenv').config();                     
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const pool = new Pool({

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,

})

router.post('/register', async (req, res) => {

    let { username, password } = req.body;
    try {

        console.log("Now wr r in Register route");
        
        const hashedpassword = await bcrypt.hash(password, 13);
        const query = `INSERT INTO users (username, userpassword) VALUES ($1, $2) RETURNING *`;
        const result = await pool.query(query, [username, hashedpassword]);


        const user = result.rows[0];
        console.log("Result stored in Postgres",user);
        
        delete user.userpassword;
        console.log("Sending user result to frontend after deleteing password ",user);

        console.log("END of Register route ");
        res.status(200).json({ message: "User Registerd Successfully", user:user });

        

    }
    catch (e) {
        console.log(e)
        res.status(500).json({ message: `${e}` });
    }
})

router.post('/login', async (req,res)=>{

    let {username,password} = req.body;

    try{

        
        console.log("We r in Login Route");
        
        const query =`SELECT * FROM users WHERE username =$1`;
        const result = await pool.query(query,[username]);

        console.log("this is result in login when we fetch data from postgres to check the username is crt or not",result);
        
        if (result.rows.length==0)
        {
            return res.status(404).json({message:"user not found"})
        }


        const user = result.rows[0];
        console.log("User got from DB",user);
        
        const ismatched = await bcrypt.compare(password,user.userpassword);

        if(!ismatched)
        {
            return res.status(400).json({message:"invalid password"});
        }

        const token = jwt.sign(
            {id:user.id,username:user.username},
            process.env.JWT_SECRET,
            {expiresIn:  process.env.JWT_EXPIRESIN}
        );

        console.log("this is token",token);
        
        console.log("End of Login Route");

        res.status(200).json({
            message:"Login Successfull",
            token,
            user:{
                id:user.id,
                username:user.username,
            }
        })

        
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({message:`Database error ${e}`});
    }
})

module.exports = router;
