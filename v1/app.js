var express = require("express");
var app = express();
var bodyParser= require("body-parser");


app.use(bodyParser.urlencoded({extended :true}));
app.set("view engine","ejs")

var campgrounds=[
    {name:"salmon creek", image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png" },
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" },
    {name:"Mountain Goat", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" },
    {name:"salmon creek", image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png" },
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" },
    {name:"Mountain Goat", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" },
    {name:"salmon creek", image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png" },
    {name:"Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" },
    {name:"Mountain Goat", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" }


];

app.get("/" ,function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCampground ={name: name, image:image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs",{});
})

app.listen(5500 ,function(req,res){
    console.log("THE YELPCAMP SERVER HAS STARTED")
});