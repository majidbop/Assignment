"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runQuery = void 0;
/* eslint no-await-in-loop: "off" */
const pool_1 = require("../pool");
function runQuery(query, connection = pool_1.DbConnection.getPool()) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                if (connection.rollback) {
                    connection.rollback(() => {
                        connection.release();
                        reject(error);
                    });
                }
                else {
                    reject(error);
                }
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.runQuery = runQuery;
//# sourceMappingURL=queryUtility.js.map