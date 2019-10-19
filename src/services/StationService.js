const { Station } = require("../models");

module.exports.create = async body => {
  const station = await Station.create(body);
  return station;
};
