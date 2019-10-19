const { UserService } = require("../../services");
const { ResponseTools } = require("../../utilities");
const login = async (req, res, next) => {
  const user = await UserService.login(req.body);
  user = null
    ? ResponseTools.respond(res, 404, "User not registered", null)
    : ResponseTools.respond(res, 200, "User logged in", user);
};

const register = async (req, res, next) => {
  let user = await UserService.validateExistingUser(req.body);
  if (user != null) {
    ResponseTools.respond(res, 200, "User exists already", user);
  }

  user = await UserService.register(req.body);
  ResponseTools.respond(res, 202, "User registered", user);
};

module.exports = { login, register };
