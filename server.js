const express = require('express');
const mongoose = require('mongoose');
const dotevn = require("dotenv");

const public = require('./routes/public');

dotevn.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/db.js'); 

dotevn.config({path:'./.env'});

   
app.get('/api/health',(req,res)=>{
    res.send(`Backend server is active status:active & time:${new Date()})`);
});

app.use("/api/public",public);








const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port,()=>{
    console.log(`Server is up and running at http//${host}:${port}`);
});