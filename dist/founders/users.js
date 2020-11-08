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
exports.getSpecificUserByUsername = void 0;
const users_1 = require("../drivers/users");
const notFoundError_1 = require("../errors/notFoundError");
const log_1 = __importDefault(require("../logger/log"));
function getSpecificUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield users_1.getUserByUsername(username);
        if (users.length == 0) {
            throw new notFoundError_1.NotFoundError(-107);
        }
        log_1.default.debug(`user in database is: ${users[0]}`);
        return users[0];
    });
}
exports.getSpecificUserByUsername = getSpecificUserByUsername;
//# sourceMappingURL=users.js.map