const mongoose = require("mongoose")

const QuestionSchema = require("./Schema")

/* Creating Connection with Database through Model so that MongoDB can  create   Collection for storing Data for the Provided Schema Key-value 'Pair'
*/

// Here Question is the collection name which is written in Singular so that mongoose will automatically make it Plural
const Questions = new mongoose.model("Question",QuestionSchema)

module.exports = Questions