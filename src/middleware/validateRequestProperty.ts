import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });
import { BadRequestError } from '../errors/badRequestError';

export const validateRequestProperty = (errorCode: number, schema: any, target: string, ...validators: any[]) => (req: any, res: any, next: any) => {
    try {
        const valid = ajv.validate(schema, req[target]);

        if (!valid) {
            const message = ajv.errorsText();

            next(new BadRequestError(message, errorCode));
            return;
        }

        validators.forEach((validator) => {
            const message = validator(req[target]);

            if (message) {
                next(new BadRequestError(message, errorCode));
            }
        })
    } catch (error) {
        next(new BadRequestError(error, errorCode));
    }

    next();
}

