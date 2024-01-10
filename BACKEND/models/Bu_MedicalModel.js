const mongoose = require('mongoose')

const medialSchema = new mongoose.Schema({

    Fname:{
        type : String,
        required: true
    },
    Lname:{
        type : String,
        required: true
    },
    PatinetId:{
        type : String,
        required: true
    },
    BirthDate:{
        type : Object,
        required: true
    },
    age:{
        type : String,
        required: true
    },
    gender:{
        type : String,
        required: true
    },
    contact:{
        type : String,
        required: true
    },
    medication:{
        type : String,
        required: true
    },
    history:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    discount:{
        type : String,
        required: true
    },
    PastTreatName:{
        type : String,
        required: true
    },
    PTreatDate:{
        type : String,
        required: true
    },
    PDoctorName:{
        type : String,
        required: true
    },
    Result:{
        type : String,
        required: true
    },
    NewTreatName:{
        type : String,
        required: true
    },
    NTreatDate:{
        type : String,
        required: true
    },
    NDoctorName:{
        type : String,
        required: true
    },
    diagnosis:{
        type : String,
        required: true
    }
    
     
});

module.exports =mongoose.model('medical',medialSchema)