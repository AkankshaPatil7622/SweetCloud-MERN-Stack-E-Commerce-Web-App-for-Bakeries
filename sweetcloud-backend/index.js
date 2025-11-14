const express = require('express');
const app = express();
// const dotenv = require('dotenv');
// dotenv.config();
const cors = require('cors');

const connect = require('./config');
connect();

// const port = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
const bakerroute = require('./Routes/Bakerroutes');
const cakeroute = require('./Routes/CakeRoute');
const adminroute = require('./Routes/Adminroutes');
const userroute = require('./Routes/Userroutes');
const orderroute = require('./Routes/OrderRoutes');



app.use("/baker",bakerroute);
app.use("/cake",cakeroute);
app.use("/admin",adminroute);
app.use("/user",userroute);
app.use("/order",orderroute);

app.listen(3000,()=>{
    console.log(`server is running on port 3000`)
})