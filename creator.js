/**
 * Implementing the methods of curd Application.
 * we are creating,inserting,
 */
const mongoose = require('mongoose')
var MongoClient=require('mongodb').MongoClient;

const getDataFromTable = async(table_name,id_val,request,response)=>{
    var url = "mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
     await MongoClient.connect(url, async function(err, data) { 
        if (err){
            response.status(500)
        }else{
            var db = data.db("myFirstDatabase");
            if(id_val){
                let data = await db.collection(table_name).findOne({id:id_val})
                
                    if(data!==null){ 
                        response.status(200).send(data)
                    }else{
                        response.status(404).send("No data available")
                    }
                
            }   else{
                await db.collection(table_name).find({}).toArray(function(err, result) {
                    console.log(result)
                if (err) response.status(403).send(err)
                else{
                    response.status(200).send(result)
                }
           
              });
            }
            
           
        }
        data.close();
    })
}

const createTable = async(table_name,req,res)=>{
    // console.log("enter.......................")
    var url="mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 
    await MongoClient.connect(url,function(err,data){
        if(err) 
        {
            res
                .status(500)
                .send(err)
        }
        else
        {
            // console.log("create .......................")
            var dbase=data.db("myFirstDatabase")
            dbase.createCollection(table_name,function(err,response){
                if(err)
                {
                    res
                        .status(403)
                        .send("Table already exsits.")
                }
                else
                {
                    res
                        .status(201)
                        .send("Collection Created.")
                }
                data.close()
            })
        }
    })
}

const addData = async(table_name,request,response)=>{
    let dataBody = request.body;
    var url = "mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
     await MongoClient.connect(url, async function(err, data) { 
        if (err){
            console.log(err)
            response.status(500)
        }else{
            
            var db = data.db("myFirstDatabase");
            await db.collection(table_name).insertOne(dataBody, function(err, res) {  
            if (err){
                console.log("Err -> " +err)
                response.status(403).send(err)
            }
            else{
                console.log(res)
                response.status(201).send("data created")
            }
            });
        }
        data.close();
    })
}

const addMultipleData = async(table_name,request,response)=>{
    let dataBody = request.body;
    var url = "mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
     await MongoClient.connect(url, async function(err, data) { 
        if (err){
            console.log(err)
            response.status(500)
        }else{
            
            var db = data.db("myFirstDatabase");
            await db.collection(table_name).insertMany(dataBody, function(err, res) {  
            if (err){
                console.log("Err -> " +err)
                response.status(403).send(err)
            }
            else{
                console.log(res)
                response.status(201).send("data created")
            }
            });
        }
        data.close();
    })
}

const updateData = async(table_name,idVal,request,response)=>{
    let dataBody=request.body;
    console.log(dataBody);
    var url = "mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await MongoClient.connect(url,async function(err,data){
        if(err) {
            response.status(500).send(err);
        }
        else{
            var db=data.db("myFirstDatabase");
            let query={ id: parseInt(idVal) };
            console.log(query);
            let values={ $set: dataBody }; 
            console.log(values)
            await db.collection(table_name).updateOne(query, values, function(err,result){
                if (err) response.status(403).send(err)
                else{
                    console.log(result)
                    response.status(201).send(result.modifiedCount +" document updated")
                }
            })
        }
    })

}

const deleteData = async(table_name,idVal,request,response)=> {
    let dataBody=request.body;
    console.log(dataBody);
    var url = "mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await MongoClient.connect(url,async function(err,data){
        if(err) {
            response.status(500).send(err);
        }
        else{
            var db=data.db("myFirstDatabase");
            let query={ id: parseInt(idVal) };
            console.log(query);
            let values={ $set: dataBody }; 
            console.log(values)
            await db.collection(table_name).deleteOne(query, values, function(err,result){
                if (err) response.status(403).send(err)
                else{
                    console.log(result)
                    response.status(201).send(result.deletedCount +" document updated")
                }
            })
        }
    })
}

const deleteManyData = async(table_name,request,response)=>{
    let dataBody=request.body;
    console.log(dataBody);
    var url = "mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await MongoClient.connect(url,async function(err,data){
        if(err) {
            response.status(500).send(err);
        }
        else{
            var db=data.db("myFirstDatabase");
            // let query={ id: parseInt(idVal) };
            // console.log(query);
            // let values={ $set: dataBody }; 
            // console.log(values)
            await db.collection(table_name).drop(function(err,result){
                if (err) response.status(403).send(err)
                else{
                    console.log(result)
                    response.status(201).send("collection deleted")
                }
            })
        }
    })
}

module.exports={
    getDataFromTable,
    createTable,
    addData,
    addMultipleData,
    updateData,
    deleteData,
    deleteManyData
}