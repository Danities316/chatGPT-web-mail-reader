const errorHandler = (err, req, res, next) => {
  // Default error status code
  let statusCode = 500;

  // Default error message
  let message = 'Internal Server Error';

  // Check if the error has a custom status code and message
  if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Log the error
  console.error(err.stack);

  // Send the error response
  res.status(statusCode).json({
    error: message
  });
};

module.exports = errorHandler;
