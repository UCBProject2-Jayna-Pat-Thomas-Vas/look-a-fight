// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/authenitcated.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
      // If the user already has an account send them to the battle page
    if (req.user) {
        res.redirect("/battle")
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // account route loads account.html
  app.get("/account", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/account.html"));
  });

  // battle route loads battle.html
  app.get("/battle", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/battle.html"));
  });

  // choose-celeb route loads choose-celeb.html
  app.get("/choose-celeb", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/choose-celeb.html"));
  });
  // sign-up route loads sign-up.html
  app.get("/sign-up", function(req, res) {
      // After sign up send members to the choose-celeb page
        if (req.user) {
            res.redirect("/")
        }
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });
  // awards route loads awards.html
  app.get("/awards", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/awards.html"));
  });

  // Added authenticated.js middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });

};

