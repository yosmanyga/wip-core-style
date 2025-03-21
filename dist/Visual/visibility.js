"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileVisibility = void 0;
const compileVisibility = (visibility) => {
    if (typeof visibility === 'undefined' || visibility === null) {
        return '';
    }
    return `visibility: ${visibility};`;
};
exports.compileVisibility = compileVisibility;
