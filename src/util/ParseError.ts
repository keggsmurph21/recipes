export class ParseError extends Error {
    constructor(...args: any[]) {
        super(...args);
        this.name = 'ParseError';
    }
}
