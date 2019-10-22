const { UserService } = require("../../services");
const { ResponseTools } = require("../../utilities");
const login = async (req, res, next) => {
  console.log("Logging in ...");
  const data = await UserService.login(req.body);
  console.log("data", data);
  res.header("x-auth-token", data.token).send(data);
};

const register = async (req, res, next) => {
  let data = await UserService.register(req.body);
  res.header("x-auth-token", data.token).send(data);
};

module.exports = { login, register };
