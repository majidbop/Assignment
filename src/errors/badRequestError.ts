import { BaseError } from './baseError'

export class BadRequestError extends BaseError {
    constructor(message: string, errorCode: number) {
        super(`Bad Request: ${message}`, 400, errorCode)
    }
}

