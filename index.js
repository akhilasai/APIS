/**
 * Implementation of CURD Application using mongodb 
 * CURD includes create,update,read and delete operations. 
 * These file includes connection to mongodb Atlas.
 */

//Importing npm dependencies i.e  express,mongoose,router.
const express=require('express');
const mongoose=require('mongoose');
const router=require('./router');

const cors = require("cors")

//Intializing express to app varaible.
const app=express() 

//Enabling access to the body parameters.
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

//Storing url of mongodb Atlas.
const url = 'mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


//Connecting database using mongoose.
mongoose.connect(url,
    { 
      useNewUrlParser : true,
      useUnifiedTopology: true
    })
//checking we are connecting to database or not.
const con=mongoose.connection;
// con.on('open',function(){
//     console.log("Connection error")
// })
con.once("open", function () {
    console.log("Connected to Db successfully");
  });


app.use(router);

// Opening Port with 9000 port number.
app.listen(9000, function(){
    console.log("server started")
});

