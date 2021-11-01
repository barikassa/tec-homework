console.log("app is loading");

let functionSaver = require('./functionSaverPost');

//! express
const express = require("express"),
    app = express(),
    PORT = 8080;

app.use(express.json());

app.get("/todos", (req, res) => {
    functionSaver.showTodos(req, res);
})


app.post("/todos", (req, res) => {
    functionSaver.postData(req,res);
    
})

app.patch("/todos/:id",(req,res)=>{
    functionSaver.updateDataBs(req,res);
})

app.delete("/todos/:id", (req,res)=>{
    functionSaver.deleteDataBs(req,res);

})


app.listen(PORT, () => {
    console.log(`port is listening on:${PORT}`);
})






























