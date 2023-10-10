/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
// const ExpressValidator = require('express-validator');
const {
  body,
  validationResult,
} = require('express-validator');
const { User } = require('../models');

const validateFields = (validations) => async (req, res, next) => {
  for (const validation of validations) {
    const result = await validation.run(req);
    if (result.errors.length) break;
  }

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  res
    .status(400)
    .json({ errors: errors.array() });
};

const checkPostUserData = async (
  req,
  res,
  next,
) => {
  try {
    validateFields([
      body(
        'email',
        'Must be a valid e-mail address',
      )
        .isEmail()
        .notEmpty(),
    ]);
    const { email } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (foundUser) {
      return res.status(400).json({
        action: 'validateUser',
        message:
          'Email already in use, please use another email',
      });
    }
    validateFields([
      body('username', 'Must have an username')
        .isString()
        .notEmpty(),
      body(
        'password',
        'The password must be at least 6 characters, and must contain a symbol',
      )
        .isStrongPassword()
        .notEmpty(),
    ]);
    next();
  } catch (error) {
    return res.status(500).json({
      action: 'validateUser',
      error: error.message,
    });
  }
};

const checkUserLogIn = validateFields([
  body('email', 'Must be a valid e-mail address')
    .isEmail()
    .notEmpty(),
  body(
    'password',
    'The password must be at least 6 characters, and must contain a symbol',
  )
    .notEmpty(),
]);

const checkPostCourse = validateFields([
  body('courseName', 'Must be complete').isString().notEmpty(),
  body('courseStartDate', 'Must be a date').notEmpty(),
  body('courseEndDate', 'Must be a date').notEmpty(),
  body('description', 'Must be complete').notEmpty(),
  body('shortDescription', 'Must be complete').notEmpty(),
  body('amountclasses', 'Must have a number of classes').notEmpty().isInt(),
  body('schedule', 'Must have a schedule for classes').notEmpty(),
]);

module.exports = {
  checkPostUserData,
  checkUserLogIn,
  checkPostCourse,
};
