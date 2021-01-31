var express=require("express")
var app=express();

const MongoClient=require('mongodb').MongoClient
const url='mongodb://127.0.0.1:27017'
const dbName='hospitalin'

let db
MongoClient.connect(url,{useUnifiedTopology: true,useNewUrlParser:true},(err,client)=>{
    if(err)return console.log(err);
    db=client.db(dbName);
    console.log(`connected :${url}`);
    console.log(`database  ${dbName}`)
})
app.get('/',(req,res)=>{
    console.log("getting things ready");
    const data=db.collection("col").find().toArray().then(result => res.json(result));
});
app.listen(9000,(req,res)=>{
    console.log("working well");
});
