"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTable = void 0;
const compileTable = (table) => {
    if (typeof table === 'undefined' || table === null) {
        return '';
    }
    if (table === 'table') {
        return 'display: table;';
    }
    else if (table === 'row') {
        return 'display: table-row;';
    }
    else if (table === 'cell') {
        return 'display: table-cell;';
    }
    throw new Error(`Invalid table: ${table} of type ${typeof table}`);
};
exports.compileTable = compileTable;
