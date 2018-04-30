const express = require('express');
var app = express();

// static web pages
app.use(express.static(`${__dirname}/public`)); //express middleware

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});
