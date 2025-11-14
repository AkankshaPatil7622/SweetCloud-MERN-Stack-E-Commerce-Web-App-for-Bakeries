const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const connect = async() =>{
    try{
        await  mongoose.connect(MONGO_URL);
        console.log("connected to database...")
    }catch(error){
        console.log(error);
    }
}
module.exports = connect;

