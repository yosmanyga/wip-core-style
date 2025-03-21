"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileWidth = exports.normalizeWidth = void 0;
const normalizeWidth = (width) => {
    if (typeof width === 'undefined') {
        return width;
    }
    // Already normalized?
    if (typeof width === 'object') {
        return width;
    }
    if (typeof width === 'number'
        || typeof width === 'string') {
        return {
            def: width
        };
    }
    throw new Error(`Width type not recognized: ${typeof width}`);
};
exports.normalizeWidth = normalizeWidth;
const compileWidth = (width) => {
    if (typeof width === 'undefined') {
        return '';
    }
    const compilation = [];
    if (typeof width.def !== 'undefined') {
        const value = typeof width.def === 'number'
            ? `${width.def}px`
            : `${width.def}`;
        compilation.push(`width: ${value};`);
    }
    if (typeof width.min !== 'undefined') {
        const value = typeof width.min === 'number'
            ? `${width.min}px`
            : `${width.min}`;
        compilation.push(`min-width: ${value};`);
    }
    if (typeof width.max !== 'undefined') {
        const value = typeof width.max === 'number'
            ? `${width.max}px`
            : `${width.max}`;
        compilation.push(`max-width: ${value};`);
    }
    return compilation.join('');
};
exports.compileWidth = compileWidth;
