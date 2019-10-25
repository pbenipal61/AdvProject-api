const { StationService } = require("../../services");
module.exports.hello = async (req, res, next) => {
  res.status(200).json({
    hello: "back at you"
  });
};

module.exports.all = async (req, res, next) => {
  const stations = await StationService.all();
  res.status(200).json({
    stations
  });
};

module.exports.add = async (req, res, next) => {
  const station = await StationService.add(req.body);
  res.status(200).json(station);
};
