const express =  require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("index.html" );
  });

  app.listen(3000,function(){
  console.log("Started on PORT 3000");
})