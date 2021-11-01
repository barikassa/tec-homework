const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db)=>{
if(err){
    console.log(err);
}
const dbo=db.db("HomeWorkAuthor");
console.log("its working");

//! create collecion
// creatCollectionMongoDb(dbo,"authors");

//! create object
const obj1 = { articles: "teck story", author: "aschalen", dataAdd: "12/10/20", dateUpdate: "23/1/21" };

// getObjFromCollection(dbo,"authors",obj1)

})


//!creating collection
function creatCollectionMongoDb(dbHW,collect){
    dbHW.createCollection(collect,(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(collect);
        console.log("collection created");
    });
}

function getObjFromCollection(dbHW,collect,obj){
    dbHW.collection(collect).insertOne(obj,(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
    })
}






















