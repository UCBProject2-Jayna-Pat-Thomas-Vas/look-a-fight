
module.exports = function(sequelize, Sequelize) {
  var Celebrity = sequelize.define("Celebrity", {

    id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },

    faceToken: {
                type: Sequelize.STRING,
                allowNull: true
              },

    name: {
            type: Sequelize.STRING,
            allowNull: false},

    imageURL: {
                type: Sequelize.STRING,
                allowNull: true,
                isURL: true
              },

    strength: {
                type: Sequelize.INTEGER,
                allowNull: false
              },

    hitPoints: {
                type: Sequelize.INTEGER,
                allowNull: false
              },

    phrase: {
              type: Sequelize.STRING,
              allowNull: true
            },

    totalWins: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false
              },

    deleteFlag: {
                  type: Sequelize.BOOLEAN,
                  defaultValue: false,
                  allowNull: false
                },

    deleteDate: {
                  type: Sequelize.BOOLEAN,
                  allowNull: true
                },

    createdAt: {
                  type: Sequelize.DATE,
                  allowNull: false,
                  defaultValue: Sequelize.NOW
                },

    updatedAt: {
                  type: Sequelize.DATE,
                  allowNull: true,
                  defaultValue: Sequelize.NOW
                }
  });


//associate celebrity model to the game model
  Celebrity.associate = function(models) {
    models.Celebrity.hasMany(models.Game, {foreignKey: 'lookAFightId'});
    models.Celebrity.hasMany(models.Game, {foreignKey: 'opponentId'});
  };

  return Celebrity;
};

  