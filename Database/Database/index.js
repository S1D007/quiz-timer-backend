const mongoose = require("mongoose");

// Establishing Connection with MongoDB with the MongoDB Database Driver  for nodejs - Mongoose

const urlOfDatabase = "mongodb://127.0.0.1:27017/test"


mongoose.connect(urlOfDatabase).then(()=>{
    console.log("Connection Succesfull")
}).catch((e)=>{
    console.log(`Error Occured Because > \n 
    ${e.message}
    `)
})