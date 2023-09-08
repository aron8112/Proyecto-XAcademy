const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.UserCourse, // Utiliza el modelo UserCourse como tabla intermedia
        foreignKey: 'courseId', // Nombre de la clave foránea en UserCourse que hace referencia a Course
        as: 'users', // Alias para acceder a los usuarios desde un curso
      });
    }
  }
  // Initialize the model
  Course.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    courseEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    shortDescription: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    attendance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    amountclasses: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visualized: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'Course',
    timestamps: true,
    paranoid: true,
  });
  return Course;
};
