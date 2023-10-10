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

const deleteCourseServ = async (id) => {
  const deletedCourse = await CourseProvider.deleteCourse(id);

  return deletedCourse;
};

const getAllWS = async () => {
  const getAllW = await CourseProvider.getAllwithStudents();

  return getAllW;
};

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourseServ,
  modCourseServ,
  deleteCourseServ,
  getAllWS,
};
