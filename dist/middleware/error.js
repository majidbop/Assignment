"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
/* eslint no-unused-vars: 0 */
const baseError_1 = require("../errors/baseError");
const log_1 = __importDefault(require("../logger/log"));
const createResponse = (statusCode, error, traceId) => {
    if (statusCode !== 500) {
        return {
            errorCode: error.errorCode,
            message: error.message,
            traceId,
        };
    }
    return {
        errorCode: -101,
        message: 'Internal Server Error',
        traceId,
    };
};
exports.errorMiddleware = (error, req, res, next) => {
    const { traceId } = req;
    const statusCode = error instanceof baseError_1.BaseError ? error.statusCode : 500;
    const response = createResponse(statusCode, error, traceId);
    log_1.default.err(`error have raised you can find error information as follows:\nroute: ${JSON.stringify(req.route)} \nCode: ${statusCode}, traceId: ${traceId},\n${error.stack}`);
    res.status(statusCode).json(response);
};
//# sourceMappingURL=error.js.map