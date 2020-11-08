"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeRoutes = void 0;
const timeRoutes = require("express");
exports.timeRoutes = timeRoutes;
const v1_1 = require("./v1");
timeRoutes.Router().use('/v1/times/', v1_1.versionOneRoutes);
//# sourceMappingURL=index.js.map