const env = require("./environment.js");
const express = require('express');
const morgan = require('morgan');
require("./environment.js")
const app = express();

//listening
app.listen(process.env.PORT || 3000);

//view engine
app.set('view engine','ejs')

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/find',(req,res)=>{
    res.render('find',{api_key:env.GOOGLE_API_KEY})
})

app.get('/event',(req,res)=>{
    res.render('event',{api_key:env.GOOGLE_API_KEY})
})