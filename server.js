
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Express App
var app = express();
var PORT = process.env.PORT || 8080	;

//get the body of the response in json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static(path.join(__dirname, "public")));

// Routes
require("./routes/celebrity-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/game-api-routes.js")(app);

// display home page
app.get('/', function(req, res){
	res.send('./public/index.html');
});

// import models
var models = require('./models');

//Sync Database and start server
models.sequelize.sync().then(function() {
	console.log('Database is all good.');
	app.listen(8080, function(err) { 
    	if (!err)
        	console.log("Site is live");
    	else console.log(err);
 	});
}).catch(function(err){
	console.log(err, "Something went wrong with db operation.");
});