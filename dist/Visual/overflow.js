"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileOverflow = void 0;
const compileOverflow = (overflow) => {
    if (typeof overflow === 'undefined' || overflow == null) {
        return '';
    }
    return `overflow: ${overflow};`;
};
exports.compileOverflow = compileOverflow;
