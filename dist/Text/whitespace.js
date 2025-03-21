"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileWhitespace = exports.normalizeWhitespace = void 0;
const normalizeWhitespace = (whitespace) => {
    if (typeof whitespace === 'undefined' || whitespace == null) {
        return whitespace;
    }
    if (whitespace === true) {
        return 'pre-wrap';
    }
    return whitespace;
};
exports.normalizeWhitespace = normalizeWhitespace;
const compileWhitespace = (whitespace) => {
    if (typeof whitespace === 'undefined' || whitespace == null) {
        return '';
    }
    return `white-space: ${whitespace};`;
};
exports.compileWhitespace = compileWhitespace;
