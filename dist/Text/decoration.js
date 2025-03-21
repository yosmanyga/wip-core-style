"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileDecoration = exports.normalizeDecoration = void 0;
const normalizeDecoration = (decoration) => {
    if (typeof decoration === 'undefined' || decoration == null) {
        return '';
    }
    if (typeof decoration === 'string') {
        const split = decoration.split(' ');
        return {
            line: split[0],
            color: split[1],
            style: split[2],
            thickness: split[3]
        };
    }
    return decoration;
};
exports.normalizeDecoration = normalizeDecoration;
const compileDecoration = (decoration) => {
    if (typeof decoration === 'undefined' || decoration == null) {
        return '';
    }
    if (typeof decoration === 'string') {
        return `text-decoration: ${decoration};`;
    }
    const compilation = [];
    if (typeof decoration.line !== 'undefined') {
        compilation.push(`text-decoration-line: ${decoration.line};`);
    }
    if (typeof decoration.color !== 'undefined') {
        compilation.push(`text-decoration-color: ${decoration.color};`);
    }
    if (typeof decoration.style !== 'undefined') {
        compilation.push(`text-decoration-style: ${decoration.style};`);
    }
    if (typeof decoration.thickness !== 'undefined') {
        compilation.push(`text-decoration-thickness: ${decoration.thickness};`);
    }
    return compilation.join('');
};
exports.compileDecoration = compileDecoration;
