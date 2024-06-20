// Import the Express module
const express = require("express");
const mongoose = require("mongoose");
// Route 
const Allroute = require('./routes/SpecificRoute');
const AddUserRoute = require('./routes/AddUserRoute');
// Create an instance of an Express application
const app = express();




// Method override
var methodOverride = require("method-override");
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(express.static("public"));
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.use(Allroute);
app.use(AddUserRoute);

// Define the port number
const PORT = process.env.PORT || 3001;


mongoose.connect(
    // "mongodb+srv://youssefDEV:cljEcDR6tpcMDSoM@cluster0.ccpqlf1.mongodb.net/allArticles?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb://youssefDEV:cljEcDR6tpcMDSoM@ac-gnaidkd-shard-00-00.ccpqlf1.mongodb.net:27017,ac-gnaidkd-shard-00-01.ccpqlf1.mongodb.net:27017,ac-gnaidkd-shard-00-02.ccpqlf1.mongodb.net:27017/?ssl=true&replicaSet=atlas-vc477s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    // Start the server and listen on the defined port
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


// Auto Refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
const { render } = require("ejs");
app.use(connectLivereload);
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


