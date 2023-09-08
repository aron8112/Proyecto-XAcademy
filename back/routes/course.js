// eslint-disable-next-line import/newline-after-import
const express = require('express');
const { courseController } = require('../controllers');

const router = express.Router();

// EVERYONE CAN SEE
router.get('/all', courseController.getAllCourses);
router.get('/:courseId', courseController.getCourse);

// ONLY ADMIN
router.post('/create', courseController.createCourseCont);
router.patch('/modify/:id', courseController.modCourse);
module.exports = router;
