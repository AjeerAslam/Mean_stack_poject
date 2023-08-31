//IMPORT PACKAGE
const express = require('express');
let app = express();
const Router=require("./Routes/Router")


app.use(express.json());

//routes
app.use('/',Router);


module.exports = app;