var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Campground  = require('./models/campground');
    
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true}); //creates YelpCamp db inside of MongoDB
app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs");

// SCHEMA SETUP


// Campground.create(
//     {
//         name: "Mountain Goat's Rest", 
//         image: "https://farm6.staticflickr.com/5472/9172530058_c22dab3b18.jpg",
//         description: "This is a huge mountain, with a lot of goats. No dogs allowed. Beware of goats."
//     },
//         function(err, campground){
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log("NEWLY CREATED CAMPGROUND: ");
//                 console.log(campground);
//             }
//         });

app.get("/", function(req, res){
    res.render("landing");
});


//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from db and then render file
    Campground.find({}, function(err, allCampgrounds){
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - add new campground to db
app.post("/campgrounds", function(req, res){
    //get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    //add to campgrounds array
    var newCampground = {name: name, image: image, description: desc}
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err) {
            console.log(err);
        } else {
            //redirect back to campgrounds page, the GET route
            res.redirect("/campgrounds"); //when we do a redirect the default is to redirect to a GET request, despite having two /campground routes
        }
    });
});


//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started..")
});


//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});