"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileBackground = exports.normalizeBackground = void 0;
const colorString = require("color-string");
const normalizeBackground = (background) => {
    if (typeof background === 'undefined') {
        return background;
    }
    // Already normalized?
    if (typeof background === 'object') {
        return background;
    }
    // Is a color?
    if (typeof background === 'string'
        && colorString.get(background)) {
        return {
            color: background
        };
    }
    throw new Error(`Background type not recognized: ${background}`);
};
exports.normalizeBackground = normalizeBackground;
const compileBackground = (background) => {
    if (typeof background === 'undefined') {
        return '';
    }
    // Is a color?
    if (typeof background === 'object'
        && 'color' in background) {
        return `background-color: ${background.color};`;
    }
    return '';
};
exports.compileBackground = compileBackground;
