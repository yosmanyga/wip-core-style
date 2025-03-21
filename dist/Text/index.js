"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textFields = void 0;
const decoration_1 = require("./decoration");
const font_1 = require("./font");
const line_1 = require("./line");
const whitespace_1 = require("./whitespace");
exports.textFields = [
    'decoration',
    'font',
    'line',
    'whitespace'
];
exports.default = {
    compileDecoration: decoration_1.compileDecoration,
    compileFont: font_1.compileFont,
    compileLine: line_1.compileLine,
    normalizeWhitespace: whitespace_1.normalizeWhitespace, compileWhitespace: whitespace_1.compileWhitespace
};
