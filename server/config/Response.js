const successResonse = (res, message, statusCode) => {
  return res.status(statusCode).json({
    data: message,
  });
};

const errorResponse = (res, message, statusCode) => {
  return res.status(statusCode).json({
    error: message,
  });
};

module.exports = {
  errorResponse,
  successResonse,
};
