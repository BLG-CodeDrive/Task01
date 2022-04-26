const User = require("../models/User")
const bcrypt = require("bcrypt")


//REGISTER
const register = async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      })
      const user = await newUser.save();
      res.json({ 
        status : "success",
        message : "User register Successfully",
        data : user
      })
    } catch (err) {
        res.json({ 
          status : "error",
          message : err.message 
        })
    }
}



//DELETE User
const deleteUser = async (req,res) => {
    try{
        let id = req.params.id
        const user = await User.findById(req.params.id)
        User.findByIdAndRemove(id, (err,result) => {    
            res.json({ 
                status : "success",
                message : "User deleted Successfully",
                data : user                
            })
        })
    }catch(err){
            res.json({
                status : "fail",
                message : err.message 
            })
    }
}


//UPDATE
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        res.json({ 
            status : "success",
            message : "User updated Successfully",
        }) 
    }catch(err){
        res.json({ 
            status : "error",
            message : err.message 
        })
    }
}


// GET All Users
const allUsers = async (req, res) => {
    try{
        const user = await User.find()
        res.json({ 
            status : "success",
            message : "All Users",
            data : user
        })
    }catch(error) {
        res.json({ 
            status : "error",
            message : err.message 
        })
    }
}


module.exports = {
    register,
    deleteUser,
    updateUser,
    allUsers,
}