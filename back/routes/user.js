const Express = require('express');

const router = Express.Router();

// controller
const { userController } = require('../controllers');

// user routes
router.get('/all', userController.getAllUserCont);
router.get('/:id', userController.getOneUserCont);
router.post('/signup', userController.createUserCont);
router.post('/login', userController.loginUserCont);
router.put('/:id', userController.modifUserCont);
router.delete('/:id', userController.deleteUserCont);
router.patch('/:userid/courses/:courseid', userController.saveAttendanceCont);

module.exports = router;
