const express = require('express')
const app = express();
const mongoose = require('mongoose');



app.use(express.json());
app.use(express.static('public'));

const thymesController = require('./controllers/thymes.js');
app.use('/thymes', thymesController);

const mongoURI = "mongodb://localhost:27017/thymes";
mongoose.connect(mongoURI);
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, ()=>{
    console.log('Go ahead user, Im listening');
})
