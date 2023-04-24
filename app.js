const mongoose=require("mongoose");
const multer=require("multer");
require("./config");
const food=require("./food");
const express=require("express");
const { BulkOperationBase } = require("mongodb");
const app=express();
//const options = { timeout: 30000 };
//const bodyparser=require("body-parser");

app.use(express.json());


app.post("/create",async (req,res)=>{
  let data=new food(req.body);
  let result=await data.save();
  console.log(result);
  res.send(result);
});
  
app.get("/get",async(req,res)=>{
  let data=await food.find();
  res.send(data);
});

app.delete("/delete/:_id",async(req,res)=>{
  let data = await food.deleteOne(req.params);
  console.log(req.params);
  res.send(data);
  
});

app.put("/update/:_id",async(req,res)=>{
  let data=await food.updateOne(
    req.params,
    {
      $set:req.body
    }
  );
res.send(data);

});


app.get("/search/:key",async(req,res)=>{//search the data using name,id,price etc.
  let data=await food.find(
    {
    "$or":[
    {"fName":{ $regex:req.params.key}}
    ]
   
    
})
  console.log(req.params.key)
  res.send(data);
})








//upload file through api

// const upload=multer(
//   {
//     storage:multer.diskStorage({
//       destination:function(req,file,cb){
//         cb(null,uploads)
//       }
//     })
//   }
// )




app.post("/upload",(req,res)=>{
   
  res.send("done")
})






















// const { MongoClient } = require('mongodb');//using mongoclient connection
// //const port=process.env.PORT ||'3000'
// const url="mongodb://0.0.0.0:27017";
// const client=new MongoClient(url);

// const dbName="food";
// app.use(bodyparser.json());
// 

// async function getdata() {
//     // Use connect method to connect to the server
//    let result= await client.connect();
//     console.log('Connected successfully to server');
//      db = result.db(dbName);
//      collection=db.collection('food1');
//      let data=await collection.find({}).toArray();
//      console.log(data);
    
  
//   }
  
//   getdata()

//   .then(console.log)
//    .catch(console.error)
//   .finally(() => client.close());



//
  

// app.use(express.static("/public"));

// app.get("/",(req,res)=>{
//   console.log("data send by",req.query.name)
// res.send("helloworld");
// })





app.listen(3000,()=>{
    console.log("server started at port 3000");
})
