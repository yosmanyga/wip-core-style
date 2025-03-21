"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTransform = void 0;
const compileTransform = (transform) => {
    if (typeof transform === 'undefined' || transform == null) {
        return '';
    }
    const compilation = [];
    compilation.push(`transform: ${transform};`);
    return compilation.join('');
};
exports.compileTransform = compileTransform;
