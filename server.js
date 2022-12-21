const express = require('express');
const mongoose = require('mongoose');
const dotevn = require("dotenv");

dotevn.config();

const app = express();
dotevn.config({path:'./.env'});


require('./config/db.js');    
app.get('/api/health',(req,res)=>{
    res.send(`Backend server is active status:active & time:${new Date()})`);
});








const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port,()=>{
    console.log(`Server is up and running at http//${host}:${port}`);
});