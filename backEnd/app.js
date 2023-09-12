//IMPORT PACKAGE
const express = require('express');
let app = express();
const Router=require("./Routes/Router")
var cors = require('cors')
const cookieParser = require('cookie-parser');

var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
  }


/*app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // Pass to next layer of middleware
    
});*/

//middlewares 
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());
  

//routes
app.use('/',Router);

//exporting module to server.js
module.exports = app;