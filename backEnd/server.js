
const mongoose = require('mongoose');
const app = require('./app');
const User = require('./Models/userModel');


//connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/userManagement', {
    useNewUrlParser: true
}).then((conn) => {
    //console.log(conn);
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});

app.post('/', async(req, res) => {
    
    const us = await User.create(req.body);
    //User.create( req.body );
    /*res.status(201).json({
        status: 'success',
        data: {
            hii:"hello"
        }
    })*/
    res.send("hello");
});


  
//server starting
app.listen(3000, () => {
    console.log('server has started...');
});