"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileLine = void 0;
const compileLine = (line) => {
    if (typeof line === 'undefined' || line == null) {
        return '';
    }
    return `line-height: ${line};`;
};
exports.compileLine = compileLine;
