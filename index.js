const express=require('express');
const app=express();
let user=[{"name":"john",'email':"hello@gmai.com",'userName':"johny"},{"name":"vishnu",'emil':"vishnu.cse21@gmail.com",'userName':"hello"},{'name':'sooraj','email':'sooraj@gmail.com','username':'sooraj'}]
let p=[{"Product_name":"car","description":"A car is a vehicle used for travelling.","Pname":"BMW"}]

app.get('/users',function(req,res){

    res.json(user)

})
app.get('/car',function(req,res){
    res.json(p)
})

app.listen(5000,function(){
    console.log("listening on port 5000");
})
