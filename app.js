const env = require("./environment.js");
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Event = require('./models/event')


const app = express();

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, {useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=> {
        console.log('Connected to DB');
        //listening
        app.listen(process.env.PORT || 3000);
    })
    .catch((err) => console.log(err));



//view engine
app.set('view engine','ejs')

app.use(express.static('public'));
app.use(morgan('dev'));

//Sandbox routes
app.get('/add-event',(req,res)=>{
    const event = new Event({
        name: "Anubhab",
        lat: 24,
        lng: 24,
        minpeeps: 3,
        activity: "football",
        description: "digum digum"
    });
    event.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/find',(req,res)=>{
    res.render('find',{api_key:env.GOOGLE_API_KEY})
})

app.get('/event',(req,res)=>{
    res.render('event',{api_key:env.GOOGLE_API_KEY})
})

app.get('/login',(req,res)=>{
    res.render('login',{sawo_key:env.SAWO_KEY})
})