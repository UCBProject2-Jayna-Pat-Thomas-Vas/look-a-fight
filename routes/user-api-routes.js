var db = require("../models");

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

};
