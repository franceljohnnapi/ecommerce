const mongoose = require("mongoose");
const { type } = require("os");


const cartSchema = new mongoose.Schema({
        userId:{type: String, required:true, unique:true}, 
        products:[
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default: 1,
                }
            }
        ],
    }, 
    {timestaps: true},
);

module.exports = mongoose.model("Cart",cartSchema);