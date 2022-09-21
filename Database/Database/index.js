const mongoose = "mongoose";

// Establishing Connection with MongoDB with the MongoDB Database Driver  for nodejs - Mongoose

const urlOfDatabase = ""


mongoose.connect(urlOfDatabase).then(()=>{
    console.log("Connection Succesfull")
}).catch((e)=>{
    console.log(`Error Occured Because > \n 
    ${e.message}
    `)
})