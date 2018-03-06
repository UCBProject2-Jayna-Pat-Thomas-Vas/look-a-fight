// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080	;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static(path.join(__dirname, "public")));

// Routes
// =============================================================
// require("./routes/celebrity-api-routes.js")(app);
// require("./routes/user-api-routes.js")(app);
// require("./routes/game-api-routes.js")(app);

app.get('/', function(req, res){
	res.send('index.html');
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
