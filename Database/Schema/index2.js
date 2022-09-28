const mongoose = require("mongoose")

/* Creating Schema for the Parameter's */

const UserSchema = mongoose.Schema({
    // Here type = Datatype, required = boolean true and false[true = this feild must be present in the req.body() otherwise it will give error, false = it is not necessary to add the corrosponding feild]
    questionsID:{
        type:"Array"
    },
    email:{
        type:"String",
        required:true
    }
})
module.exports = UserSchema