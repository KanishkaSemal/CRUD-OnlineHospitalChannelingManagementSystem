const mongoose = require('mongoose')

const addMessageHistory = new mongoose.Schema({
    personOne:{
        type:String,
        required:true,
        trim:true
    },
    personTwo:{
        type:String,
        required:true,
        trim:true
    },
    personOneName:{
        type:String,
        required:true,
        trim:true
    },
    personTwoName:{
        type:String,
        required:true,
        trim:true
    },
    
    
});


const addMsgHistory = mongoose.model("MessageHistory",addMessageHistory)
module.exports = addMsgHistory