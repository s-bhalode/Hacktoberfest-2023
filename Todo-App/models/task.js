// import mongoose library
const mongoose = require('mongoose');

// Create task db schema
const taskSchema = new mongoose.Schema({
    description : {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

// Creating model
const Task = mongoose.model("Task", taskSchema);

// Export Task model to use further in whole app
module.exports = Task