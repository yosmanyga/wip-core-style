"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRatio = void 0;
const compileRatio = (ratio) => {
    if (typeof ratio === 'undefined' || ratio == null) {
        return '';
    }
    return `aspect-ratio: ${ratio};`;
};
exports.compileRatio = compileRatio;
