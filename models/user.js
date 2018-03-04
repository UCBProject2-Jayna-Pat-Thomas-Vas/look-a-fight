module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {type: Sequelize.INTEGER, autoincrement: true},
    name: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false, isEmail: true},
    imageURL: {type: Sequelize.STRING, isUrl: true},
    totalWins: {type: Sequelize.INTEGER, defaultValue: 0, allowNull: false},
    createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW,allowNull: false}
    updatedAt: {type: Sequelize.DATE, allowNull: true}
    delete_flag: {type: Sequelize.BOOLEAN, default: false, allowNull: false}
    delete_date: {type: Sequelize.BOOLEAN, allowNull: true}
  });

  User.associate = function(models) {
    // Associating Player with Games
    // When an Player is deleted, also delete any associated Games
    User.hasMany(models.Games, {
    });
  };

  return User;
};
