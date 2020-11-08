var consoleLogger = require('./console');
var enums_1 = require('../utility/enums');
// TODO add service name, node and ip
var logger = function (level, date) {
    var msg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        msg[_i - 2] = arguments[_i];
    }
    if (process.env.LOG_CONSOLE_LEVEL || false) {
        if (process.env.LOG_CONSOLE_LEVEL || false) {
            var selectedLevel = enums_1.LOG_LEVELS[process.env.LOG_CONSOLE_LEVEL.toUpperCase()];
            if (level <= selectedLevel) {
                consoleLogger.log.apply(consoleLogger, [date + " [" + level + "]"].concat(msg));
            }
        }
    }
};
module.exports = {
    emerg: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.EMERGENCY, new Date().toString()].concat(msg));
    },
    alert: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.ALERT, new Date().toString()].concat(msg));
    },
    crit: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.CRITICAL, new Date().toString()].concat(msg));
    },
    err: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.ERROR, new Date().toString()].concat(msg));
    },
    warn: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.WARNING, new Date().toString()].concat(msg));
    },
    not: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.NOTICE, new Date().toString()].concat(msg));
    },
    info: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.INFO, new Date().toString()].concat(msg));
    },
    debug: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        logger.apply(void 0, [enums_1.LOG_LEVEL_INDEX.DEBUG, new Date().toString()].concat(msg));
    }
};
