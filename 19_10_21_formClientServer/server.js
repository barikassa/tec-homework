

//!3.1------------------------------------------------------express-pre----------------------------------------------------------
// __dirname is the path that shows from the root file to existing file(current file). 

// !3.2 ----------------------------------------------------------express-pre----------------------------------------
// path.join:- used for to connect the __dirname(file), existingfile(public).in another words it make global and local path the same.

// !3.3--------------------------------------------------------express-pre---------------------------------------------

const express = require("express");
const path = require("path"), app = express() , PORT = 8080;
const publicPath = path.join(__dirname, "public1");

// loads index.html when route is /
// loads help.html when route is /help.html
// loads support.html when route is /support.html
app.use( express.static(publicPath));


app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});

//a:- the file that display on the web browser is an index.html document from the public file.
// b:-depends on the request.if the client write the URL and web server gives the answer depends on the request. 
// example for b:-_dirname and the file public will show the path, the path.join make connection with global and local path,the web server depends on the req, will response through express/static express
// c:- 1. close the VS code, 2.change the name of the file on the computer, 3. make sure to path.join on the new file name 4.install express and "the world is yours"
// d: the same thing as the image example

//!3.4-----------------------------------------express-pre----------------------------------------------------------------------
// if the server is not in the  localhost,it will be different server or eror.

//!3.5-----------------------------------------express-pre----------------------------------------------------------
// in express we difine it but in static express, its outomated!














