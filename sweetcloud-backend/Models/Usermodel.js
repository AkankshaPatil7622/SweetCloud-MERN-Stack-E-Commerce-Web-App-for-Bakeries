const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name : {type : String,required : true},
    user_email : {type : String, required : true},
    password : {type : String, required : true},
    city : {type : String, required : true},
    mobile : {type : Number, required : true, length : 10},
    address : {type : String, required : true}

},{timeseries:true})

module.exports = mongoose.model("user",userSchema);