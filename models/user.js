module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define("User", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
  
      name:{
            type: Sequelize.STRING,
            allowNull: false
          },
  
      userName:{
                type: Sequelize.STRING,
                allowNull: true
              },
  
      email: {
              type: Sequelize.STRING,
              allowNull: false,
              isEmail: true
              },
  
      imageURL: {
                type: Sequelize.STRING,
                isUrl: true
                },
  
      totalWins: {
                  type: Sequelize.INTEGER,
                  defaultValue: 0,
                  allowNull: false
                  },
  
      createdAt: {
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.NOW,
                  allowNull: false
                },
  
      updatedAt: {
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.NOW,
                  allowNull: true
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
      password: {
                type:Sequelize.STRING,
                allowNull: false
                }
    });
  
  // Associate the user to the games model
    User.associate = function(models) {
        models.User.hasMany(models.Game, {foreignKey: 'userId'});
    };
  
    return User;
  };