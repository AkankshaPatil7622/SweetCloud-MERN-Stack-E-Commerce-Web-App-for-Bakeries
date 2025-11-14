const mongoose = require('mongoose');

const BakerSchema = new mongoose.Schema({
    baker_name : {type : String,required : true},
    baker_city : {type : String, required:true},
    email : {type : String, required : true},
    mobile : {type : Number, required : true},
    password : {type : String, required : true},
    shoptype : {type : String,required:true},
    shopname : {type : String, required : true},
    address : {type : String, required : true}

},{timestamps : true})

module.exports = mongoose.model("Baker",BakerSchema);