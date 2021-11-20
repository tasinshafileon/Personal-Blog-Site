const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const homeStartingContent = "Hello! I am Tasin Shafi Leon. This is my Daily Journal blogpost where I try to record my daily activities or random productive and creative thoughts. I hope my blogpost will reflect my thought process and ideologies. I also thank you for taking your time to come and read my blogposts to learn and know about me more.";

const aboutStartingContent = "Greetings! I am Tasin Shafi Leon, a developer who graduated from BRAC University. I am a Bachelor of Science graduate whose focus was Computer Science. Apart from development I am also interested in Management as well as Coordinating. As for my hobby, I enjoy listening to music, playing games, read books and also love to play sports such as cricket, football, badminton and etc."

const contactStartingContent = "Hey there! In order to contact me you can mail me at ";

const pageItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.render("index", {
    pageTitle: "Home",
    startingTitle: "Home",
    items: pageItems,
    startingContent: homeStartingContent
  });
});

app.get("/about", function(req, res) {
  res.render("about", {
    pageTitle: "About",
    startingTitle: "About",
    startingContent: aboutStartingContent
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    pageTitle: "Contact",
    startingTitle: "Contact",
    startingContent: contactStartingContent,
    email: "leontasinshafi@gmail.com"
  });
});

app.get("/compose", function(req, res) {
  res.render("compose", {
    pageTitle: "Compose",
    startingTitle: "Compose",
  });
});

app.post("/compose", function(req, res){
  pageItems.push({
    title: req.body.title,
    content: req.body.content
  });
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server running on Process defined environment port or localhost:3000");
});
