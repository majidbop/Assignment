"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mysql_1 = __importDefault(require("mysql"));
const log_1 = __importDefault(require("../../../logger/log"));
const baseError_1 = require("../../../errors/baseError");
module.exports = {
    connect() {
        log_1.default.info('Going to create a pool to connect to mysql');
        const mysqlInstance = mysql_1.default.createPool({
            connectionLimit: 10,
            host: process.env.DB_ADDRESS,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        log_1.default.info('connected to mysql');
        return mysqlInstance;
    },
    disconnect: (pool) => {
        if (!pool) {
            throw new baseError_1.BaseError('There is not any available DB connection', 500, 105);
        }
        pool.end();
    },
};
//# sourceMappingURL=pool.js.map