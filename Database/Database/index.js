const mongoose = require("mongoose");

// Establishing Connection with MongoDB with the MongoDB Database Driver  for nodejs - Mongoose

const urlOfDatabase = "mongodb+srv://amrendra-quiz-timer:mnbvcxz@quiz-timer-database.cfotuau.mongodb.net/Questions?retryWrites=true&w=majority"


mongoose.connect(urlOfDatabase).then(()=>{
    console.log("Connection Succesfull")
}).catch((e)=>{
    console.log(`Error Occured Because > \n 
    ${e.message}
    `)
})