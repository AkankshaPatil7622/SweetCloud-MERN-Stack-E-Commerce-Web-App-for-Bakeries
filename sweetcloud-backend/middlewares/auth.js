const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SWEETCLOUD'
const auth = async(req,res,next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,SECRET_KEY);
            req.userId = user.id
        }
        else{
           return res.status(401).json({message : "Unauthorized Access"})
        }
        next();
    }catch(error){
        res.status(401).json({message : error.message});

    }
}

module.exports = auth;




