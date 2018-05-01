const express = require('express');
var app = express();

app.get('/hello', (req, rsp)=>{
    rsp.status(200).send('hello world!');
});
app.post('/info', (req, rsp)=>{
    rsp.status(200).json({name: 'John', age: 18});
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});

module.exports.app = app;