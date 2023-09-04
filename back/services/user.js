/* eslint-disable consistent-return */
const { UserProvider, CourseProvider } = require('../providers');

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

const saveAttendanceServ = async (UserId, CourseId) => {
  try {
    const course = await CourseProvider.updateCourse(CourseId);
    if (course) {
      const user = await UserProvider.updateUser(UserId);
      if (user) {
        return user;
      }
      throw new Error('Unable to uupdate in service');
    }
  } catch (error) {
    throw new Error('Unable to process the request Save Attendance');
  }
};

module.exports = {
  createUserServ,
  loginServ,
  saveAttendanceServ,
};
