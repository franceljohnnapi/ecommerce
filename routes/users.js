const router = require("express").Router(); //pag initialize nung router

module.exports = router; //export the router




/*mga pang test sa routes
router.get("/usertest", (req,res) =>{
    res.send("tanginamo matulog ka na")
});

router.post("/userposttest", (req,res) =>{
    const username = req.body.username;
    //console.log(username);
    res.send("Your username is "+username);
})*/