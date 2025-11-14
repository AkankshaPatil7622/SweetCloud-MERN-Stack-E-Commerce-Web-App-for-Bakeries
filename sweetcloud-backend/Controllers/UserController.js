const User = require('../Models/Usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./Bakercontroller');

exports.signup = async(req,res) => {
   try{
    const {user_name,user_email,password,city,mobile,address} = req.body;
    const existingUser = await User.findOne({user_email : user_email});
    if(existingUser){
        return res.status(400).json({message : "User already exists"});
    }
    let hashedPassword = await bcrypt.hash(password,10);
    let newUser = User.create({
        user_name:user_name,
        user_email : user_email,
        password : hashedPassword,
        city : city,
        mobile : mobile,
        address : address
    })

    res.status(201).json({message : "User registered successfully...",newUser: newUser.user_name});

   }catch(error){
    console.log(error);
    console.log("error from catch block");
    
   }
}

exports.signin = async(req,res) => {
    try{
        const {user_email,password} = req.body;
        let existingUser = await User.findOne({user_email : user_email});
        if(!existingUser){
            return res.status(404).json({message:"User not found"});
        }
        let matchPassword = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }
        let token = await jwt.sign({user_email:existingUser.user_email,id:existingUser._id},SECRET_KEY);
        res.status(201).json({message : "Logged in successfully..",token:token});
    }catch(error){
        console.log(error);
        console.log("error from catch");
        
        
    }
}