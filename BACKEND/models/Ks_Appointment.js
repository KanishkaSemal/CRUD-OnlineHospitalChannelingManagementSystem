const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required: true
    },
    lastName :{
        type : String,
        required: true
    },
    phone:{
        type : String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },

    
    doctorName:{
        type:String,
        required: true
    },
    appointmentdate :{
        type:Object,
        required: true
    },

    appointmenttime :{
        type:Object,
        required:true
    },

    discriptionOfDiagnosis:{
        type:String,
        required: true
    },
});

const doctorModel = mongoose.model('Appointment',doctorSchema)
module.exports = doctorModel