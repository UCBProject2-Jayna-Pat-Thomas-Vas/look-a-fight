module.exports = function(sequelize, DataTypes) {
  var Celebrity = sequelize.define("Celebrity", {
    id: {type: DataTypes.INTEGER, autoincrement: true, primaryKey: true},
    faceToken: {type: DataTypes.STRING, allowNull: true},
    name: {type: DataTypes.STRING, allowNull: false},
    imageURL: {type: DataTypes.STRING, allowNull: true, isURL: true},
    strength: {type: DataTypes.INTEGER, allowNull: false},
    hitPoints: {type: DataTypes.INTEGER, allowNull: false},
    phrase: {type: DataTypes.STRING, allowNull: true},
    totalWins: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    delete_flag: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
    delete_date: {type: DataTypes.BOOLEAN, allowNull: true}
  });


  Celebrity.associate = function(models) {
    Celebrity.hasMany(models.game, {
      foreignKey: 'id', sourceKey: 'id'
      });
    };
   return Celebrity; 
  };



