const mongoose = require('mongoose');
const PaymentOrder = require('../Models/Ordermodel');
const Cake = require('../Models/Cakemodel');

exports.makePayment = async(req, res) => {
    try{
        let {id} = req.body;
        let cake = await Cake.findById({_id : id});
        if(!cake){
            return res.status(404).json({message : "Cake not found"});
        }
        


    }catch(error){
        console.log(error);
        console.log("error from catch block");
        
    }
}