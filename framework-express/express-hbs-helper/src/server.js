const express = require('express');
const hbs = require('hbs');
var app = express();


// hbs helper
hbs.registerHelper('copyrightName', ()=>{
    return "OneJar";
});
hbs.registerHelper('copyrightYear', ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('keypoint', (text) =>{
    return text.toUpperCase();
});

app.get('/about', (req, rsp) => {
    rsp.render('about.hbs', {
        pageTitle: 'About',
        bodyTitle: 'About!',
        bodyText: 'This is a about page.',
        copyrightYear: 2050 // hbs helper works first
    });
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});