const express =require("express");
const bodyParser =require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendFile(path.resolve('jquery/index2.html')); //cambiar
});

app.post('/user',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("user name= "+user_name+", password is "+password);
    res.json({'status': OK});
});
app.listen(3040,function(){
    console.log("Started on Port 3040");
});
