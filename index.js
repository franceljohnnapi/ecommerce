const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { CLIENT_RENEG_LIMIT } = require("tls");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();



mongoose.connect(
    process.env.MONGO_URL //yung secret key andito na nakatago sa dotenv na file
)
.then(()=>console.log("DBConnection Successfull!")) //test naman dito if mag connect sa database sa mongodb
.catch((err)=>
    {console.log(err)
});

app.get("/api/test", ()=>{
    console.log("test is done"); //pag test ng port sa browser is gumagana
});

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute); //pagtawag nung routes sa users.js tas gamit yung endpoint


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend is running");  //dito naman chinecheck if gumagana yung port na pupuntahan nung app
});