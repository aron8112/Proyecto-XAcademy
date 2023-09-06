const crypto = require('crypto');

const { Course } = require('../models');
// eslint-disable-next-line import/order

const getAllCourses = async () => {
  try {
    const AllCourses = await Course.findAll();
    return AllCourses;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error when fetching all courses', err);
    throw err;
  }
};

const getOneCourse = async (courseId) => {
  try {
    const course = await Course.findByPk(courseId);
    return course;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error when fetching Course', error);
    throw error;
  }
};

const newCourseProv = async (course) => {
  const {
    courseName,
    courseStartDate,
    courseEndDate,
    description,
    shortDescription,
    amountclasses,
    schedule,
  } = course;

  // eslint-disable-next-line no-useless-catch
  try {
    // eslint-disable-next-line no-unused-vars
    const newCourse = await Course.create({
      // eslint-disable-next-line no-undef
      id: crypto.randomUUID(),
      courseName,
      courseStartDate,
      courseEndDate,
      description,
      shortDescription,
      amountclasses,
      schedule,
    });
    return newCourse;
  } catch (error) {
    throw error;
  }
};

const updateCourse = async (id) => {
  const course = await Course.findByPk(id);
  console.log(course);
  if (course) {
    await course.increment('attendance');
    return true;
  }
  throw new Error();
};

const modifyCourse = async (id, body) => {
  const modCourse = await Course.update(body, { where: { id } });
  if (!modCourse) {
    throw new Error();
  }
  return modCourse;
};

module.exports = {
  getAllCourses,
  getOneCourse,
  newCourseProv,
  updateCourse,
  modifyCourse,
};
