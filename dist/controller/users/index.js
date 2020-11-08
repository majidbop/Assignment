"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userRoutes = require("express");
exports.userRoutes = userRoutes;
const v1_1 = require("./v1");
userRoutes.Router().use('/v1/users/', v1_1.versionOneRoutes);
//# sourceMappingURL=index.js.map