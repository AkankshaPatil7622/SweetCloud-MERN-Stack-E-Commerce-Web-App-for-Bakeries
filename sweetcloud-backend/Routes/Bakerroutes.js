const express = require('express');
const route = express.Router();
const bakerRoutes = require('../Controllers/Bakercontroller');

route.post("/register",bakerRoutes.register);
route.post("/login",bakerRoutes.login);


module.exports = route;