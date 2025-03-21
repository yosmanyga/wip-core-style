"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileHeight = exports.normalizeHeight = void 0;
const normalizeHeight = (height) => {
    if (typeof height === 'undefined' || height === null) {
        return height;
    }
    if (typeof height === 'number'
        || typeof height === 'string') {
        height = {
            def: height
        };
    }
    return height;
};
exports.normalizeHeight = normalizeHeight;
const compileHeight = (height) => {
    if (typeof height === 'undefined' || height == null) {
        return '';
    }
    const compilation = [];
    if (typeof height.def !== 'undefined') {
        const value = typeof height.def === 'number'
            ? `${height.def}px`
            : `${height.def}`;
        compilation.push(`height: ${value};`);
    }
    if (typeof height.min !== 'undefined') {
        const value = typeof height.min === 'number'
            ? `${height.min}px`
            : `${height.min}`;
        compilation.push(`min-height: ${value};`);
    }
    if (typeof height.max !== 'undefined') {
        const value = typeof height.max === 'number'
            ? `${height.max}px`
            : `${height.max}`;
        compilation.push(`max-height: ${value};`);
    }
    return compilation.join('');
};
exports.compileHeight = compileHeight;
