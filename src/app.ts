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
import { timeRoutes } from './controller/times'
import { athletesRoutes } from './controller/athletes'

const createApp = (app: any) => {
    app.use(traceId)
    app.use(athletesRoutes)
    app.use(timeRoutes)
    app.use(userRoutes)
    app.use(notFoundRoute)
    app.use(errorMiddleware)
}

const start = async () => {
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

start()
    .then(() => { })
    .catch((error) => {
        console.log(`server ended with error:\n${error} `)
        process.exit(1)
    })