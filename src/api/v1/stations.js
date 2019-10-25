module.exports.hello = async (req, res, next) => {
  res.status(200).json({
    hello: "back at you"
  });
};

module.exports.all = async (req, res, next) => {};
