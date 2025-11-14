const express = require('express');
const cakeRoute = express.Router();
const cakecontroller = require('../Controllers/CakeController');
const auth = require('../middlewares/auth');

cakeRoute.post("/addcake",auth,cakecontroller.addcake);
cakeRoute.get("/showcakes",auth,cakecontroller.showcakes);  //get all cakes
cakeRoute.get("/getcakebyflavour/:flavour",cakecontroller.getcakebyflavour) // get cake by flavour
cakeRoute.get("/getcakebyprice/:price",cakecontroller.getcakebyprice) // get cake by price
cakeRoute.get("/filterforhighprice/:price",cakecontroller.filterforhighprice) // filter cakes by price
cakeRoute.get("/filterforlowprice/:price",cakecontroller.filterforlowprice) // filter cakes by price
cakeRoute.get("/getcakebycategory/:category",cakecontroller.getcakebycategory);
cakeRoute.put("/updatecake/:id",cakecontroller.updatecake);
cakeRoute.get("/getcakebyid/:id",cakecontroller.getcakebyid);
cakeRoute.delete("/deletecakebyid/:id",cakecontroller.deleteCake);
cakeRoute.get("/getcakebybaker",auth,cakecontroller.getcakebybaker);
 

module.exports = cakeRoute;