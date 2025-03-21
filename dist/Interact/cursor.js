"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileCursor = void 0;
const compileCursor = (cursor) => {
    if (typeof cursor === 'undefined' || cursor === null) {
        return '';
    }
    const compilation = [];
    compilation.push(`cursor: ${cursor};`);
    return compilation.join('');
};
exports.compileCursor = compileCursor;
