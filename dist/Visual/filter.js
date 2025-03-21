"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFilter = void 0;
const compileFilter = (filter) => {
    if (typeof filter === 'undefined' || filter === null) {
        return '';
    }
    const compilation = [];
    if (filter) {
        compilation.push(`filter: ${filter};`);
    }
    return compilation.join('');
};
exports.compileFilter = compileFilter;
