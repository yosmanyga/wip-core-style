"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFit = void 0;
const compileFit = (fit) => {
    if (typeof fit === 'undefined' || fit == null) {
        return '';
    }
    return `object-fit: ${fit};`;
};
exports.compileFit = compileFit;
