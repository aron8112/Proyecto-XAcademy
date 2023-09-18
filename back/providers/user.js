/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-catch */
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { User, UserCourse, Course } = require('../models');
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

const getUserProv = async (userId) => {
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      return user;
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

const updateUserAttendance = async (UserId, CourseId) => {
  const user = await UserCourse.findOne({
    where: {
      userId: UserId,
      courseId: CourseId,
    },
  });
  if (user) {
    await user.increment('attendance');
    return true;
  }
  throw new Error();
};

const updateUserEnrollment = async (UserId, CourseId) => {
  const user = await UserCourse.findOne({
    where: {
      userId: UserId,
      courseId: CourseId,
    },
  });
  if (user) {
    user.update({ enrolled: true });
    return true;
  }
  throw new Error();
};

async function getOneUserInfo(id) {
  try {
    const user = await User.findAll({
      where: { id },
      include: [{ model: Course, as: 'Courses' }],
    });

    // if (user.length === 0) {
    //   console.log('pasa al service para buscar solo el user');
    //   const user2 = await getUserProv(id);
    //   return user2;
    // }
    return user;
  } catch (error) {
    throw Error;
  }
}

const deleteUserCourse = async (UserId, CourseId) => {
  const user = await UserCourse.destroy({
    where: {
      userId: UserId,
      courseId: CourseId,
    },
  });
  if (user) {
    return true;
  }
  throw new Error();
};

module.exports = {
  newUserProv,
  loginProv,
  getUserProv,
  signupInCourse,
  updateUserAttendance,
  updateUserEnrollment,
  getOneUserInfo,
  deleteUserCourse,
};
