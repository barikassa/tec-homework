console.log("app is loading");
const functionJs=require("./functionsaver");

const express=require("express"),
app=express(),
PORT=8080;

const path=require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","public")));

const ProductRoute="/products";

//!creat documents and collections
// collection already created
// functionJs.createProductCollection(); 
// insert the list of procts already done

// functionJs.insertProductsData(); 

app.get(ProductRoute,(req,res)=>{
    functionJs.getProducts(req,res);
})

app.post(ProductRoute,(req,res)=>{
    functionJs.addProduct(req,res);
})


app.patch(`${ProductRoute}/:id`,(req,res)=>{
    functionJs.updateByMongoId(req,res);
})

app.delete(`${ProductRoute}/:id`,(req,res)=>{
    functionJs.deleteProdducts(req,res);
})

// ----------------------------------------------------------------------------------------------------------
//! contacts
app.get("/contact",(req,res)=>{
    functionJs.getSubscribeList(req,res);
});

app.post("/contact",(req,res)=>{
    functionJs.addContactData(req,res);
})

// ----------------------------------------------------------------------------------------------------------------
//! cart poducts
app.get("/cart",(req,res)=>{
    functionJs.gerCartProducts(req,res);
});

app.post("/cart",(req,res)=>{
    functionJs.addProductOnCart(req,res);
})

app.patch("/cart",(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log(`litening on port:${PORT}`);
});
















































