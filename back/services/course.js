const { CourseProvider } = require('../providers');

const getAllCourses = async () => {
  const allCourses = await CourseProvider.getAllCourses();
  return allCourses;
};

const getOneCourse = async (courseId) => {
  const getCourse = await CourseProvider.getOneCourse(courseId);
  return getCourse;
};

const createCourseServ = async (course) => {
  const newCourse = await CourseProvider.newCourseProv(
    course,
  );

  return newCourse;
};

const modCourseServ = async (id, body) => {
  const modCourse = await CourseProvider.modifyCourse(id, body);

  return modCourse;
};

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourseServ,
  modCourseServ,
};
