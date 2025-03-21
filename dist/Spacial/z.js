"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileZ = void 0;
const compileZ = (z, important) => {
    if (typeof z === 'undefined' || z === null) {
        return '';
    }
    return `z-index: ${z}${important ? ' !important' : ''};`;
};
exports.compileZ = compileZ;
