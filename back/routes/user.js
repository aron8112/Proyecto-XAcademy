const Express = require('express');

const router = Express.Router();
const { isAdminMdw, isAdminAndTeacherMdw } = require('../middleware/auth');
// controller
const { userController } = require('../controllers');

// user routes
// ADMIN ONLY
router.get('/all', isAdminMdw, userController.getAllUserCont);
router.delete('/deleteuserincourse/:userid/:courseid', isAdminMdw, userController.deleteUserInCourse);

// EVERYONE CAN ACCESS
router.post('/signup', userController.createUserCont);
router.post('/login', userController.loginUserCont);

// ONLY USER AND ADMIN
router.put('/:id', userController.modifUserCont);
router.delete('/:id', userController.deleteUserCont);
router.get('/:id', userController.getOneUserCont);
router.post('/:userid/signupcourse/:courseid', userController.signupInCourse);
router.put('/:userid/courseenroll/:courseid', userController.updateEnrollmentCont);

// ADMIN AND TEACHER
router.put('/:userid/courseatt/:courseid', isAdminAndTeacherMdw, userController.saveAttendanceCont);

module.exports = router;
