const router = require("express").Router(); //pag initialize nung router
const User = require("../models/User");

//REGISTER
router.post("/register", async (res, req) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    //send to DB using save method
    /* HTTP response status codes ang nasa loob ng res.status*/
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser); //pag successfull
    } 
    catch (err) {
        res.status(500).json(err); //pag di successfull
    }
});

module.exports = router; //export the router