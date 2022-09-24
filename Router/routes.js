const express = require("express")
const Question = require("../Database/Models/index")
const route = express.Router()
route.use(express.json());
// Routes 

/* Add Question Route */
route.post("/add-questions", async(req, res) => {
    const { category, level, question, options, correctAnswer, price, prize } = req.body
    /* Checking whether the following conditions are false
        if false then it will send the corrosponding Errors
    */
    if (!category) {
        res.send({
            "error": "Category is Required *"
        })
    } else if (!question) {
        res.send({
            "error": "Question is Required*"
        })
    }
    else if (!level) {
        res.send({
            "error": "Level is Required*"
        })
    } else if (!options) {
        res.send({
            "error": "options is Required*"
        })
    } else if (!correctAnswer) {
        res.send({
            "error": "correctAnswer is Required*"
        })
    } else if (!price) {
        res.send({
            "error": "price is Required*"
        })
    } else if (!prize) {
        res.send({
            "error": "prize is Required*"
        })
    }

    const doc = new Question({
        category, level, question, options, correctAnswer, price, prize
    })
    await doc.save()

    res.status(200).send("Succesfully Questions has been inserted go to \n '/getQuestions' to get the desired questions ")

})

route.get('/get-questions',async(req,res)=>{
    const data = await Question.find()
    res.json(data)
})  

route.get('/get-single-question/:id',async(req,res)=>{
    const _id = req.params.id
    const data= await Question.find({
    _id
    })
    res.json(data)
})


module.exports = route