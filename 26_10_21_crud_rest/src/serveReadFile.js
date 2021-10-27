

const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());


const fs=require("fs");
let fileJason="comments.json";


app.get("/", (req, res) => {
// res.send("it works");
res.send(fs.readFileSync(fileJason,"utf8"));
});
//!____________________________________________________________________________________________________________

app.get("/comments", (req, res) => {
    res.send(fs.readFileSync(fileJason,"utf8"));
    
})

//!____________________________________________________________________________________________________________

app.get("/comments/:id",(req,res)=>{
    const id= req.params.id;
    res.send(fs.readFileSync(fileJason,"utf8"));
    let comment=comments.find((element)=>element.id == id)
    return comment ? res.send(comment) : res.sendStatus(404);
});

//!____________________________________________________________________________________________________________

app.listen(PORT, function () {
    console.log(`the ports is listne on:${PORT}`);
});

//!____________________________________________________________________________________________________________
//!____________________________________________________________________________________________________________






























































