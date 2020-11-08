/* eslint "no-console": off */
var log = function () {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i - 0] = arguments[_i];
    }
    console.log.apply(console, msg);
};
exports.log = log;
