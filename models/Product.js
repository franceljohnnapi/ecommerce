const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema({
        title:{type: String, required:true, unique:true}, //dito yung pag declare ng username na dapat walang kapareho
        desc:{type:String, required:true},
        img:{type:String, required:true},
        categories:{type:Array, required:true, unique:true},
        size:{type:String},
        color:{type:String},
        price:{type:Number, required:true},
    }, 
    {timestaps: true},
);

module.exports = mongoose.model("Product",productSchema);