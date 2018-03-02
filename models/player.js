module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("player", {
    ID: {type: Sequelize.INTEGER, autoincrement: true},
    FirstName: {type: Sequelize.STRING, allowNull: false},
    LastName: {type: Sequelize.STRING, allowNull: false},
    Email: {type: Sequelize.STRING, allowNull: false},
    Photo: {type: Sequelize.TEXT, allowNull: false}
  });

  Player.associate = function(models) {
    // Associating Player with Games
    // When an Player is deleted, also delete any associated Games
    Player.hasMany(models.Games, {
      onDelete: "cascade"
    });
  };

  return Player;
};
