const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    taskName:{
        type: String,
        required: true
    },

    assignTo:{
        type: String,
        required: true
    },

    createdAt: {
        type: String,
        required: true
    },

    sta: {
        type: String,
        required: true
    },

    taskdiscription: {
        type: String,
        required: true
    }

});

const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel