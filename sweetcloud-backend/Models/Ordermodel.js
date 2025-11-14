const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    cakeId : {type:mongoose.Schema.Types.ObjectId, ref:"cake",required :true}
},{timeseries : true});

module.exports = mongoose.model("order",OrderSchema);