var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Sinnemahoning", image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg"},
        {name: "Salmon Creek", image: "https://farm7.staticflickr.com/6082/6142484013_74e3f473b9.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5472/9172530058_c22dab3b18.jpg"}
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started..")
});