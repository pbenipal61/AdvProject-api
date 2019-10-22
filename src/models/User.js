const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  //give different access rights if admin or not
  isAdmin: Boolean
});

schema.methods.generateAuthToken = () => {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin
    },
    process.env.KEY
  );
  return token;
};

const User = mongoose.model("User", schema);

const validateUser = user => {
  const schema = {
    name: joi
      .string()
      .min(3)
      .max(50)
      .required(),
    email: joi
      .string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: joi
      .string()
      .min(3)
      .max(255)
      .required()
  };

  return joi.validate(user, schema);
};

module.exports = User;
module.exports.validate = validateUser;
