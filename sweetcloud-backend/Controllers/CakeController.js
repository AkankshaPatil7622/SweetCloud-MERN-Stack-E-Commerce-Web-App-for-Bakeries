const Cake = require('../Models/Cakemodel');

exports.addcake = async(req,resp) => {
    try{
        const {cake_name,flavour,price,category,description,image,weight} = req.body;
        let newCake = new Cake({
            cake_name : cake_name,
            flavour : flavour,
            price : price,
            category : category,
            description : description,
            image : image,
            weight : weight,
            userId : req.userId
        });
        await newCake.save();
        resp.status(201).json({message : "Cake added successfully.."})
    }catch(error){
        console.log(error.message);
        resp.status(500).json({message : error.message})
    }
}

exports.showcakes = async(req,resp)=>{
    try{
        let bakerId = req.userId;
       let showcake = await Cake.find({userId : bakerId});
        if(!showcake){
            resp.status(404).json({message : "Cake not found.."});
        }
        resp.status(201).json(showcake);
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}

exports.getcakebyflavour = async(req,resp)=>{
    try{
         let flavour = req.params.flavour;
        let cakes = await Cake.find({
            flavour : {$regex : new RegExp(flavour,"i")}
        });
        if(cakes.length ===0){
           return resp.status(404).json({message : "Cake not found.."});
        }
        resp.status(200).json(cakes);
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}

exports.getcakebyprice = async(req,resp) => {
    try{
         let price = Number(req.params.price);
        let cake = await Cake.find({price : price});
        if(cake.length===0){
           return resp.status(404).json({message : "Cake not found.."});
        }
        resp.status(201).json(cake);
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}

exports.filterforhighprice = async(req,resp) => {
     try{
        let price = req.params.price;
        let cake = await Cake.find({price : {$gte : price}})
        if(cake.length === 0){
            return resp.status(404).json({message : "No cake found.."});
        }
        resp.status(201).json(cake);
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}

exports.filterforlowprice = async(req,resp) =>{
    try{
        let price = req.params.price;
        let cake = await Cake.find({price : {$lte : price}})
        if(cake.length === 0){
            return resp.status(404).json({message : "No cake found.."});
        }
        resp.status(201).json(cake);
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}
exports.getcakebycategory = async(req,resp) =>{
      try{
        let category = req.params.category;
        let cake = await Cake.find({category : category})
        if(cake.length === 0){
            return resp.status(404).json({message : "No cake found.."});
        }
        resp.status(201).json(cake);
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}

exports.updatecake = async(req,resp)=>{
      try{
        let id = req.params.id;
        let updates = req.body;
        let cake = await Cake.findByIdAndUpdate(id,updates,{new:true});
        if(!cake){
            return resp.status(404).json({message : "No cake found.."});
        }
        resp.status(200).json({message : "cake updated successfully",cake});
    }catch(error){
        console.log(error);
        resp.status(500).json({message : error.message})
    }
}

exports.getcakebyid = async(req,res) => {
    let id = req.params.id;
    let cake = await Cake.findById(id)
        if(!cake){
            res.status(404).json({message:"cake not found"});
        }
        else{
            res.status(200).json(cake)
        }
    
}

exports.deleteCake = async(req, res) => {
    try{
        let id = req.params.id;
    let dltCk = await Cake.findByIdAndDelete(id)
    if(!dltCk){
       return res.status(404).json({message:"Cake not found"});
    }
    res.status(200).json({message : "cake deleted successfully"});
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

exports.getcakebybaker = async(req, res) => {
    try{
        let baker = await Cake.find
    }catch(error){
        console.log(error.message);
        console.log("Error from catch block");
    }
}