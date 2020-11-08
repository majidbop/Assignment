var mysql_1 = require('mysql');
var log_1 = require('../../../logger/log');
var baseError_1 = require('../../../errors/baseError');
module.exports = {
    connect: function () {
        log_1["default"].info('Going to create a pool to connect to mysql');
        var mysqlInstance = mysql_1["default"].createPool({
            connectionLimit: 10,
            host: process.env.DB_ADDRESS,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        log_1["default"].info('connected to mysql');
        return mysqlInstance;
    },
    disconnect: function (pool) {
        if (!pool) {
            throw new baseError_1.BaseError('There is not any available DB connection', 500, 105);
        }
        pool.end();
    }
};
