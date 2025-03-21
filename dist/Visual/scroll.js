"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileScroll = void 0;
const compileScroll = (scroll) => {
    if (typeof scroll === 'undefined' || scroll == null) {
        return '';
    }
    const compilation = [];
    if (scroll) {
        compilation.push('overflow: auto;');
    }
    return compilation.join('');
};
exports.compileScroll = compileScroll;
