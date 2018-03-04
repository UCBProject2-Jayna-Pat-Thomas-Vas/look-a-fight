module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, autoincrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, isEmail: true},
    imageURL: {type: DataTypes.STRING, isUrl: true},
    totalWins: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    createdAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW,allowNull: false},
    updatedAt: {type: DataTypes.DATE, allowNull: true},
    delete_flag: {type: DataTypes.BOOLEAN, default: false, allowNull: false},
    delete_date: {type: DataTypes.BOOLEAN, allowNull: true}
  });

  User.associate = function(models) {
    // Associating Player with Games
    // When an Player is deleted, also delete any associated Games
    User.hasMany(models.Games, {
    });
  };

  return User;
};
