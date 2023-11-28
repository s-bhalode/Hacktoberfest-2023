// import express
const express = require('express');
const app = express();

// Assigning port for server
const port = 8000;

// Use body parser for parsing form data
app.use(express.urlencoded({extended: true}));

// use express router
app.use('/', require('./routes'));

// database
const db = require('./config/mongoose');

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// static files
app.use(express.static('asset'));

// Starting server
app.listen(port, err => {
    if(err){
        console.log(`Error in running server ${err}`);
        return;
    }
    console.log(`Server is running at port : ${port}`);
});