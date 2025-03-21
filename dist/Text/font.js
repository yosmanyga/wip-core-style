"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFont = void 0;
const compileFont = (font) => {
    if (typeof font === 'undefined' || font == null) {
        return '';
    }
    if (typeof font === 'string') {
        return `font: ${font};`;
    }
    const compilation = [];
    if (typeof font.style !== 'undefined') {
        compilation.push(`font-style: ${font.style};`);
    }
    if (typeof font.variant !== 'undefined') {
        compilation.push(`font-variant: ${font.variant};`);
    }
    if (typeof font.weight !== 'undefined') {
        compilation.push(`font-weight: ${font.weight};`);
    }
    if (typeof font.size !== 'undefined') {
        let value = font.size;
        if (typeof value === 'number') {
            value = `${value}px`;
        }
        compilation.push(`font-size: ${value};`);
    }
    if (typeof font.family !== 'undefined') {
        compilation.push(`font-family: ${font.family};`);
    }
    return compilation.join('');
};
exports.compileFont = compileFont;
