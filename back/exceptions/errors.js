const userNotFound = new Error('User Not Found');
const wrongEmailOrPassw = new Error('Wrong Email and/or Password');
const registerInCourseError = new Error('cannot register the user in the course');
const errorInService = new Error('Unable to update in service');

module.exports = {
  userNotFound,
  wrongEmailOrPassw,
  registerInCourseError,
  errorInService,
};
