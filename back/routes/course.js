// eslint-disable-next-line import/newline-after-import
const express = require('express');
const { courseController } = require('../controllers');
const { isAdminMdw } = require('../middleware/auth');
const { checkPostCourse } = require('../middleware/validation.middleware');

const router = express.Router();

// EVERYONE CAN SEE
router.get('/all', courseController.getAllCourses);
router.get('/:courseId', courseController.getCourse);

// ADMIN AND TEACHER
router.put('/modify/:id', isAdminMdw, courseController.modCourse);

// ONLY ADMIN
router.post('/create', checkPostCourse, isAdminMdw, courseController.createCourseCont);
router.delete('/deletecourse/:id', isAdminMdw, courseController.deleteCourse);

module.exports = router;
