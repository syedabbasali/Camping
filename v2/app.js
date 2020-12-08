var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

mongoose.connect('mongodb://localhost:27017/YelpCamp', {useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended :true}));
app.set("view engine","ejs")


//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    
    
});

var Campground = mongoose.model("Campground",campgroundSchema);

// Campground.create(
//     {
//         name:"Granite Hill", 
//         image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg",
//         description:"this is a huge grainte hill . no bathrooms . no water.Beautiful granite"

// },function(err , campground){
//     if(err){
//     console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:");
//         console.log("campground");
//     }
// });


    app.get("/" ,function(req,res){
    res.render("landing");
    });


    // INDEX - show all campgrounds
    app.get("/campgrounds",function(req,res){
    // Get all the campgrounds from dbs
    Campground.find({}, function(err,allcampgrounds) {
        if(err){
            console.log(err);
        }else{
              res.render("index",{campgrounds:allcampgrounds});
        }
        
    });
    // res.render("campgrounds",{campgrounds:campgrounds});
    })

    //CREATE - add new campgrounds to database
    app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var description=req.body.description;
    // var video=req.body.video;
    var newCampground ={name: name, image:image ,description:description}

    // create a new campground and save it to the db 
    Campground.create(newCampground,function (err,newlyCreated){
    if (err){
       console.log("err");
   }else{
       res.redirect("/campgrounds");
        }
    });
   });


  //NEW - show form to create new campgrounds    
    app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs",{});
    })


    // SHOW - shows more info about one campground
    app.get("/campgrounds/:id",function (req , res){
        Campground.findById(req.params.id,function (err ,foundCampground){
            
            if (err){
                console.log("err");
            }else{
                res.render("show",{campground:foundCampground}) ;
                 }
             });

            
        });
      
    
        
 

    app.listen(5500 ,function(req,res){
    console.log("THE YELPCAMP SERVER HAS STARTED")
    });