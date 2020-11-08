var uuid_1 = require('uuid');
var log_1 = require('../logger/log');
exports.attachTraceId = function (req, res, next) {
    req.traceId = uuid_1.v4();
    log_1["default"].info("trace id " + req.traceId + " issued for new request");
    next();
};
