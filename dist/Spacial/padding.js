"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilePadding = exports.normalizePadding = void 0;
const normalizePadding = (padding) => {
    if (typeof padding === 'undefined') {
        return padding;
    }
    if (typeof padding === 'string'
        && padding === 'auto') {
        return padding;
    }
    if (typeof padding === 'number') {
        padding = {
            top: padding,
            bottom: padding,
            left: padding,
            right: padding
        };
    }
    if (typeof padding === 'object') {
        let normalization = {};
        if (typeof padding.raw !== 'undefined') {
            normalization = {
                ...normalization,
                raw: padding.raw
            };
        }
        if (typeof padding.top !== 'undefined') {
            normalization = {
                ...normalization,
                top: padding.top
            };
        }
        if (typeof padding.bottom !== 'undefined') {
            normalization = {
                ...normalization,
                bottom: padding.bottom
            };
        }
        if (typeof padding.left !== 'undefined') {
            normalization = {
                ...normalization,
                left: padding.left
            };
        }
        if (typeof padding.right !== 'undefined') {
            normalization = {
                ...normalization,
                right: padding.right
            };
        }
        return normalization;
    }
    throw new Error(`Invalid padding: ${padding} of type ${typeof padding}`);
};
exports.normalizePadding = normalizePadding;
const compilePadding = (padding) => {
    if (typeof padding === 'undefined') {
        return '';
    }
    if (typeof padding === 'object') {
        const compilation = [];
        if (padding.top) {
            compilation.push(`padding-top: ${padding.top}px;`);
        }
        if (padding.bottom) {
            compilation.push(`padding-bottom: ${padding.bottom}px;`);
        }
        if (padding.left) {
            compilation.push(`padding-left: ${padding.left}px;`);
        }
        if (padding.right) {
            compilation.push(`padding-right: ${padding.right}px;`);
        }
        return compilation.join('');
    }
    return `padding: ${padding};`;
};
exports.compilePadding = compilePadding;
