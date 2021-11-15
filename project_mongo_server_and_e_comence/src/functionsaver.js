const mongodb = require("mongodb"),
  mongoUrl = "mongodb://localhost:27017/",
  MongoClient = mongodb.MongoClient,
  mongoDoc = "e-commerce",
  collectionName = "products";

// chnage from string to momgo id
const objectId = mongodb.ObjectId;

// !functions to create collection and inserts/ only for one time perpose;
function createProductCollection() {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    dbo.createCollection("cart", (err, col) => {
      if (err) throw err;
      console.log("collection created", col);
    });
  });
}

function insertProductsData() {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const cartProducts = "it was a list of cart here";
    dbo.collection("cart").insertMany(cartProducts, (err, doc) => {
      if (err) throw err;
      console.log("list of products:", doc);
    });
  });
}

function getProducts(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionName)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}

// make sure later to delete the unwanted added object after id=80.
function addProduct(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const newProduct = req.body;
    const dbo = db.db(mongoDoc);
    dbo.collection(collectionName).insertOne(newProduct, (err, postedObj) => {
      if (err) throw err;
      console.log(postedObj);
    });
    // res.send(postedObj);
  });
}

function updateByMongoId(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const id = req.params.id;
    const objById = { _id: objectId(id) };
    console.log(objById);

    dbo
      .collection(collectionName)
      .findOneAndUpdate(objById, { $set: req.body }, (err, updatedObj) => {
        if (err) throw err;
        res.send(updatedObj);
      });
  });
}

function deleteProdducts(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const id = req.params.id;
    const objById = { _id: objectId(id) };

    dbo
      .collection(collectionName)
      .findOneAndDelete(objById, (err, deletedObj) => {
        if (err) throw err;
        console.log(deletedObj);
        res.send(deletedObj);
      });
  });
}

// ----------------------------------------------------------------------------------------------------------------------
//! function to subscribe form

function getSubscribeList(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection("clientListData")
      .find({})
      .toArray((err, clientData) => {
        if (err) throw err;
        console.log(clientData);
        res.send(clientData);
      });
  });
}

function addContactData(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    dbo = db.db(mongoDoc);
    const contactObj = req.body;
    dbo.collection("clientListData").insertOne(contactObj, (err, addObj) => {
      if (err) throw err;
      console.log(addObj);
    });
  });
}

// -------------------------------------------------------------------------------------------------------------------------------------------------
//!cart function

function gerCartProducts(rq, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection("cart")
      .find({})
      .toArray((err, cartProducts) => {
        if (err) throw err;
        console.log(cartProducts);
        res.send(cartProducts);
      });
  });
}

function addProductOnCart(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const newCart = req.body;
    const dbo = db.db(mongoDoc);
    dbo.collection("cart").insertOne(newCart,(err,cartProduct)=>{
      if(err) throw err;
      console.log(cartProduct);
    })
  });
}



module.exports = {
  getProducts,
  addProduct,
  updateByMongoId,
  deleteProdducts,
  getSubscribeList,
  addContactData,
  gerCartProducts,
  addProductOnCart
};
