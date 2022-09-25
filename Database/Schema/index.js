const mongoose = require("mongoose")

/* Creating Schema for the Parameter's */

const QuestionSchema = mongoose.Schema({
    // Here type = Datatype, required = boolean true and false[true = this feild must be present in the req.body() otherwise it will give error, false = it is not necessary to add the corrosponding feild]
    category:{
        type:"String",
        required:true,

    },
    level:{
        type:"String",
        required:true,

    },
    question:{
        type:"String",
        required:true,

    },
    options:{
        type:"Array",
        required:true,

    },
    correctAnswer:{
        type:"String",
        required:true,
    },
    price:{
        type:"Number",
        required:true,
    },
    prize:{
        type:"Number",
        required:true,
    },
})

module.exports = QuestionSchema