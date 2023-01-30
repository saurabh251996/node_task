const express=require("express")
const app=express()
const mongoose=require('./config/db')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// const dotenv = require("dotenv")
// dotenv.config()
const productRoutes=require('./routes/product')
const path = require("path");
var cors = require("cors");



const port=3000
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
//router
app.use('/product',productRoutes)
app.listen((port),function(err){
    if(err)
    console.log(err)
    else
    console.log("3000 calling")
});



