const express = require('express');
var app = express();

var maintaining = false;

// middleware: similar to Interceptors in Java
app.use((req, rsp, next)=>{
    console.log(`MIDDLE 01 [${new Date().toString()}] ${req.method} ${req.url}`);
    next();
    console.log(`MIDDLE 01 after next`);
});
app.use((req, rsp, next)=>{
    console.log(`MIDDLE 02 starting`);
    if(maintaining){
        rsp.render('maintenance.hbs');
        return;
    }
    next();
    console.log(`MIDDLE 02 after next`);
});
app.use((req, rsp, next)=>{
    console.log(`MIDDLE 03 starting`);
    if(req.method === 'GET' ){
        next();
        console.log(`MIDDLE 03 after next`);
        return;
    }
    rsp.send({
        status: 'Error',
        msg: 'Only GET Allowed'
    });
    console.log(`MIDDLE 03 after send`);
});


app.get('/hello', (req, rsp)=>{
    console.log(`[API] /hello`);
    rsp.send('Hello Express Middleware');
});

app.use((req, rsp, next)=>{
    console.log(`MIDDLE 04 [${new Date().toString()}] ${req.method} ${req.url}`);
    rsp.send('Oops! Resource Not Found!');
    console.log(`MIDDLE 04 after next`);
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});