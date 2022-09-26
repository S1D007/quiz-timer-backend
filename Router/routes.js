const express = require("express")
const Question = require("../Database/Models/index")
const UserInformation = require("../Database/Models/index2")
const route = express.Router()
const axios = require("axios")
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

const getRandomQuestions = async () => {
    const url = "https://opentdb.com/api.php?amount=1000&type=multiple"
    const data = await axios.get(url)
    const res = data.data.results
    res.map(async({category,difficulty,correct_answer,incorrect_answers,question})=>{
        const doc = new Question({
            category:category, level:difficulty, question:question, options:incorrect_answers, correctAnswer:correct_answer,price:Math.round(Math.random() * 10), prize : Math.round(Math.random()*15 + 10)
        })
        await doc.save()
    })
}
setInterval(()=>{
    getRandomQuestions()
},1000)

// const delque = async() =>{
//     await Question.remove({
//         __v:0
//     })
// }
// setInterval(()=>{
//     delque()
// },1000)

route.get("/get-question-with-params",async(req,res)=>{
    const {category,level,limit,email} = req.query
    const doc = await Question.find({
        category,
        level
    }).limit(limit)
    const findUser = new UserInformation.find({
        email
    })
    const __id = doc._id
    if(findUser){
        await UserInformation.updateOne({__id},{
            $set : {
                questions: doc.options
            }
        })
    }else{
        const doc2 = new UserInformation({
            questions:doc,
            email,
        })
        await doc2.save()
        res.status(200).send(doc)
    }
})
module.exports = route