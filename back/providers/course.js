const crypto = require('crypto');

const { Course, User } = require('../models');
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
  const course = await Course.findOne({ where: { id } });
  if (course) {
    const modCourse = await course.update(body, { where: { id } });
    if (!modCourse) {
      throw new Error('no se pudo actualizar');
    }
    return modCourse;
  }
  throw new Error('no existe el curso');
};

const deleteCourse = async (id) => {
  const delCourse = await Course.destroy({ where: { id } });
  if (!delCourse) {
    throw new Error();
  }
  return true;
};

const getAllwithStudents = async () => {
  try {
    const AllCourses = await Course.findAll({ include: [{ model: User, as: 'users' }] });
    return AllCourses;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error when fetching all courses', err);
    throw err;
  }
};

const savingImage = async (file, courseId) => {
  console.log(`file: ${file.filename}, courseId: ${courseId}`);
  try {
    const saveImagePath = await Course.update({ pathImage: file.filename },
      { where: { id: courseId } });
    return saveImagePath;
  } catch (error) {
    throw new Error('no se pudo guardar la modificacion');
  }
};

module.exports = {
  getAllCourses,
  getOneCourse,
  newCourseProv,
  updateCourse,
  modifyCourse,
  deleteCourse,
  getAllwithStudents,
  savingImage,
};
