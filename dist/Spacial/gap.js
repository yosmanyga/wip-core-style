"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileGap = void 0;
const compileGap = (gap) => {
    if (typeof gap === 'undefined' || gap === null) {
        return '';
    }
    return `gap: ${gap}px;`;
};
exports.compileGap = compileGap;
