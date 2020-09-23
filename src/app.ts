import express = require('express')
import bootstrap = require('./bootstrap/start')
import log from './logger/log';
import { attachTraceId as traceId } from './middleware/traceId';
import { errorMiddleware } from './middleware/error';
import { NotFoundError } from './errors/notFoundError';

const notFoundRoute = (req: any, res: any, next: any) => {
    next(new NotFoundError(-102))
}
import { userRoutes } from './controller/users'

const createApp = (app: any) => {
    app.use(traceId)
    app.use(userRoutes)
    app.use(notFoundRoute)
    app.use(errorMiddleware)
}

export const start = async () => {
    const app = express()
    try {
        log.info('App is starting')
        createApp(app)
        await bootstrap.HttpServer(app)
        await bootstrap.DbStart()
        log.info('App started successfully')
    } catch (error) {
        log.err(error)
        throw error
    }
}
