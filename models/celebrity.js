module.exports = function(sequelize, DataTypes) {
  var Celebrity = sequelize.define("Celebrity", {
    id: {type: Sequelize.INTEGER, autoincrement: true},
    faceToken: {type: Sequelize.STRING, allowNull: true},
    name: {type: Sequelize.STRING, allowNull: false},
    imageURL: {type: Sequelize.STRING, allowNull: true, isURL: true},
    strength: {type: Sequelize.INTEGER, allowNull: false},
    hitPoints: {type: Sequelize.INTEGER, allowNull: false},
    phrase: {type: Sequelize.STRING, allowNull: true},
    totalWins: {type: Sequelize.INTEGER, defaultValue: 0, allowNull: false}
    delete_flag: {type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false}
    delete_date: {type: Sequelize.BOOLEAN, allowNull: true}
  });

  Celebrity.associate = function(models) {
    Celebrity.hasMany(models.Games, {
    });
  };

  return Celebrity;
};
