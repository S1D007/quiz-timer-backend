const express = require("express")

const route = express.Router()
route.use(express.json());
// Routes 

/* Add Question Route */
route.post("/add-questions",(req,res)=>{
    const {category,level,question,options,correctAnswer,price,prize} = req.body
    /* Checking whether the following conditions are false
        if false then it will send the corrosponding Errors
    */
    if(!category){
        res.send({
            "error":"Category is Required *"})
    }else if(!question){
        res.send({
            "error":"Question is Required*"})
    }
    else if(!level){
        res.send({
            "error":"Level is Required*"})
    }else if(!options){
        res.send({
            "error":"options is Required*"})
    }else if(!correctAnswer){
        res.send({
            "error":"correctAnswer is Required*"})
    }else if(!price){
        res.send({
            "error":"price is Required*"})
    }else if(!prize){
        res.send({
            "error":"prize is Required*"})
    }

    res.send(req.body);
})

module.exports = route