var db = require("../models");

module.exports = function(app) {
  app.get("/api/Celebrity", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Celebrity.findAll({
      include: [db.Post]
    }).then(function(dbCelebrity) {
      res.json(dbCelebrity);
    });
  });

  app.get("/api/Celebrity/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Celebrity.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbCelebrity) {
      res.json(dbCelebrity);
    });
  });

  app.post("/api/Celebrity", function(req, res) {
    db.Celebrity.create(req.body).then(function(dbCelebrity) {
      res.json(dbCelebrity);
    });
  });

  app.put("/api/Celebrity/:id", function(req, res) {
    db.Celebrity.put({
      where: {
        id: req.params.id
      }
    }).then(function(dbCelebrity) {
      res.json(dbCelebrity);
    });
  });

};
