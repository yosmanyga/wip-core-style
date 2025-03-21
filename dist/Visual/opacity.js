"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileOpacity = void 0;
const compileOpacity = (opacity) => {
    if (typeof opacity === 'undefined' || opacity == null) {
        return '';
    }
    return `opacity: ${opacity};`;
};
exports.compileOpacity = compileOpacity;
