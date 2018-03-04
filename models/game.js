module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    ID: {type: Sequelize.INTEGER, autoincrement: true},
    userID: {type: Sequelize.INTEGER, allowNull: false,
      references: {model: User, key: 'id'}},
    lookALikeID: {type: Sequelize.INTEGER, allowNull: false,
      references: {model: Celebrity, key: 'id'}},
    opponentID: {type: Sequelize.INTEGER, allowNull: false,
      references: {model: Celebrity, key: 'id'}},
    winnerID: {type: Sequelize.INTEGER, allowNull: true},
    winnerType: {type: Sequelize.STRING, allowNull: true,
      isIn: [['user', 'opponent']],},
    createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}
  });

  Game.associate = function(models) {
    // Associating Game with Games
    Game.hasOne(models.User, {});
    Game.hasOne(models.Celebrity,{});
  };
  return Game;
};

