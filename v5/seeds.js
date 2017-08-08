var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm3.staticflickr.com/2512/3720093491_e32ca6c390.jpg",
        description: "Occupy af fashion axe raclette, forage chartreuse tattooed cray hexagon narwhal portland pug kogi. Next level quinoa synth pitchfork post-ironic lo-fi truffaut. Vape cardigan polaroid, fam try-hard selvage small batch banjo poke pug migas poutine keffiyeh distillery. Sriracha kinfolk try-hard whatever cray raclette scenester brooklyn butcher pok pok locavore la croix cred hashtag. Post-ironic tumblr cornhole yr unicorn hot chicken synth. Celiac bushwick sriracha raw denim meggings disrupt 8-bit PBR&B williamsburg polaroid. Live-edge gastropub williamsburg celiac lomo tumblr. Shabby chic whatever affogato, church-key everyday carry pitchfork chillwave jianbing iceland quinoa subway tile. Aesthetic affogato pok pok, bushwick intelligentsia kombucha marfa pour-over fashion axe squid banjo gluten-free skateboard gastropub. Celiac kogi tattooed crucifix pitchfork, blue bottle microdosing VHS. Offal raclette iPhone try-hard truffaut master cleanse +1. Offal art party hexagon cold-pressed vape meh. Helvetica artisan crucifix snackwave chia vexillologist sriracha try-hard tote bag paleo whatever pork belly cred master cleanse shabby chic. Trust fund viral jean shorts ugh cornhole, drinking vinegar woke hashtag typewriter cliche dreamcatcher la croix. Church-key lo-fi normcore synth mixtape."
    },
    {
        name: "Cruise Camp", 
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "Occupy af fashion axe raclette, forage chartreuse tattooed cray hexagon narwhal portland pug kogi. Next level quinoa synth pitchfork post-ironic lo-fi truffaut. Vape cardigan polaroid, fam try-hard selvage small batch banjo poke pug migas poutine keffiyeh distillery. Sriracha kinfolk try-hard whatever cray raclette scenester brooklyn butcher pok pok locavore la croix cred hashtag. Post-ironic tumblr cornhole yr unicorn hot chicken synth. Celiac bushwick sriracha raw denim meggings disrupt 8-bit PBR&B williamsburg polaroid. Live-edge gastropub williamsburg celiac lomo tumblr. Shabby chic whatever affogato, church-key everyday carry pitchfork chillwave jianbing iceland quinoa subway tile. Aesthetic affogato pok pok, bushwick intelligentsia kombucha marfa pour-over fashion axe squid banjo gluten-free skateboard gastropub. Celiac kogi tattooed crucifix pitchfork, blue bottle microdosing VHS. Offal raclette iPhone try-hard truffaut master cleanse +1. Offal art party hexagon cold-pressed vape meh. Helvetica artisan crucifix snackwave chia vexillologist sriracha try-hard tote bag paleo whatever pork belly cred master cleanse shabby chic. Trust fund viral jean shorts ugh cornhole, drinking vinegar woke hashtag typewriter cliche dreamcatcher la croix. Church-key lo-fi normcore synth mixtape."
    },
    {
        name: "Tree's Galore", 
        image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "Occupy af fashion axe raclette, forage chartreuse tattooed cray hexagon narwhal portland pug kogi. Next level quinoa synth pitchfork post-ironic lo-fi truffaut. Vape cardigan polaroid, fam try-hard selvage small batch banjo poke pug migas poutine keffiyeh distillery. Sriracha kinfolk try-hard whatever cray raclette scenester brooklyn butcher pok pok locavore la croix cred hashtag. Post-ironic tumblr cornhole yr unicorn hot chicken synth. Celiac bushwick sriracha raw denim meggings disrupt 8-bit PBR&B williamsburg polaroid. Live-edge gastropub williamsburg celiac lomo tumblr. Shabby chic whatever affogato, church-key everyday carry pitchfork chillwave jianbing iceland quinoa subway tile. Aesthetic affogato pok pok, bushwick intelligentsia kombucha marfa pour-over fashion axe squid banjo gluten-free skateboard gastropub. Celiac kogi tattooed crucifix pitchfork, blue bottle microdosing VHS. Offal raclette iPhone try-hard truffaut master cleanse +1. Offal art party hexagon cold-pressed vape meh. Helvetica artisan crucifix snackwave chia vexillologist sriracha try-hard tote bag paleo whatever pork belly cred master cleanse shabby chic. Trust fund viral jean shorts ugh cornhole, drinking vinegar woke hashtag typewriter cliche dreamcatcher la croix. Church-key lo-fi normcore synth mixtape."
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

