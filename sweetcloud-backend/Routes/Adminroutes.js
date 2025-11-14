const express = require('express');
const adminRoute = express.Router();
const cakeroute = require('../Routes/CakeRoute');


adminRoute.use("/cakes",cakeroute);

module.exports = adminRoute;