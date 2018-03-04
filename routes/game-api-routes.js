var db = require("../models");

module.exports = function(app) {
  app.get("/api/Game", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Game.findAll({
      // include: [db.Post]
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.get("/api/Game/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Game.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Post]
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.post("/api/Game", function(req, res) {
    db.Game.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.put("/api/Game/:id", function(req, res) {
    db.Game.put({
      where: {
        id: req.params.id
      }
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

};
