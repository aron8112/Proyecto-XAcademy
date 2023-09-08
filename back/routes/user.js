const Express = require('express');

const router = Express.Router();

// controller
const { userController } = require('../controllers');

// user routes
// ADMIN ONLY
router.get('/all', userController.getAllUserCont);

// EVERYONE CAN ACCESS
router.post('/signup', userController.createUserCont);
router.post('/login', userController.loginUserCont);

// ONLY USER AND ADMIN
router.put('/:id', userController.modifUserCont);
router.delete('/:id', userController.deleteUserCont);
router.get('/:id', userController.getOneUserCont);
router.post('/:userid/signupcourse/:courseid', userController.signupInCourse);
router.patch('/:userid/courseenroll/:courseid', userController.updateEnrollmentCont);

// ADMIN AND TEACHER
router.patch('/:userid/courseatt/:courseid', userController.saveAttendanceCont);

module.exports = router;
