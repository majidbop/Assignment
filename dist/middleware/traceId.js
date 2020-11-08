"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachTraceId = void 0;
const uuid_1 = require("uuid");
const log_1 = __importDefault(require("../logger/log"));
exports.attachTraceId = (req, res, next) => {
    req.traceId = uuid_1.v4();
    log_1.default.info(`trace id ${req.traceId} issued for new request`);
    next();
};
//# sourceMappingURL=traceId.js.map