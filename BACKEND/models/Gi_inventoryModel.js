const mongoose = require('mongoose')

const postShema = new mongoose.Schema({

    Name:{
        type : String,
        required: true
    },
    company_Name :{
        type : String,
        required : true
    },
    Address:{
        type : String,
        required : true
    },
    Qty:{
        type:String,
        required:true
    },
    price:{ 
        type:String, 
        required:true
    },    
    MFG:{
        type:String,
        required:true
    },
    EXP:{
        type:String,
        required:true
    }
});

module.exports =mongoose.model('Posts',postShema)