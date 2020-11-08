"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestProperty = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default({ allErrors: true });
const badRequestError_1 = require("../errors/badRequestError");
exports.validateRequestProperty = (errorCode, schema, target, ...validators) => (req, res, next) => {
    try {
        const valid = ajv.validate(schema, req[target]);
        if (!valid) {
            const message = ajv.errorsText();
            next(new badRequestError_1.BadRequestError(message, errorCode));
            return;
        }
        validators.forEach((validator) => {
            const message = validator(req[target]);
            if (message) {
                next(new badRequestError_1.BadRequestError(message, errorCode));
            }
        });
    }
    catch (error) {
        next(new badRequestError_1.BadRequestError(error, errorCode));
    }
    next();
};
//# sourceMappingURL=validateRequestProperty.js.map