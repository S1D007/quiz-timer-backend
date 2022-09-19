/* 
            This is the Entry poin File of Express And Node Server
*/
// Imports 
const express = require("express")

const app = express()

const Port = 1234||process.env.PORT

// at "localhost:port'/' "
app.get("/",(req,res)=>{
    res.send("Hello World")
})

// Init of app
app.listen(Port,(e)=>{
    console.log(`App is running on Port ${Port} Link: http://localhost:${Port}/`)

    if (e) console.log(`An occured due to the following Reasons \n
        ${e}
    `)
})