"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileDisplay = void 0;
const compileDisplay = (display) => {
    if (typeof display === 'undefined' || display === null) {
        return '';
    }
    return `display: ${display};`;
};
exports.compileDisplay = compileDisplay;
