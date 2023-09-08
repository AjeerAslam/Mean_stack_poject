const User = require('../Models/userModel');////////////////////jgfs//

//signup api
exports.signup =async(req, res) => {
    console.log(req.body);
    try{
    const user =  await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data: { user }
    });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.login =async (req, res) => {
    try{
    const user = await User.findOne({email: req.body.email, password:req.body.password});
    //1-only active users can login
    //2-authentication
    if(user){
        res.status(201).json({
            status: 'success',
            data: { user }
        });
    }else{
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    } 
};
    
exports.userList=async (req, res) => {
    
    const user = await User.find({role:'user'});
    res.status(201).json({
        status: 'success',
        data: { user }
    });
};

exports.getUser=async (req, res) => {
    const user = await User.find({_id:req.params.id});
    res.status(201).json({
        status: 'success',
        data: { user }
    });
};

exports.userEdit =async (req, res) => {
    const editedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    res.status(201).json({
        status: 'success',
        data: { editedUser }
    });
};

exports.userApproval =async (req, res) => {
    //2-set temp password
    const doc = await User.findOne({ _id:req.params.id} );
    const approvedUser = await User.findByIdAndUpdate(req.params.id, {status:'active',password:doc.firstName+"2023"}, {new: true, runValidators: true});
    res.status(201).json({
        status: 'success',
        data: { approvedUser }
    });
};

exports.userDelete =async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null
    });
};

exports.passwordReset =async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {password:req.body.password}, {new: true, runValidators: true});
    res.status(201).json({
        status: 'success',
        data: { updatedUser }
    });
};

/*exports.filtering =async (req, res) => {
    Regex = new RegExp(`^${req.params.key}`, 'i');
    const Users = await User.find({
        $or: [
            { firstName: { $regex: Regex } },
            { lastName: { $regex: Regex } },
            { email: { $regex: Regex } }
      ]
    });
    res.status(201).json({
        status: 'success',
        data: { Users }
    });
};*/

