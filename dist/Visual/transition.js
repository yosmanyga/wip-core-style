"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTransition = void 0;
const compileTransition = (transition) => {
    if (typeof transition === 'undefined' || transition == null) {
        return '';
    }
    const compilation = [];
    compilation.push(`transition: ${transition};`);
    return compilation.join('');
};
exports.compileTransition = compileTransition;
