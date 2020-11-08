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
exports.DbConnection = void 0;
const pool_1 = __importDefault(require("./mysql/pool"));
const baseError_1 = require("../../errors/baseError");
class DbConnection {
    static isConnected() {
        return DbConnection.pool != null;
    }
    static getPool() {
        if (!DbConnection.pool) {
            throw new baseError_1.BaseError('DB have not been connected', 500, 104);
        }
        return DbConnection.pool;
    }
    static connect() {
        if (DbConnection.pool) {
            throw new baseError_1.BaseError('DB have been connected', 500, 104);
        }
        DbConnection.pool = pool_1.default.connect();
    }
    static disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!DbConnection.pool) {
                throw new baseError_1.BaseError('There is not any available DB connection', 500, 105);
            }
            try {
                pool_1.default.disconnect(DbConnection.pool);
                DbConnection.pool = undefined;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.DbConnection = DbConnection;
//# sourceMappingURL=pool.js.map