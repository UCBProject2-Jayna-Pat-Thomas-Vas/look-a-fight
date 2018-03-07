var Celebrity = require('./celebrity.js');
var User = require('./user.js');

module.exports = function(sequelize, Sequelize) {
  var Game = sequelize.define("Game", {

    id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },

    userId: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },

    lookALikeId: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  },

    opponentId: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },

    winnerId: {
                type: Sequelize.INTEGER,
                allowNull: true
              },

    winnerType: {
                  type: Sequelize.STRING,
                  allowNull: true,
                  isIn: {
                    args: [['user', 'opponent']],
                    msg: "Must be either 'user' or 'opponent'."
                  } 
                },

    createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: false
              },

    updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
              }
  });

  return Game;
};

