"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacialFields = void 0;
const align_1 = require("./align");
const animation_1 = require("./animation");
const box_1 = require("./box");
const display_1 = require("./display");
const flex_1 = require("./flex");
const flow_1 = require("./flow");
const gap_1 = require("./gap");
const grid_1 = require("./grid");
const height_1 = require("./height");
const margin_1 = require("./margin");
const padding_1 = require("./padding");
const position_1 = require("./position");
const table_1 = require("./table");
const width_1 = require("./width");
const z_1 = require("./z");
exports.spacialFields = [
    'align',
    'animation',
    'box',
    'display',
    'flex',
    'flow',
    'gap',
    'grid',
    'height',
    'margin',
    'padding',
    'position',
    'table',
    'width',
    'z'
];
exports.default = {
    compileAlign: align_1.compileAlign,
    compileAnimation: animation_1.compileAnimation,
    compileBox: box_1.compileBox,
    compileDisplay: display_1.compileDisplay,
    normalizeFlex: flex_1.normalizeFlex, compileFlex: flex_1.compileFlex,
    normalizeFlow: flow_1.normalizeFlow, compileFlow: flow_1.compileFlow,
    compileGap: gap_1.compileGap,
    compileGrid: grid_1.compileGrid,
    normalizeHeight: height_1.normalizeHeight, compileHeight: height_1.compileHeight,
    normalizeMargin: margin_1.normalizeMargin, compileMargin: margin_1.compileMargin,
    normalizePadding: padding_1.normalizePadding, compilePadding: padding_1.compilePadding,
    normalizePosition: position_1.normalizePosition, compilePosition: position_1.compilePosition,
    compileTable: table_1.compileTable,
    normalizeWidth: width_1.normalizeWidth, compileWidth: width_1.compileWidth,
    compileZ: z_1.compileZ
};
