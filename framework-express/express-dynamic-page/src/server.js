const express = require('express');
var app = express();

// dynamic web resources
app.get('/', (req, rsp)=>{
    rsp.send('Hello Express');
});
app.get('/info', (req, rsp)=>{
    rsp.send({
        name: 'John',
        age: 18
    });
});
app.get('/blog', (req, rsp)=>{
    rsp.send('Hello, <a href="http://www.onejar99.com" target="_blank">OneJar\'s Blog</a>');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});
