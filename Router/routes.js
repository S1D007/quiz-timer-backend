const express = require("express")

const route = express.Router()
// route.use(express.json());
// Routes 

route.post("/add-questions",(req,res)=>{
    const {category,level,options,correctAnswer,price,prize} = req.body
    // res.send("Hi")
    res.send(req.body);
})

module.exports = route