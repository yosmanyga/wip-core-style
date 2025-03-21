"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileBox = void 0;
const compileBox = (box) => {
    if (typeof box === 'undefined' || box === null) {
        return '';
    }
    return `box-sizing: ${box};`;
};
exports.compileBox = compileBox;
