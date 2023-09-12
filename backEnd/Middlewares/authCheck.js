const User = require('../Models/userModel');
const jwt = require("jsonwebtoken");

exports.authCheck=async (req,res,next) => {
    token=req.cookies.jwt;
    jwt.verify(token,"secretkeyappearshere", async (err,user) => {
        unauthenticatedResponse=()=>{
            res.status(201).json({
                status: 'success',
                message:"you are not authenticated"
            });
        }
        if(err!=null){
            unauthenticatedResponse();
        }else{
            const userExists = await User.findOne({email: user.email, password:user.password});
            if(!userExists){
                unauthenticatedResponse();   
            }else{
                next();     
            }  
        }                     
    });   
}