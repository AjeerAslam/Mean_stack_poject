const mongoose = require('mongoose');
const validator = require('validator');

//name, email, password, confirmPassword, photo
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    phoneNo: {
        type:Number,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default:'user',
    },
    status: {
        type:String,
        enum:['active','awaitingApproval'],
        default:'awaitingApproval'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;