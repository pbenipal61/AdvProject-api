module.exports = {
  respond: (res, status, message, body) => {
    res.status(status).json({
      message,
      body
    });
  }
};
