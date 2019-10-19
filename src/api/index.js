const v1 = require("./v1");
const init = app => {
  app.use("/v1", v1);
};

module.exports = init;
