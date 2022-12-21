const express = require('express');

const app = express();







const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";

app.listen(port,()=>{
    console.log(`Server is up and running at http//${host}:${port}`);
});