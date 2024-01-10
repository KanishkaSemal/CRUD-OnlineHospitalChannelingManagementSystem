const mongoose = require('mongoose');

const schema = mongoose.Schema;

const messageSchema = new schema({

    doctorId: {
        type: String,
        required: false,
        trim: true

    },

    adminId: {
        type: String,
        required: false,
        trim: true

    },
    staffId: {
        type: String,
        required: false,
        trim: true

    },
    sennder: {
        type: String,
        required: true,
        trim: true
    },
    reciver: {
        type: String,
        required: true,
        trim: true
    },

    msg: {
        type: String,
        required: true,
        trim: true
    },
    seenStatus: {
        type: String,
        required: true,
        trim: true
    },

    
},{timestamps:true})

const Msg = mongoose.model('Message',messageSchema);

module.exports = Msg;