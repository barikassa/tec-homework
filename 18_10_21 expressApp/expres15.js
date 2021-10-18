const express = require("express");
const app = express();
const path = require("path");
const PORT = 8070;

app.get('/', function (req, res) {
    indexFile = path.join(__dirname, "server1.5", "index.html");
    res.sendFile(indexFile)

})
app.listen(PORT);


// -------------------------------------------------------about-------------------------------------------------

app.get('/about', function (req, res) {
    const aboutFile = path.join(__dirname, "server1.5", "about.html")
    res.sendFile(aboutFile)
})

//-----------------------------------------------------------1.57--------------------------------------------
//--------------- corses--------------------------

app.get('/courses', function (req, res) {
    const coursesFile = path.join(__dirname, "server1.5", "courses.html")
    res.sendFile(coursesFile);
})


// ------------------mentoring----------------------------------------------------------------
app.get('/mentoring', function (req, res) {
    const mentoringFile = path.join(__dirname, "server1.5", "mentoring.html");
    res.sendFile(mentoringFile);
})

//!------------------------------------------eror---------------------------------------------------

app.get('*', function (req, res) {
    const erorFile1 = path.join(__dirname, "eror.html");
    res.sendFile(erorFile1);

})






















