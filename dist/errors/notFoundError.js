"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const baseError_1 = require("./baseError");
class NotFoundError extends baseError_1.BaseError {
    constructor(errorCode) {
        super('Not Found', 404, errorCode);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=notFoundError.js.map