const mongoose = require('mongoose')

const CodingSchema = new mongoose.Schema({
    procedureCode :{
        type:Number,
        required:[true,'Procedure Code is required'],
    },

    codeDescription :{
        type:String,
        required:[true,'Procedure description is required'],
    },

    unitCost :{
        type:Number,
        required:[true,'Unit cost is required'],
    },

}

);

const codingModel = mongoose.model('Codes',CodingSchema)


module.exports = codingModel