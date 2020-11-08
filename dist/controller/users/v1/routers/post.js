"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPostRoutes = void 0;
const userPostRoutes = require("express");
exports.userPostRoutes = userPostRoutes;
const validateRequestProperty_1 = require("../../../../middleware/validateRequestProperty");
const parametersSchemas_1 = require("../../../../parametersSchemas");
const create_1 = require("../create");
const read_1 = require("../read");
userPostRoutes.Router().post('/login', validateRequestProperty_1.validateRequestProperty(-105, parametersSchemas_1.userLogin, 'body'), read_1.login);
userPostRoutes.Router().post('/', validateRequestProperty_1.validateRequestProperty(-103, parametersSchemas_1.userRegister, 'body'), create_1.register);
//# sourceMappingURL=post.js.map