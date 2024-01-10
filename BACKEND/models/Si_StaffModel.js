const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
        trim: true
    },
    
    LastName:{
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required: true,
        trim: true
    },

    phone:{
        type: String,
        required: true,
        trim: true
    },

    position:{
        type: String,
        required: true,
        trim: true
    },

    department:{
        type: String,
        required: true,
        trim: true
    },

    leaveDate:{
        type: String,
        required: true,
        trim: true
    },

    requestfor:{
        type: String,
        required: true,
        trim: true
    },

    leaveType:{
        type: String,
        required: true,
        trim: true
    },

    comment:{
        type: String,
        required: true,
        trim: true
    },

}
);

const leaveModel = mongoose.model('leave',leaveSchema);

module.exports = leaveModel
