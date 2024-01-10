const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    compId:{
        type:String,
        required: true,
    }
});

const users = new mongoose.model("Patient",userSchema);


module.exports = users;