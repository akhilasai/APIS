const express = require('express');

const {createTable,addData,addMultipleData,updateData,deleteData,deleteManyData,getDataFromTable}=require("./creator")

const app = express();

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index')
// })
app.get("/:table_name/:id?", async (request, response) => {
    console.log("come")
    let tableName=request.params.table_name
    let id_val=parseInt(request.params.id)
    //   const users = await userModel.find({});
      getDataFromTable(tableName,id_val,request,response)
    
    });

app.post("/create_table/:add_table",async(req,res)=>{
    var table_name = req.params.add_table;
    createTable(table_name, req, res);
})

app.post("/create_user/:table_name",async(req,res)=>{
    let table_name=req.params.table_name;
    addData(table_name,req,res)
})

app.post("/create_many_user/:table_name",async(req,res)=>{
    let table_name=req.params.table_name;
    addMultipleData(table_name,req,res)
})

app.put("/update_user/:table_name/:id",async(req,res)=>{
    let table_name=req.params.table_name;
    let id=req.params.id;
    updateData(table_name,id,req,res)
})

app.delete("/delete_user/:table_name/:id",async(req,res)=>{
    let table_name=req.params.table_name;
    let id=req.params.id;
    deleteData(table_name,id,req,res)
})

app.delete("/delete_users/:table_name",async(req,res)=>{
    let table_name=req.params.table_name;
    let id=req.params.id;
    deleteManyData(table_name,req,res)
})




module.exports =app;  