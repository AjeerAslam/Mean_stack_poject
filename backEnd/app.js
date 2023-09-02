//IMPORT PACKAGE
const express = require('express');
let app = express();
const Router=require("./Routes/Router")
var cors = require('cors')

/*app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // Pass to next layer of middleware
    next();
});*/


app.use(cors())
app.use(express.json());


//routes
app.use('/',Router);


module.exports = app;