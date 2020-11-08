"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const baseError_1 = require("./baseError");
class BadRequestError extends baseError_1.BaseError {
    constructor(message, errorCode) {
        super(`Bad Request: ${message}`, 400, errorCode);
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=badRequestError.js.map