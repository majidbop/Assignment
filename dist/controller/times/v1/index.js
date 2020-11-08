"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionOneRoutes = void 0;
const versionOneRoutes = require("express");
exports.versionOneRoutes = versionOneRoutes;
const post_1 = require("./routers/post");
versionOneRoutes.Router().use(post_1.timesPostRoutes);
//# sourceMappingURL=index.js.map