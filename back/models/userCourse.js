const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {}

  UserCourse.init(
    {
      userId: {
        type: DataTypes.STRING,
        references: {
          model: 'Users', // Nombre de la tabla User
          key: 'id',
        },
        allowNull: false,
      },
      courseId: {
        type: DataTypes.STRING,
        references: {
          model: 'Course', // Nombre de la tabla Course
          key: 'id',
        },
        allowNull: false,
      },
      attendance: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      enrolled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'UserCourse',
      tableName: 'UserCourse', // Nombre de la tabla intermedia
    },
  );

  return UserCourse;
};
