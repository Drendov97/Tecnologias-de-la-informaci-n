const express =  require("express");
const bodyParser = require("body-parser");
var app = express();
const archivos = require('fs');



//DB Handler
var db = {

  initDB: function (){
    
    var fs=require("fs");
    var contents = fs.readFileSync("./DatosFB.json");
    this.DatosFB=JSON.parse(contents);
  },

  saveDatos: function() {
    archivos.writeFileSync('DatosFB.json', JSON.stringify(this.DatosFB),

    function(error) {
      if(error){
        console.log('Hubo un error al escribir en el archivo')
        console.log(error);
      }
    });
    
  }

}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("index.html" );
  });

  

 
/*
  FB.api(
    '/me',
    'GET',
    {"fields":"id,name,email,birthday,location"},
    function(response) {
        // Insert your code here
    }
  );

  FB.api(
    '/me',
    'POST',
    {"fields":"id,name,email,birthday,location"},
    function(response) {
        // Insert your code here
    }
  );
  */

  app.listen(3000,function(){
  console.log("Started on PORT 3000");
})