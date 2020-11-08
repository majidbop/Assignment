"use strict";
const consoleLogger = require("./console");
const enums_1 = require("../utility/enums");
// TODO add service name, node and ip
const logger = (level, date, ...msg) => {
    if (process.env.LOG_CONSOLE_LEVEL || false) {
        if (process.env.LOG_CONSOLE_LEVEL || false) {
            const selectedLevel = enums_1.LOG_LEVELS[process.env.LOG_CONSOLE_LEVEL.toUpperCase()];
            if (level <= selectedLevel) {
                consoleLogger.log(`${date} [${level}]`, ...msg);
            }
        }
    }
};
module.exports = {
    emerg: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.EMERGENCY, new Date().toString(), ...msg);
    },
    alert: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.ALERT, new Date().toString(), ...msg);
    },
    crit: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.CRITICAL, new Date().toString(), ...msg);
    },
    err: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.ERROR, new Date().toString(), ...msg);
    },
    warn: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.WARNING, new Date().toString(), ...msg);
    },
    not: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.NOTICE, new Date().toString(), ...msg);
    },
    info: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.INFO, new Date().toString(), ...msg);
    },
    debug: (...msg) => {
        logger(enums_1.LOG_LEVEL_INDEX.DEBUG, new Date().toString(), ...msg);
    },
};
//# sourceMappingURL=log.js.map