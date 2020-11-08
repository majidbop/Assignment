"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bootstrap = require("./bootstrap/start");
const log_1 = __importDefault(require("./logger/log"));
const traceId_1 = require("./middleware/traceId");
const error_1 = require("./middleware/error");
const notFoundError_1 = require("./errors/notFoundError");
const notFoundRoute = (req, res, next) => {
    next(new notFoundError_1.NotFoundError(-102));
};
const users_1 = require("./controller/users");
const createApp = (app) => {
    app.use(traceId_1.attachTraceId);
    app.use(users_1.userRoutes);
    app.use(notFoundRoute);
    app.use(error_1.errorMiddleware);
};
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    try {
        log_1.default.info('App is starting');
        createApp(app);
        yield bootstrap.HttpServer(app);
        yield bootstrap.DbStart();
        log_1.default.info('App started successfully');
    }
    catch (error) {
        log_1.default.err(error);
        throw error;
    }
});
start()
    .then(() => { })
    .catch((error) => {
    console.log(`server ended with error:\n${error} `);
    process.exit(1);
});
//# sourceMappingURL=app.js.map