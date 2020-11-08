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
exports.HttpServer = exports.DbStart = void 0;
const log_1 = __importDefault(require("../logger/log"));
const pool_1 = require("../drivers/db/pool");
exports.DbStart = () => __awaiter(void 0, void 0, void 0, function* () {
    log_1.default.info('DB start function called to start');
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield pool_1.DbConnection.connect();
            resolve();
        }
        catch (error) {
            log_1.default.err(error);
            reject(error);
        }
    }));
});
exports.HttpServer = (app) => __awaiter(void 0, void 0, void 0, function* () {
    log_1.default.info('Http Server function called to start');
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const port = process.env.PORT || 80;
            const host = process.env.HOST || '0.0.0.0';
            yield app.listen(port, host);
            log_1.default.info(`Http server started successfully and listen on ${host}:${port} .`);
            resolve();
        }
        catch (error) {
            log_1.default.err('Http server failed to start with following error', error);
            reject();
        }
    }));
});
//# sourceMappingURL=start.js.map