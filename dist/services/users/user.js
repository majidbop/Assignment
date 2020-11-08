"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginUser = exports.registerUser = void 0;
const md5_1 = require("ts-md5/dist/md5");
const log_1 = __importDefault(require("../../logger/log"));
const userDao = __importStar(require("../../drivers/users"));
const users_1 = require("../../founders/users");
const badRequestError_1 = require("../../errors/badRequestError");
function registerUser(username, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        log_1.default.info("Register user called in user services called");
        const newUser = yield userDao.insert(username, password, name);
        return newUser;
    });
}
exports.registerUser = registerUser;
function loginUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        log_1.default.info("loginUser user called in user services called");
        const candidateUser = yield users_1.getSpecificUserByUsername(username);
        if (candidateUser.password !== md5_1.Md5.hashStr(password)) {
            throw new badRequestError_1.BadRequestError("There isn't any user with requested information", -108);
        }
        return candidateUser;
    });
}
exports.loginUser = loginUser;
//# sourceMappingURL=user.js.map