const constants = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    res.status(statusCode).json({
        title: getTitle(statusCode),
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Only show stack trace in development
    });
};

const getTitle = (statusCode) => {
    switch (statusCode) {
        case constants.VALIDATION_ERROR: return "Validation Error";
        case constants.NOT_FOUND: return "Not Found";
        case constants.UNAUTHORIZED: return "Unauthorized";
        case constants.FORBIDDEN: return "Forbidden";
        case constants.SERVER_ERROR: return "Server Error";
        default: return "Error";
    }
};

module.exports = errorHandler;
