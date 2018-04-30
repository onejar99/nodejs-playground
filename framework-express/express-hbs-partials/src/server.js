const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(`${__dirname}/views/partials`);

// templating - partials
app.get('/about', (req, rsp) => {
    rsp.render('about.hbs', {
        pageTitle: 'About',
        bodyTitle: 'About!',
        bodyText: 'This is a about page.',
        copyrightYear: 2020
    });
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});