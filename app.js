var express= require("express");
var path= require("path");

var app= express();
app.use(express.static(path.join(__dirname,"/public")))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.listen(3002, function () {
    console.log("Servidor corriendo");
});