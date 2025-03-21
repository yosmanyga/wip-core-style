"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFlex = exports.normalizeFlex = void 0;
const normalizeFlex = (flex) => {
    if (typeof flex === 'undefined' || flex === null) {
        return flex;
    }
    if (typeof flex === 'boolean') {
        flex = {
            grow: 1
        };
    }
    if (typeof flex === 'number') {
        flex = {
            grow: flex
        };
    }
    return flex;
};
exports.normalizeFlex = normalizeFlex;
const compileFlex = (flex) => {
    if (typeof flex === 'undefined' || flex == null) {
        return '';
    }
    const compilation = [];
    if (typeof flex.grow !== 'undefined') {
        compilation.push(`flex-grow: ${flex.grow};`);
    }
    if (typeof flex.shrink !== 'undefined') {
        compilation.push(`flex-shrink: ${flex.shrink};`);
    }
    if (typeof flex.basis !== 'undefined') {
        compilation.push(`flex-basis: ${flex.basis};`);
    }
    return compilation.join('');
};
exports.compileFlex = compileFlex;
