export class BaseError extends Error {
    readonly statusCode: number;
    readonly errorCode: number;

    constructor(message: string, statusCode = 500, errorCode: number) {
        super(message)

        this.statusCode = statusCode
        this.errorCode = errorCode
    }
}
