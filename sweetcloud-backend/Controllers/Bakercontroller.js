const Baker = require('../Models/Bakersmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'SWEETCLOUD' 


const register = async(req,res) =>{
    const {baker_name,baker_city,email,mobile,password,shoptype,shopname, address} = req.body;

    try{
        
        const existingUser = await Baker.findOne({email : email});
        if(existingUser) {
           return res.status(400).json({message : "User already exist.."});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const result =  Baker.create({
            baker_name : baker_name,
            baker_city : baker_city,
            email : email,
            mobile : mobile,
            password : hashedPassword,
            shoptype : shoptype,
            shopname : shopname,
            address : address
        })

        res.status(201).json({user : result})
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

const login = async(req,res) => {
    const {email,password} = req.body;

    try{
        const existingUser = await Baker.findOne({email : email});
        if(!existingUser){
          return  res.status(404).json({message : "User not found"});

        }
        const matchPassword = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }
        const token = jwt.sign({email : existingUser.email,id : existingUser._id},SECRET_KEY);
        res.status(201).json({message:"logged in successfully..",token : token});
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

module.exports = {register,login,SECRET_KEY};