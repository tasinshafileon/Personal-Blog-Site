const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const homeStartingContent = "Hello! I am Tasin Shafi Leon. This is my Daily Journal blogpost where I try to record my daily activities or random productive and creative thoughts. I hope my blogpost will reflect my thought process and ideologies. I also thank you for taking your time to come and read my blogposts to learn and know about me more.";

const pageItems = [{
  title: "Day 1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat ante ut massa pretium, at suscipit nibh sodales. Duis sed lacinia lacus, in pulvinar ante. Etiam facilisis semper semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse velit mauris, imperdiet eget nunc a, lobortis luctus massa. Proin nec augue vel orci sollicitudin gravida. Quisque felis ligula, suscipit at tellus at, porttitor dictum libero. Quisque sollicitudin sodales odio ac pharetra. Quisque auctor erat ut finibus rhoncus. In gravida malesuada lacus, id finibus urna consectetur a."
}, {
  title: "Day 2",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat ante ut massa pretium, at suscipit nibh sodales. Duis sed lacinia lacus, in pulvinar ante. Etiam facilisis semper semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse velit mauris, imperdiet eget nunc a, lobortis luctus massa. Proin nec augue vel orci sollicitudin gravida. Quisque felis ligula, suscipit at tellus at, porttitor dictum libero. Quisque sollicitudin sodales odio ac pharetra. Quisque auctor erat ut finibus rhoncus. In gravida malesuada lacus, id finibus urna consectetur a."
}, {
  title: "Day 3",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat ante ut massa pretium, at suscipit nibh sodales. Duis sed lacinia lacus, in pulvinar ante. Etiam facilisis semper semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse velit mauris, imperdiet eget nunc a, lobortis luctus massa. Proin nec augue vel orci sollicitudin gravida. Quisque felis ligula, suscipit at tellus at, porttitor dictum libero. Quisque sollicitudin sodales odio ac pharetra. Quisque auctor erat ut finibus rhoncus. In gravida malesuada lacus, id finibus urna consectetur a."
}, {
  title: "Day 4",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat ante ut massa pretium, at suscipit nibh sodales. Duis sed lacinia lacus, in pulvinar ante. Etiam facilisis semper semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse velit mauris, imperdiet eget nunc a, lobortis luctus massa. Proin nec augue vel orci sollicitudin gravida. Quisque felis ligula, suscipit at tellus at, porttitor dictum libero. Quisque sollicitudin sodales odio ac pharetra. Quisque auctor erat ut finibus rhoncus. In gravida malesuada lacus, id finibus urna consectetur a."
}];

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  res.render("index", {
    pageTitle: "Home",
    items: pageItems,
    startingContent: homeStartingContent
  })
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server running on Process defined environment port or localhost:3000");
});
