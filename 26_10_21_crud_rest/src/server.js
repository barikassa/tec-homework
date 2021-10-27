

const express = require("express");
const app = express();
const PORT = 8080;
const axios = require("axios");
// const e = require("express");
const url = "https://jsonplaceholder.typicode.com/users";
app.use(express.json());

// its important to use express json b/c its data not html/hbs
// app.use(express.json());

const comments = [];


app.get("/", (req, res) => {
    let resData;
    axios
        .get(url)
        .then(function (respond) {
            resData = respond.data;
            console.log(resData);
            res.send(JSON.stringify(resData));
        })
        .catch(function () {
            console.log("err");
        }
        );

})

//!____________________________________________________________________________________________________________

app.get("/comments", (req, res) => {
    res.send(comments);

})

//!____________________________________________________________________________________________________________

let freeId = 0;
app.post('/comments', (req, res) => {

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    if (name != undefined) {
        const userdata = { name: name, username: username, email: email, id: freeId }
        comments.push(userdata);
        console.log(comments);
        freeId++
        return res.sendStatus(201);
    };
    res.sendStatus(404);

    // in the body the system read only the name,use name always in condition
    // in rest write the object-it plays like the user write it in userinput
})


//!____________________________________________________________________________________________________________

app.delete("/comments/:id", (req, res) => {
    
    const paramsId = req.params.id;
    let findId = comments.findIndex((element) => element.id == paramsId);
    if (findId == -1) {
        console.log(findId);
        return res.sendStatus(404);
    }
    let deleted=comments.splice(findId,1);
    res.send(deleted);
    res.sendStatus(200);
})

//!____________________________________________________________________________________________________________

app.listen(PORT, function () {
    console.log(`the ports is listne on:${PORT}`);
});

//!____________________________________________________________________________________________________________
//!____________________________________________________________________________________________________________






// # 3 hashtag is for divede b/n the get/post


// # contect type is always jason, b/c we get most of the data on jason


// # in delete we always need the id to now what excatly we delete


// # pharams is to find the body on delete 
// # body - is for post 

//!___________________________________________________________________________________________________________________
//! before wrting the express and rest api
// 1. npm init -y :- creat json 
// 2. mpn i express:- update the express (express is framework that gibes in easy way on the base of nodeJs)
// 3. if the nodeJs is in src file then incommend file have write "cd src" only after that start the node on terminal

//! how to work with express and rest api 
//1. create express,difine port number
// 2. app.use(express.json()):- we have to use these underport b/c its for data and in data we work with json
// 3. creat rest file:- a.intstall rest on extenstion b.divide each crud with three hashtag(###),get "inside the link of the with rout"
// 4. 






























