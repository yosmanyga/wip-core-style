"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileColor = void 0;
const compileColor = (color) => {
    if (typeof color === 'undefined' || color == null) {
        return '';
    }
    return `color: ${color};`;
};
exports.compileColor = compileColor;
