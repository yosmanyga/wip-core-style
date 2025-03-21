"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileWrap = void 0;
const compileWrap = (wrap) => {
    if (typeof wrap === 'undefined' || wrap == null) {
        return '';
    }
    const compilation = [];
    if (wrap === 'word') {
        compilation.push('overflow: hidden;');
        compilation.push('overflow-wrap: break-word;');
    }
    else {
        compilation.push(`overflow-wrap: ${wrap};`);
    }
    return compilation.join('');
};
exports.compileWrap = compileWrap;
