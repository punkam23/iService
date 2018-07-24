var express = require("express"),
    app = express(),
    bodyParser = require("body-parser")

    app.set("view engine","ejs");
    app.use(express.static("public"));   
    app.use(bodyParser.urlencoded({extended:true}));


    app.get("/",function(req,res){
        res.render("home");
    })

    app.listen(3000,function(){
        console.log('app running on port 3000');
    })