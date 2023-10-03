const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Course, {
        through: models.UserCourse, // Utiliza el modelo UserCourse como tabla intermedia
        sourceKey: 'id',
        onDelete: 'cascade',
        foreignKey: 'userId', // Nombre de la clave foránea en UserCourse que hace referencia a User
        as: 'Courses', // Alias para acceder a los cursos desde un usuario
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isTeacher: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
