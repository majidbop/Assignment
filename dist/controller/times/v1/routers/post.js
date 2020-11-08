"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesPostRoutes = void 0;
const timesPostRoutes = require("express");
exports.timesPostRoutes = timesPostRoutes;
const validateRequestProperty_1 = require("../../../../middleware/validateRequestProperty");
const parametersSchemas_1 = require("../../../../parametersSchemas");
const create_1 = require("../create");
timesPostRoutes.Router().post('/', validateRequestProperty_1.validateRequestProperty(-103, parametersSchemas_1.timeRegister, 'body'), create_1.registerTime);
//# sourceMappingURL=post.js.map