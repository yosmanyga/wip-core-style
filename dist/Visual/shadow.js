"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileShadow = void 0;
const compileShadow = (shadow) => {
    if (typeof shadow === 'undefined' || shadow == null) {
        return '';
    }
    const compilation = [];
    compilation.push(`box-shadow: ${shadow.width}px ${shadow.height}px ${shadow.radius}px ${shadow.color};`);
    if (typeof shadow.opacity !== 'undefined') {
        compilation.push(`shadow-opacity: ${shadow.opacity};`);
    }
    if (typeof shadow.elevation !== 'undefined') {
        compilation.push(`elevation: ${shadow.elevation};`);
    }
    return compilation.join('');
};
exports.compileShadow = compileShadow;
