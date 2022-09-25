const mongoose = require("mongoose")

const UserSchema = require("../Schema/index2")

/* Creating Connection with Database through Model so that MongoDB can  create   Collection for storing Data for the Provided Schema Key-value 'Pair'
*/

// Here Question is the collection name which is written in Singular so that mongoose will automatically make it Plural
const UserInformation = new mongoose.model("UserInfo",UserSchema)

module.exports = UserInformation