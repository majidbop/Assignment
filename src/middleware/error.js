/* eslint no-unused-vars: 0 */
var baseError_1 = require('../errors/baseError');
var log_1 = require('../logger/log');
var createResponse = function (statusCode, error, traceId) {
    if (statusCode !== 500) {
        return {
            errorCode: error.errorCode,
            message: error.message,
            traceId: traceId
        };
    }
    return {
        errorCode: -101,
        message: 'Internal Server Error',
        traceId: traceId
    };
};
exports.errorMiddleware = function (error, req, res, next) {
    var traceId = req.traceId;
    var statusCode = error instanceof baseError_1.BaseError ? error.statusCode : 500;
    var response = createResponse(statusCode, error, traceId);
    log_1["default"].err("error have raised you can find error information as follows:\nroute: " + JSON.stringify(req.route) + " \nCode: " + statusCode + ", traceId: " + traceId + ",\n" + error.stack);
    res.status(statusCode).json(response);
};
