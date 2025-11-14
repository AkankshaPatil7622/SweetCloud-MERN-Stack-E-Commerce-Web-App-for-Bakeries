const express = require('express');
const orderroute = express.Router();
const {makePayment} = require('../Controllers/OrderController');
const auth = require('../middlewares/auth');

orderroute.post("/buy-cake",auth,makePayment);





module.exports = orderroute;