//!------------------- web server-----------------------------
// ----------------1-------------------------------------

const express = require("express");
const app=express();
const PORT=8080;
const path=require('path');

app.get('/', function(req,res){
   const nameFile=path.join(__dirname,"public","name.html")
 res.sendFile(nameFile)
})

app.listen(PORT)

// --------------------------2---------------------------











