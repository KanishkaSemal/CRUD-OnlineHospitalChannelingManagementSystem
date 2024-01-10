const mongoose = require('mongoose')

const BillingSchema = new mongoose.Schema({
    
    firstName:{
        type : String,
        required:[true,'First name is required'],
    },
    lastName :{
        type : String,
        required:[true,'Last name is required'],
    },
    phone:{
        type : String,
        required:[true,'Phone no is required'],
    },
    
    email:{
        type:String,
        required:[true,'Email is required'],
    },
    
    appointmentdate :{
        type:Object,
        required:[true,'Date is required'],
    },
    billingCodes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BillingCode'
      }]

}

);

const billingModel = mongoose.model('Billing',BillingSchema)


module.exports = billingModel

