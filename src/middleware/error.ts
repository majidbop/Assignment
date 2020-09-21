/* eslint no-unused-vars: 0 */
import { BaseError } from '../errors/baseError'
import Log from '../logger/log'

const createResponse = (statusCode: number, error: BaseError, traceId: string) => {
    if (statusCode !== 500) {
        return {
            errorCode: error.errorCode,
            message: error.message,
            traceId,
        }
    }

    return {
        errorCode: -101,
        message: 'Internal Server Error',
        traceId,
    }
}

export const errorMiddleware = (error: any, req: any, res: any, next: any) => {
    const { traceId } = req
    const statusCode = error instanceof BaseError ? error.statusCode : 500
    const response = createResponse(statusCode, error, traceId)

    Log.err(
        `error have raised you can find error information as follows:\nroute: ${JSON.stringify(
            req.route
        )} \nCode: ${statusCode}, traceId: ${traceId},\n${error.stack}`
    )

    res.status(statusCode).json(response)
}
