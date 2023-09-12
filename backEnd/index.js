const mongoose = require('mongoose');
const app = require('./app');

//connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/userManagement', {
    useNewUrlParser: true
}).then((conn) => {
    //console.log(conn);
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});



//server starting
app.listen(3000, () => {
    console.log('server has started...');
});

