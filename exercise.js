const express =require("express");
const bodyParser=require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',function(req,res){
res.sendfile("index.html");
});
app.post('/user',function(req,res){

var user_name=req.body.user;
var password=req.body.password;
console.log("user name="+ user_name+",password is "+ password);
res.json({'status':'ok'})

});

app.listen(3000,function(){
  console.log('Servidor web escuchando en el puerto 3000');
});
