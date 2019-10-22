const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports.register = async ({ name, email, password }) => {
  console.log(name, email, password);
  //find an existing user
  let user = await User.findOne({ email });
  if (user) {
    return {
      userStatus: -1
    };
  }

  user = new User({ name, email, password });
  user.password = await bcrypt.hash(user.password, 10);
  user = await user.save();
  const token = user.generateAuthToken();

  return {
    token,
    user: {
      email: user.email,
      name: user.name
    }
  };
};

module.exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    return {
      userStatus: 0
    };
  }

  const correctPasswordSwitch = await bcrypt.compare(password, user.password);
  if (!correctPasswordSwitch) {
    return {
      userStatus: 1
    };
  }

  const token = await user.generateAuthToken();

  return {
    userStatus: 2,
    user: {
      email: user.email,
      name: user.password,
      _id: user._id
    },
    token
  };
};
