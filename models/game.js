module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    ID: {type: DataTypes.INTEGER, autoincrement: true, primaryKey: true},
    userID: {type: DataTypes.INTEGER, allowNull: false
      // references: {model: user, key: 'id'}
    },
    lookALikeID: {type: DataTypes.INTEGER, allowNull: false
                    // references: {model: celebrity.js, key: 'id'}
                  },
    opponentID: {type: DataTypes.INTEGER, allowNull: false
      // references: {model: celebrity, key: 'id'}
    },
    winnerID: {type: DataTypes.INTEGER, allowNull: true},
    winnerType: {type: DataTypes.STRING, allowNull: true,
      isIn: [['user', 'opponent']],},
    createdAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    updatedAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  });

  Game.associate = function(models) {
    // Associating Game with Games
    Game.hasOne(models.User, {});
    Game.hasOne(models.Celebrity,{});
  };
  return Game;
};

