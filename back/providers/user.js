/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { User, UserCourse } = require('../models');
const {
  tokenSign,
} = require('../middleware/token');
const { wrongEmailOrPassw, userNotFound, registerInCourseError } = require('../exceptions/errors');

const newUserProv = async (user) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = user;

  try {
    const newUser = await User.create({
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(
        password,
        10,
      ),
    });
    if (newUser) {
      const token = tokenSign(newUser);
      return token;
    }
  } catch (error) {
    throw error;
  }
};

const loginProv = async (user) => {
  try {
    let { email, password } = user;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (foundUser) {
      password = await bcrypt.compare(
        password,
        foundUser.password,
      );

      if (password) {
        const token = tokenSign(foundUser);
        return token;
      }
      throw wrongEmailOrPassw;
    }
    throw userNotFound;
  } catch (error) {
    throw error;
  }
};

const getUserProv = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      return user.id;
    }
  } catch (error) {
    throw new Error('Cannot find User');
  }
};
const signupInCourse = async (userId, courseId) => {
  const saveReg = await UserCourse.create({
    id: crypto.randomUUID(),
    userId,
    courseId,
  });
  if (!saveReg) {
    throw registerInCourseError;
  }
  return true;
};

const updateUserAttendance = async (id) => {
  const user = await UserCourse.findByPk(id);
  if (user) {
    await user.increment('attendance');
    return true;
  }
  throw new Error();
};

const updateUserEnrollment = async (id) => {
  const user = await UserCourse.update({ enrolled: true }, {
    where: {
      userId: id,
    },
  });
  if (user) {
    return true;
  }
  throw new Error();
};

async function getOneUserInfo(id) {
  const user = await User.findByPk(id);
  return user;
  // try
  // {
  //   // Buscar al usuario por su ID
  //   const user = await User.findByPk(id);

  //   if (!user) {
  //     return null; // El usuario no fue encontrado
  //   }

  //   let userCourses;
  //   try {
  //     // Utilizar la tabla intermedia UserCourse para obtener los cursos del usuario
  //     userCourses = await UserCourse.findAll({
  //       where: { userId: user.id }, // Filtrar por el ID del usuario
  //       // Incluir la asociación con Course y seleccionar solo las columnas necesarias
  //       include: [{ model: Course, attributes: ['courseName', 'id'] }],
  //     });
  //   } catch (eagerLoadingError) {
  //     // Capturar el error específico relacionado con la falta de asociación
  //     if (eagerLoadingError.name === 'SequelizeEagerLoadingError') {
  //       console.error(
  // 'Error de carga ansiosa (Eager Loading Error):', eagerLoadingError.message);
  //       return null; // Puedes manejar el error de la forma que desees
  //     }
  //     throw eagerLoadingError; // Relanzar otros errores relacionados con la consulta
  //   }

  //   // Mapear los resultados para obtener cursos en el formato deseado
  //   const coursesAssociated = userCourses.map((userCourse) => ({
  //     courseName: userCourse.Course.courseName,
  //     courseId: userCourse.Course.id,
  //   }));

  //   // Construir el objeto de resultado
  //   const result = {
  //     user: user.toJSON(), // Convertir el usuario a JSON si es necesario
  //     coursesAssociated,
  //   };

  //   return result;
  // } catch (error) {
  //   console.error('Error al obtener cursos asociados al usuario:', error);
  //   throw error;
  // }
}

module.exports = {
  newUserProv,
  loginProv,
  getUserProv,
  signupInCourse,
  updateUserAttendance,
  updateUserEnrollment,
  getOneUserInfo,
};
