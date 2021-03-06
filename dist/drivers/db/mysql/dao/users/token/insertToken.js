"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertToken = void 0;
const sql_template_strings_1 = require("sql-template-strings");
const badRequestError_1 = require("../../../../../../errors/badRequestError");
const baseError_1 = require("../../../../../../errors/baseError");
const log_1 = __importDefault(require("../../../../../../logger/log"));
const queryUtility_1 = require("../../../queryUtility");
function insertToken(authToken, user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            log_1.default.info('insert token called in mysql db');
            const result = yield queryUtility_1.runQuery(sql_template_strings_1.SQL `INSERT INTO tokens (authToken, userId, username, createdAt) VALUES (${authToken}, ${user.id}, ${user.username}, NOW())`);
            return { id: result.insertId, authToken };
        }
        catch (error) {
            if (error instanceof baseError_1.BaseError) {
                throw error;
            }
            else {
                throw new badRequestError_1.BadRequestError(error, -109);
            }
        }
    });
}
exports.insertToken = insertToken;
module.exports = {
    insertToken,
};
//# sourceMappingURL=insertToken.js.map