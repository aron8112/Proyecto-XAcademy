const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    static associate() {
    }
  }
  Publication.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: DataTypes.STRING,
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Publication',
    timestamps: true,
    paranoid: true,
  });
  return Publication;
};
