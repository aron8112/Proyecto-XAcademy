const { UserServices } = require('../services');

const createUserCont = async (req, res) => {
  try {
    const newUser = await UserServices.createUserServ(req.body);
    res.status(201).send({
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      action: 'createUser',
      error: error.message,
    });
  }
};

const loginUserCont = async (req, res) => {
  try {
    const foundUser = await UserServices.loginServ(req.body);
    res.set({
      Authorization: `Bearer ${foundUser}`,
    });
    res.status(200).send({
      foundUser,
    });
  } catch (error) {
    res.status(400).json({
      action: 'loginUser',
      error: error.message,
    });
  }
};

const modifUserCont = (req, res) => {
  res.status(200).send({
    msg: `modif user de ${req.params.id}`,
  });
};

const deleteUserCont = (req, res) => {
  res.status(200).send({
    msg: `eliminar user de ${req.params.id}`,
  });
};

const getAllUserCont = (_req, res) => {
  res.status(200).send({
    msg: 'get all users',
  });
};

const getOneUserCont = async (req, res) => {
  const { id } = req.params;
  try {
    const userfound = await UserServices.getOneUserServ(id);
    res.status(200).send(userfound);
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

const saveAttendanceCont = async (req, res) => {
  const { userid, courseid } = req.params;
  try {
    const updateUser = await UserServices.saveAttendanceServ(userid, courseid);
    if (updateUser) {
      res.status(200).send({
        msg: 'Attendance saved',
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

const updateEnrollmentCont = async (req, res) => {
  const { userid, courseid } = req.params;
  try {
    const updateUser = await UserServices.saveUpdateEnrollServ(userid, courseid);
    if (updateUser) {
      res.status(200).send({
        msg: 'Enrollment changed',
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

const signupInCourse = async (req, res) => {
  const { userid, courseid } = req.params;
  try {
    const register = await UserServices.signupInCourseServ(userid, courseid);
    if (register) {
      res.status(200).send({
        msg: 'The registration was succesful',
      });
    }
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

module.exports = {
  createUserCont,
  loginUserCont,
  modifUserCont,
  deleteUserCont,
  getAllUserCont,
  getOneUserCont,
  saveAttendanceCont,
  updateEnrollmentCont,
  signupInCourse,
};
