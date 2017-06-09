// CREACION DE SERVIDOR
var express = require("express");
var app = express();

app.use(express.static(__dirname +"/public/"));


// app.get("/kary", function(req,res){ //peticion a la pagina principal
//   res.send("¡Quiero helado!");
// });

app.listen(3000, function() {
  console.log("Servidor 3000")
});
