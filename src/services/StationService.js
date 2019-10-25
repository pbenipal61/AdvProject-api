const { Station } = require("../models");
const { CoordinateTools } = require("../utilities");
const { addresses } = require("../data");

module.exports.add = async body => {
  let s = { ...body };
  s.location.coordinates = [s.location.lat, s.location.lon];

  s.type.toString().toLowerCase() === "slow"
    ? (s = {
        ...s,
        connectorType: "Type 2",
        speed: {
          min: 22,
          max: 22
        }
      })
    : (s = {
        ...s,
        connectorType: "CCS",
        speed: {
          max: 150,
          min: 50
        }
      });
  const station = await Station.create(s);
  return station;
};

module.exports.addBatch = async body => {
  let stations = body.stations;

  let batchedStations = [];
  stations.forEach(async station => {
    let s = { ...station };
    s.location.coordinates = [s.location.lat, s.location.lon];

    s.type.toString().toLowerCase() === "slow"
      ? (s = {
          ...s,
          connectorType: "Type 2",
          speed: {
            min: 22,
            max: 22
          }
        })
      : (s = {
          ...s,
          connectorType: "CCS",
          speed: {
            max: 150,
            min: 50
          }
        });
    batchedStations.push(await Station.create(s));
  });
  return batchedStations;
};

module.exports.all = async body => {
  const stations = await Station.find({});
  return stations;
};
