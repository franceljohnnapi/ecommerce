const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
        username:{type:String, required:true, unique:true}, //dito yung pag declare ng username na dapat walang kapareho
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true, unique:true},
        isAdmin:{
            type: Boolean,
            default: false, //para di mabuksan ng ordinary nigga
        },
    }, 
    {timestaps: true},
);

module.exports = mongoose.model("User",userSchema);