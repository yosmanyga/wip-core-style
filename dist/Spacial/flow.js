"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFlow = exports.normalizeFlow = void 0;
const normalizeFlow = (flow) => {
    if (typeof flow === 'undefined' || flow === null) {
        return flow;
    }
    if (typeof flow === 'object') {
        return flow;
    }
    const split = flow.split(' ');
    return {
        direction: split[0],
        wrap: split[1] === 'wrap'
    };
};
exports.normalizeFlow = normalizeFlow;
const compileFlow = (flow) => {
    if (typeof flow === 'undefined' || flow == null) {
        return '';
    }
    const compilation = [];
    compilation.push('display: flex;');
    compilation.push(`flex-direction: ${flow.direction};`);
    compilation.push(`flex-wrap: ${flow.wrap ? 'wrap' : 'nowrap'};`);
    return compilation.join('');
};
exports.compileFlow = compileFlow;
