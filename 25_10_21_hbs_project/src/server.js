const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080,
  publicPath = path.join(__dirname, "..", "public");

// --- hbs stuff
const hbs = require("hbs"),
  viewsPath = path.join(__dirname, "..", "templates","views"),
  partialsPath = path.join(__dirname, "..", "templates","partials");
app.set("view engine", "hbs");
// --- use non default name , here use templates directory
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// --- serve static html\css\js\image files
app.use(express.static(publicPath));


app.get("/", (req, res) => {
  // --- serve index.hbs from views directory (templates in this case)
  res.render("index");
});

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










app.get("/about", (req, res) => {
  // --- serve support.hbs from views directory (templates in this case)
  res.render("about");
});


app.get("/help", (req, res) => {
  // --- serve help.hbs from views directory (templates in this case)
  res.render("help", { somekey: "some dynamic value" });
});

app.get("*", (req, res) => {
  res.render("error", { somekey: "some dynamic value" });
})

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
