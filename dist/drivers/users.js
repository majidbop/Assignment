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
exports.readUserTokens = exports.insertToken = exports.getUserByUsername = exports.insert = void 0;
const users_1 = require("./db/dao/users");
const log_1 = __importDefault(require("../logger/log"));
function insert(username, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        log_1.default.info('insert function in users file in drivers called');
        const newUser = yield users_1.insert(username, password, name);
        return newUser;
    });
}
exports.insert = insert;
function getUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        log_1.default.info('getUserForLogin function in users file in drivers called');
        return users_1.getUserByUsername(username);
    });
}
exports.getUserByUsername = getUserByUsername;
function insertToken(token, user) {
    return __awaiter(this, void 0, void 0, function* () {
        log_1.default.info('insertToken function in users file in drivers called');
        return users_1.insertToken(token, user);
    });
}
exports.insertToken = insertToken;
function readUserTokens(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return users_1.readUserTokens(user);
    });
}
exports.readUserTokens = readUserTokens;
//# sourceMappingURL=users.js.map