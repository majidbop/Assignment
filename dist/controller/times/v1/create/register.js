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
exports.registerTime = void 0;
const log_1 = __importDefault(require("../../../../logger/log"));
const time_1 = require("../../../../services/times/time");
exports.registerTime = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { time } = req.body;
    try {
        const { user } = req.body;
        log_1.default.info('register time in time controller called');
        const createdTime = yield time_1.timeRegister(user, time);
        const response = { id: createdTime.id, time };
        res.send(response);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=register.js.map