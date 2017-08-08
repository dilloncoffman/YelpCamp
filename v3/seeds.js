var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm3.staticflickr.com/2512/3720093491_e32ca6c390.jpg",
        description: "Blah blah blah"
    },
    {
        name: "Cruise Camp", 
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "Blah blah blah"
    },
    {
        name: "Tree's Galore", 
        image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "Blah blah blah"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds!");
        //Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground!");
                    //Create a comment
                    Comment.create(
                        {
                            text: "This place is awesome, but I wish there was internet!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();  
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;

