const NodeGeocoder = require("node-geocoder");
const geocoder = NodeGeocoder({
  provider: "opencage",
  apiKey: "601b462499b743e493c3c703f6172da3"
});
const latMax = 62.64027778,
  latMin = 60.06,
  lonMin = 27.95555556, //Longitude from close to Inga, Finland
  lonMax = 22.91305556; // Longitude from close to Nuorgam, Finland;
module.exports.randomLat = () => {
  return getRandomFloat(latMin, latMax);
};

module.exports.randomLong = () => {
  return getRandomFloat(lonMin, lonMax);
};

module.exports.geocode = async (streetAddress, city) => {
  return await geocoder.geocode(`${streetAddress} ${city}`);
};
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
