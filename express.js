const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./routers/index');


module.exports = (app) => {

//-- body parser middleware
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({extended: false}));

//-- static files middleware
app.use('/node_modules' , express.static(path.join(__dirname , 'node_modules')));
app.use('/dist' , express.static(path.join(__dirname , 'dist')));
app.use('/images' , express.static(path.join(__dirname , 'images')));

//-- view engine
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));


//-- routes
app.use('/' , indexRouter);




}