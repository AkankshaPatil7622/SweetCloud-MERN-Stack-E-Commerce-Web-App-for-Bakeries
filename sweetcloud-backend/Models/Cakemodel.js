const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    cake_name : {type : String,required : true},
    flavour : {type:String,required : true},
    price : {type:Number,required : true},
    category : {type:String,required : true},
    description:{type:String,required : true},
    image : {type:String,required:true},
    weight : {type : String, required : true},
    userId : {type : mongoose.Schema.Types.ObjectId,ref:"baker",required : true}
    //availability of cake

},{timestamps:true});

module.exports = mongoose.model("Cake",cakeSchema);