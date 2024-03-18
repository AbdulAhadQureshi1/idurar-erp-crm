const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const mongoose = require('mongoose');

const checkAndCorrectURL = require('./checkAndCorrectURL');
const sendMail = require('./sendMail');

const { loadSettings } = require('@/middlewares/settings');
const { useAppSettings } = require('@/settings');

const authUser = require('./authUser');

const register = async (req, res, { userModel }) => {
  const UserPasswordModel = mongoose.model(userModel + 'Password');
  const UserModel = mongoose.model(userModel);
  const { name, email, password, country } = req.body;

  // validate
  const objectSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: true } })
      .required(),
    password: Joi.string().required(),
  });

  const { error, value } = objectSchema.validate({ email, password });
  if (error) {
    return res.status(409).json({
      success: false,
      result: null,
      error: error,
      message: 'Invalid/Missing credentials.',
      errorMessage: error.message,
    });
  }

  const userExists = await UserModel.findOne({ email: email, removed: false });

  if (userExists)
    return res.status(409).json({
      success: false,
      result: null,
      message: 'An account with this email already exists.',
    });

  const user = new UserModel({ name, email });
  await user.save();

  const bcryptSalt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
  const userPassword = new UserPasswordModel({ user: user._id, password: hashedPassword, salt: bcryptSalt });
  await userPassword.save();

  return res.status(201).json({
    success: true,
    result: user,
    message: 'User registered successfully.',
  });
};

module.exports = register;
