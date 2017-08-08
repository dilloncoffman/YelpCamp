var mongoose =require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, //embedding an ID or ref to comments
            ref: "Comment" 
        }
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema);