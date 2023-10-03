// import the mongoose library 
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/todo_db', { useNewUrlParser: true, useUnifiedTopology: true, });

// accessing the database
const db = mongoose.connection;

// incase  of error in connecting the db ,  show error in console
db.on("error", console.error.bind("Error connecting the mongodb database"));

// on successful connection ,  log the console
db.once("open", () => {
    console.log("Successfully connnected to mongodb database");
});
