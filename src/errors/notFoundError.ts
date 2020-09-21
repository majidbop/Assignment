import { BaseError } from './baseError';

export class NotFoundError extends BaseError {
    constructor(errorCode: number) {
        super('Not Found', 404, errorCode)
    }
}
