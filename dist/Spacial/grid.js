"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileGrid = void 0;
const compileGrid = (grid) => {
    if (typeof grid === 'undefined' || grid === null) {
        return '';
    }
    if (typeof grid === 'string') {
        return `display: grid; grid-template-columns: ${grid};`;
    }
    return `display: grid; grid-template-rows: ${grid.rows};`;
};
exports.compileGrid = compileGrid;
