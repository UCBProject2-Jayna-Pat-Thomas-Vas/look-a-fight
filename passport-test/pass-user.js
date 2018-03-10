// Requiring bcrypt for password hashing.
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
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

        // The email must be a proper email before creation
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
        }
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

    // Custom method for User model. Checks if an unhashed password entered by the user can be compared to the hashed password stored in database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
    };