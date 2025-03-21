"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileAlign = void 0;
const compileAlign = (align) => {
    if (typeof align === 'undefined' || align === null) {
        return '';
    }
    const compilation = [];
    if (align.main) {
        compilation.push(`justify-content: ${align.main};`);
    }
    if (align.cross) {
        compilation.push(`align-items: ${align.cross};`);
    }
    if (align.self) {
        compilation.push(`align-self: ${align.self};`);
    }
    if (align.text) {
        compilation.push(`text-align: ${align.text};`);
    }
    if (align.vertical) {
        compilation.push(`vertical-align: ${align.vertical};`);
    }
    return compilation.join('');
};
exports.compileAlign = compileAlign;
