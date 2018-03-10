// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
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
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });
  // awards route loads awards.html
  app.get("/awards", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/awards.html"));
  });

};
