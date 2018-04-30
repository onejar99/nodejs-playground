const express = require('express');
//const hbs = require('hbs');
var app = express();

// set View Engine
//app.set('view engine', 'hbs');

// templating - basic
app.get('/hello', (req, rsp) => {
    rsp.render('hello.hbs');
});

app.get('/welcome', (req, rsp) => {
    rsp.render('welcome.hbs', {
        pageTitle: 'Welcome',
        bodyTitle: 'Welcome!',
        bodyText: 'This is a welcome page.',
        copyrightYear: new Date().getFullYear()
    });
});

app.get('/welcome2', (req, rsp) => {
    rsp.render('welcome_2.txt', {
        pageTitle: 'Welcome2',
        bodyTitle: 'Welcome2!',
        bodyText: 'This is a welcome2 page.',
        copyrightYear: new Date().getFullYear()
    });
});

app.get('/welcome3', (req, rsp) => {
    rsp.render('welcome_3.html', {
        pageTitle: 'Welcome3',
        bodyTitle: 'Welcome3!',
        bodyText: 'This is a welcome3 page.',
        copyrightYear: new Date().getFullYear()
    });
});



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});