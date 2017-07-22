var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Sinnemahoning", image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg"},
        {name: "Salmon Creek", image: "https://farm7.staticflickr.com/6082/6142484013_74e3f473b9.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5472/9172530058_c22dab3b18.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form
    var name = req.body.name;
    var image = req.body.image;
    //add to campgrounds array
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page, the GET route
    res.redirect("/campgrounds"); //when we do a redirect the default is to redirect to a GET request, despite having two /campground routes
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started..")
});