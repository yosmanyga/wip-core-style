"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFill = void 0;
const compileFill = (fill) => {
    if (typeof fill === 'undefined' || fill == null) {
        return '';
    }
    return `fill: ${fill};`;
};
exports.compileFill = compileFill;
