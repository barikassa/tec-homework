
//! mongodb
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";
const objectId = mongodb.ObjectId;






function showTodos(req, res) {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log(err);
            throw err;
        }

        const dbo = db.db('jasonPlaceHolder');
        dbo.collection("todos").find({}).toArray(function (err, todos) {
            if (err) throw err
            res.send(todos);
            db.close();
        })

    })
}



function postData(req, res) {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log(err);
            throw err;
        }
        const dbo = db.db("jasonPlaceHolder");

        const userId = req.body.userId;
        const id = req.body.id;
        const title = req.body.title;
        const complited = req.body.complited;


        if (userId != undefined) {
            const userdata = { userId: userId, id: id, title: title, complited: complited }
            dbo.collection("todos").insertOne(userdata, (err, inserData) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(inserData);
            });
            console.log(dbo);
            return res.sendStatus(201);
        };

        res.sendStatus(404);
        db.close();
    })
}


function updateDataBs(req, res) {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("jasonPlaceHolder");
        const request=req.params.id;
        const update=req.body;
       
            dbo.collection("todos").updateOne({_id: objectId(request)}, {$set:update}, (err, docs) => {
                if (err) throw err;
                console.log(request);
                res.send(docs).Status(201);
            })
    })

}


function deleteDataBs(req,res){
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        const dbo = db.db("jasonPlaceHolder");
        const deleter=req.params.id;
        dbo.collection("todos").deleteOne({_id: objectId(deleter)},(err,doc)=>{
            if(err) throw err;
            res.send(doc);
        })

    })
}





module.exports = { postData, showTodos, updateDataBs, deleteDataBs };









