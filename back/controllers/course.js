/* eslint-disable no-unused-vars */
const { CourseServices } = require('../services');

const getAllCourses = async (req, res) => {
  try {
    const getAll = await CourseServices.getAllCourses();
    res.status(200).send(getAll);
  } catch (error) {
    res.status(400).json({
      action: 'getAllCourses',
      error: error.message,
    });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await CourseServices.getOneCourse(req.params.courseId);
    if (!course) {
      res.status(404).json({ action: 'getCourse', error: 'Course not found' });
    } else {
      res.status(200).send(course);
    }
  } catch (error) {
    res.status(400).json({
      action: 'getCourse',
      error: error.message,
    });
  }
};

const createCourseCont = async (req, res) => {
  try {
    const newCourse = await CourseServices.createCourseServ(req.body);
    res.status(201).send({
      newCourse,
    });
  } catch (error) {
    res.status(400).json({
      action: 'createCourse',
      error: error.message,
    });
  }
};

const modCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const modifyCourse = await CourseServices.modCourseServ(id, req.body);
    res.status(200).json({
      body: req.body,
      modifiedCourse: 'Modification/s was/were succesfull',
    });
  } catch (error) {
    res.status(400).json({
      action: 'modifyCourse',
      error: error.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCourse = await CourseServices.deleteCourseServ(id);
    res.status(200).send({
      deletedCourse: 'Delete was succesfull',
    });
  } catch (error) {
    res.status(400).json({
      action: 'deleteCourse',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourseCont,
  modCourse,
  deleteCourse,
};
