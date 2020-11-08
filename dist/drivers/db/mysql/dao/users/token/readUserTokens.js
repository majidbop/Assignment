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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUserTokens = void 0;
const sql_template_strings_1 = require("sql-template-strings");
const badRequestError_1 = require("../../../../../../errors/badRequestError");
const baseError_1 = require("../../../../../../errors/baseError");
const queryUtility_1 = require("../../../queryUtility");
function readUserTokens(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield queryUtility_1.runQuery(sql_template_strings_1.SQL `SELECT *  from tokens WHERE userId=${user.id} ORDER BY createdAt desc LIMIT 0, 1;`);
            if (result.length > 0)
                return result[0];
            return undefined;
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
exports.readUserTokens = readUserTokens;
//# sourceMappingURL=readUserTokens.js.map