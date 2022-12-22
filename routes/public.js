    const { Router } = require("express");
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");
    const SECRET_KEY = "MARKETPLACEAPI";
    const route = Router();

    const user = require('../model/userSchema');
   


    route.get('/',(req,res)=>{
        res.send("hello from user route");
    });

    route.post('/login',async (req,res)=>{
        const { email , password } = req.body;
        try{
            const existingUser = await user.find({email : email});
            if(!existingUser){
                 const hashedPassword = await bcrypt.hash(password,10);

                 const result = await user.create({
                    email:email,
                    password:hashedPassword
                 });
                 const token = jwt.sign({email:result.email,id: result._id},SECRET_KEY);
                 res.status(201).json({user:result,token:token});

            }

            const matchPassword = await bcrypt.compare(password,existingUser.passeword);

            if(!matchPassword){
                return res.send(400).json({message:"Invalid Credentials"});
            }

            const token = jwt.sign({email:existingUser.email,id: existingUser._id},SECRET_KEY);

            res.status(201).json({user:result,token:token});




            
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"Something went wrong"});
        }

        
    });

    

    




    module.exports = route;