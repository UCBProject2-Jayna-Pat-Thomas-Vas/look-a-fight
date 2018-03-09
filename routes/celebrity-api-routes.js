var db = require("../models");

module.exports = function(app) {
  app.get("/api/Celebrity", function(req, res) {
    db.Celebrity.findAll({
    }).then(function(dbCelebrity) {
      res.json(dbCelebrity);
    });
  });

  app.get("/api/Celebrity/:id", function(req, res) {
    db.Celebrity.findOne({
      where: {
        id: req.params.id
      },
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
