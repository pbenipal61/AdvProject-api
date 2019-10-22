const v1 = require("./v1");
const dev = require("./dev");
const init = app => {
  app.use("/v1", v1);
  app.use("/dev", dev);
};

module.exports = init;
