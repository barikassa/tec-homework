
const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

const publicFile = path.join(__dirname, "public");
app.use(express.static(publicFile));


app.get("/city", function (req, res) {
  const cityForApi = req.query.city;
  let APIKEY = "9b2010e7261fe1ae9b9a51f9647b5e73";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityForApi}&appid=${APIKEY}`
  const axios = require("axios");


  axios.get(url)
    .then(function (respond) {
      res.send(`<h1>lon:${respond.data.coord.lon}<br>lat:${respond.data.coord.lat}<br>city:${respond.data.name}</h1>`);
      console.log('================', respond.data);
    })
    .catch(function (err) {
      console.log('err');
    })   
});


app.get("/aboutMe", function (req, res) {
  console.log(req.query);
  res.send("you send");
  res.sendFile(path.join(publicFile, "aboutMe.html"))
});


app.get("/help", function (req, res) {
  res.sendFile(path.join(publicFile, "help.html"));
  console.log(req.query);
})


app.get("*", (req, res) => {
  res.sendFile(path.join(publicFile, "eror.html"))
})


app.listen(PORT);




















