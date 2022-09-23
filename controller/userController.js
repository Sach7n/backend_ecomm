const user = require('../model/userSchema')

const createUser = async (req,res)=>{
    let userExist;
    try{
        const User = new user({
            Name: req.body.name,
            Password: req.body.password,
            Email : req.body.email,
            isAdmin : req.body.adminStatus

        })
        const newUser = await User.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.json(400).json(err)
    }

}

module.exports = {createUser}