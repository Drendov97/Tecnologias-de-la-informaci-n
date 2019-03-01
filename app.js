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

  
  app.post('/facebook-search/:id', (req, res) => {

    db.initDB();
    var user = req.body;
    console.log("Objeto recibido");

    console.log(user);

    // you need permission for most of these fields
    const userFieldSet = 'id, name,email, birthday,location ';
  
    const options = {
      method: 'POST',
      uri: `https://graph.facebook.com/v3.2/${req.params.id}`,
      qs: {
        access_token: user_access_token,
        fields: userFieldSet
      }
    };
    request(options)
      .then(fbRes => {
        res.json(fbRes);
      })

      db.DatosFB.push(fbRes);
      db.saveDatos();
      res.json({'status' : 'OK'});
  })
 
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