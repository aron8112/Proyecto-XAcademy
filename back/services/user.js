/* eslint-disable consistent-return */
const { UserProvider, CourseProvider } = require('../providers');
const { errorInService } = require('../exceptions/errors');

const createUserServ = async (user) => {
  const newUser = await UserProvider.newUserProv(
    user,
  );

  return newUser;
};

const loginServ = async (user) => {
  const foundUser = await UserProvider.loginProv(
    user,
  );
  return foundUser;
};

const signupInCourseServ = async (userId, courseId) => {
  const register = await UserProvider.signupInCourse(userId, courseId);
  if (register) {
    return true;
  }
  throw errorInService;
};

const saveAttendanceServ = async (UserId, CourseId) => {
  try {
    const course = await CourseProvider.updateCourse(CourseId);
    if (course) {
      const user = await UserProvider.updateUserAttendance(UserId);
      if (user) {
        return true;
      }
      throw errorInService;
    }
  } catch (error) {
    throw errorInService;
  }
};

const saveUpdateEnrollServ = async (UserId, CourseId) => {
  try {
    const course = await CourseProvider.getOneCourse(CourseId);
    if (course) {
      const user = await UserProvider.updateUserEnrollment(UserId);
      if (user) {
        return user;
      }
      throw errorInService;
    }
  } catch (error) {
    throw new Error('Unable to process the request update enrollment');
  }
};

const getOneUserServ = async (id) => {
  const userfound = await UserProvider.getOneUserInfo(id);
  if (!userfound) {
    throw errorInService;
  }
  return userfound;
};
module.exports = {
  createUserServ,
  loginServ,
  saveAttendanceServ,
  saveUpdateEnrollServ,
  signupInCourseServ,
  getOneUserServ,
};
