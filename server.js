// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var passport = require("./config/passport.js");

// Express App
var app = express();
var PORT = process.env.PORT || 5000	;

//get the body of the response in json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static(path.join(__dirname, "public")));

// Uses sessions to keep track of our user's login status
app.use(session({ secret: "cats", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/celebrity-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/game-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// display home page
app.get('/', function(req, res){
	res.send('./public/index.html');
});

// import models
var models = require('./models');

//Sync Database and start server
models.sequelize.sync().then(function() {
	console.log('Database is synced.');
	app.listen(process.env.PORT || 5000, function(err) { 
    	if (!err)
        	console.log("Site is live");
    	else console.log(err);
 	});
}).catch(function(err){
	console.log(err, "Error with db operation.");
});