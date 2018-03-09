var db = require("../models");
var passport = require("../config/passport.js");

// Routes

module.exports = function(app) {

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(User) {
      // We have access to the users as an argument inside of the callback function
      res.json(User);
    });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table.
    db.User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function(User) {
      // We have access to the new user as an argument inside of the callback function
      res.json(User);
    });
  });

  // DELETE route for deleting users. We can get the id of the user to be deleted from
  // req.params.id
  app.delete("/api/users/:id", function(req, res) {
    // We just have to specify which user we want to destroy with "where"
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(User) {
      res.json(User);
    });
  });

  // PUT route for updating users. We can get the updated user data from req.body
  app.put("/api/users", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(User) {
      res.json(User);
    });
  });

  // Using the passport.authenticate middleware with local strategy.
  // If the user has valid login credentials, send them to the battle page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
 
    res.json("/battle");
  });

  // Route for signing up a user. If the user is created successfully, proceed to log the user in,
  // otherwise send error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function(User) {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id (no password)
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


};