module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    ID: {type: Sequelize.INTEGER, autoincrement: true},
    Player1ID: {type: Sequelize.INTEGER, allowNull: false},
    Player2ID: {type: Sequelize.INTEGER, allowNull: false},
    Celebrity1ID: {type: Sequelize.INTEGER, allowNull: false},
    Celebrity2ID: {type: Sequelize.INTEGER, allowNull: false},
    WinningPlayerID: {type: Sequelize.INTEGER, allowNull: false},
    WinningCelebrityID: {type: Sequelize.INTEGER, allowNull: false},
  });

  Game.associate = function(models) {
    // Associating Game with Games
    Game.hasMany(models.Player, {});
    Game.hasMany(models.Celebrity,{});
  };
  return Game;
};
