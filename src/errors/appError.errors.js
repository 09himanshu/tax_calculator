import Error from 'node:errors';

export class appError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

export class InternalServerError extends appError{
    constructor(message, statusCode = 500) {
        super(message, statusCode);
    }
}