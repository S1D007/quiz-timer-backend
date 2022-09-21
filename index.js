/* 
            This is the Entry poin File of Express And Node Server
*/
// Imports 
const express = require("express")
const Router = require(__dirname+"/Router/routes.js") 
const Database = require("./Database/Database")

const app = express()

// Using Middlewares
app.use(Router)
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const Port = 1234||process.env.PORT

// at "localhost:port'/' "
app.post("/",(req,res)=>{
    // res.send("Hello World")
    res.send(req.body)
})

// Init of app
app.listen(Port,(e)=>{
    console.log(`App is running on Port ${Port} Link: http://localhost:${Port}/`)

    if (e) console.log(`An occured due to the following Reasons \n
        ${e}
    `)
})