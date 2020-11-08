var pool_1 = require('./mysql/pool');
var baseError_1 = require('../../errors/baseError');
var DbConnection = (function () {
    function DbConnection() {
    }
    DbConnection.isConnected = function () {
        return DbConnection.pool != null;
    };
    DbConnection.getPool = function () {
        if (!DbConnection.pool) {
            throw new baseError_1.BaseError('DB have not been connected', 500, 104);
        }
        return DbConnection.pool;
    };
    DbConnection.connect = function () {
        if (DbConnection.pool) {
            throw new baseError_1.BaseError('DB have been connected', 500, 104);
        }
        DbConnection.pool = pool_1["default"].connect();
    };
    DbConnection.prototype.Promise = ;
    DbConnection.async = disconnect();
    return DbConnection;
})();
exports.DbConnection = DbConnection;
void  > {
    if: function () { } };
!DbConnection.pool;
{
    throw new baseError_1.BaseError('There is not any available DB connection', 500, 105);
}
try {
    pool_1["default"].disconnect(DbConnection.pool);
    DbConnection.pool = undefined;
}
catch (error) {
    throw error;
}
