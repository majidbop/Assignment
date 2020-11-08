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
exports.generateToken = void 0;
const crypto_1 = __importDefault(require("crypto"));
const users_1 = require("../../drivers/users");
const jwtSecret = 'Th!$Is$eCR3tKeY'; // Todo read from secret config
function generateToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = { username: user.username, id: user.id };
        const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
        const authToken = crypto_1.default.createHmac('sha256', jwtSecret).update(encodedPayload).digest('base64');
        const token = yield users_1.insertToken(authToken, user);
        return token;
    });
}
exports.generateToken = generateToken;
//# sourceMappingURL=token.js.map