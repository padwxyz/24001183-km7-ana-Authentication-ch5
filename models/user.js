'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Car, {
        foreignKey: 'createdBy',
        as: 'createdByUser'
      });

      User.hasMany(models.Car, {
        foreignKey: 'lastUpdatedBy',
        as: 'lastUpdatedByUser'
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 50],
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 20],
      }
    },
    role: {
      type: DataTypes.ENUM(["SuperAdmin", "Admin", "Member"]),
      allowNull: false,
      defaultValue: "Member",
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};